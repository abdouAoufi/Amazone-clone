import "./App.css";
import Header from "./components/Header/Header";
import Cart from "./components/Cart/Cart";
import Home from "../src/home/home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { db } from "./Firebase/FireBase";

function App() {
  const [cartItems, setcartItems] = useState([]);
  const getCardItems = () => {
    db.collection("cartItems").onSnapshot((snapShot) => {
      const tempItems = snapShot.docs.map((docs) => {
        return {
          id: docs.id,
          product: docs.data(),
        };
      });
      setcartItems(tempItems);
    });
  };

  useEffect(() => {
    getCardItems();
}, []);
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/cart">
            <Cart cartItems={cartItems} />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
