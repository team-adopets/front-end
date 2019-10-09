import React from "react";
import Navbarcomp from "./components/Navbarcomp";
import Productlist from "./pages/Productlist";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footercom from "./components/Footercomp";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.scss";
import Cartcomp from "./components/Cartcomp";

export default function App() {
  return (
    <Router>
      <div>
      <Navbarcomp />
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/product">
          <Productlist/>
        </Route>
        <Route path="/contact">
          <Contact/>
        </Route>
        <Route path="/signin">
          <Signin/>
        </Route>
        <Route path="/signup">
          <Signup/>
        </Route>
        <Route path="/cart">
          <Cartcomp/>
        </Route>
      </Switch>
      <Footercom />
      </div>
      
    </Router>
  );
}
