import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import Payment from "./Payment";
import Orders from "./Orders";
import "./App.css";
import Footer from "./Footer";

const promise = loadStripe(
  "pk_test_51HQ4C1EL0g1LP4tLVw0M49r4cbfKHOgTe3Zm2ME3nWhI2LJ349hLebtMFP5GvuDR58IcIIsx9sxXG40Axo3hhiYC00nOesb89k"
);

function App() {
  const [{ user }, dispatch] = useStateValue();

  //piece of code which runs on a given condition

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //user logged in...
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user is logged out..
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    return () => {
      //any cleanup operation like componentdidunmocunt
      unsubscribe();
    };
  }, []);

  //console.log("user is", user);

  return (
    <Router>
      <div className="app">
        {/* <h2>Amazon clone 🚀 </h2> */}

        {/* React router */}
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
            <Footer />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
            <Footer />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
            <Footer />
          </Route>
          <Route path="/" exact>
            <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
