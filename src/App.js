import React from "react";
import Navbarcomp from "./Components/Navbarcomp";
import Productlist from "./Pages/Productlist";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Footercom from "./Components/Footercomp";
import Signin from "./Components/Signin";
import Signup from "./Components/Signup";
import Cartcomp from "./Components/Cartcomp";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./Helpers/PrivateRoute";

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
