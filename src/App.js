import React from "react";
import Navbarcomp from "./sections/Navbarcomp";
import Productlist from "./pages/Productlist";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Headercomp from "./sections/Headercomp";
import Mainsection from "./sections/Mainsection";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.scss";

export default function App() {
  return (
    <Router>
      <Navbarcomp />
      <div>
        {/* <Route exact path="/" to={Home} /> */}
        <Headercomp/>
        <Mainsection/>
        <Route path="/about" to={About} />
        <Route path="/product" to={Productlist} />
        <Route path="/contact" to={Contact} />
      </div>
    </Router>
  );
}
