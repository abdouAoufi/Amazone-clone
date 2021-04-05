import "./App.css";
import Header from "./components/Header/Header";
import Cart from "./components/Cart/Cart";
import Home from "../src/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { db, auth } from "./Firebase/FireBase";
import Login from "./Login/Login";

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [cartItems, setcartItems] = useState([]);
  const getCardItems = () => {
    db.collection("cartItems").onSnapshot((snapShot) => {
      const tempItems = snapShot.docs.map((docs) => {
        return {
          id: docs.id,
          product: docs.data(),
        };
      });
      setcartItems(tempItems); // ? basically it sets the state
    });
  };

  let quantity = 0;
  cartItems.forEach((singleProduct) => {
    quantity += singleProduct.product.quantity;
  });

  console.log("user", user);

  useEffect(() => {
    getCardItems();
  }, []);

  const performSearch = (value) => {
    console.log("Searching for ..... ", value);
  };

  const signOut = () => {
    auth.signOut().then(() => {
      setUser(null);
      localStorage.removeItem("user");
    });
  };

  return (
    <Router>
      {!user ? (
        <Login setUser={setUser} />
      ) : (
        <div className="App">
          <Header
            signOut={signOut}
            userInfo={user}
            quantity={quantity}
            searchWordBack={performSearch}
          />
          <Switch>
            <Route path="/cart">
              <Cart cartItems={cartItems} />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      )}
    </Router>
  );
}

export default App;
