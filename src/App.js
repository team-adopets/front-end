import React from "react";
import Navbarcomp from "./sections/Navbarcomp";
import Headercomp from "./sections/Headercomp";
import Footercomp from "./sections/Footercomp";
import "./App.scss";

export default function App() {
  return (
    <div>
      <Navbarcomp />
      <Headercomp />
      <Footercomp/>
    </div>
  );
}
