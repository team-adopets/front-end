import React from "react";
import Navbarcomp from "./sections/Navbarcomp";
import Productlist from "./pages/Productlist";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footercom from "./sections/Footercomp";
import { Route, Switch } from "react-router-dom";

import "./App.scss";

export default function App() {
  return (
    <div>
      <Navbarcomp />
      <Home/>
        <Switch>
          <Route exact path="/" to={Home} />
          <Route path="/about" to={About} />
          <Route path="/product" to={Productlist} />
          <Route path="/contact" to={Contact} />
        </Switch>
        <Footercom />
      </div>
  );
}
