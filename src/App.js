import React from "react";
import Navbarcomp from "./components/Navbarcomp";
import Productlist from "./pages/Productlist";
import Home from "./pages/Home";
import About from "./pages/About";
import Footercom from "./components/Footercomp";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Cartcomp from "./components/Cartcomp";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./helper/PrivateRoute";

import "./App.scss";

export default function App() {
  return (
    <Router>
      <div>
      <Navbarcomp />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/product" component={Productlist} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
        <PrivateRoute path="/cart" component={Cartcomp} />
      </Switch>
      <Footercom />
      </div>
    </Router>
  );
}
