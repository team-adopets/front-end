import React from "react";

import Navbarcomp from "./components/Navbarcomp";
import Headercomp from "./components/Headercomp";
import Blogpost from "./components/Blogpost";
import Footercomp from "./components/Footercomp";

import "./App.scss";

export default function App() {
  return (
    <div>
      <Navbarcomp />
      <Headercomp />
      <Blogpost />
      <Blogpost />
      <Footercomp />
    </div>
  );
}
