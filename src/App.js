import "./App.css";
import Header from "./components/Header/Header";
import Cart from "./components/Cart/Cart";
import Home from "../src/home/Home";
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
      setcartItems(tempItems); // ? basically it sets the state
    });
  };

  let quantity = 0;
  cartItems.forEach((singleProduct) => {
    quantity += singleProduct.product.quantity;
  });

  useEffect(() => {
    getCardItems();
  }, []);

  const performSearch = (value) => {
    const produtsToSearch = db.collection("products");
    let query;
    if (value[0] === value[0].toUpperCase()) {
      console.log("Searching for  .. capitle", value);
      query = produtsToSearch.where("name", ">=",  value );
    } else {
      console.log(
        "Searching for  ..",
        value.charAt(0).toUpperCase() + value.slice(1)
      );
      query = produtsToSearch.where(
        "name",
        ">=",
        value.charAt(0).toUpperCase() + value.slice(1)
      );
    }
    query
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          if (doc.data().name.includes(value)) {
            console.log("Yes it does contain");
          }if(doc.data().name.includes(value.charAt(0).toLowerCase() + value.slice(1))){
            console.log("Yes it does contain");
          }
        });
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  };

  return (
    <Router>
      <div className="App">
        <Header quantity={quantity} searchWordBack={performSearch} />
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
