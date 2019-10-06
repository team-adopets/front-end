import React from "react";
import Navbarcomp from "./components/Navbarcomp";
import Headercomp from "./components/Headercomp";
import "./App.scss";
import Banner from "./components/Banner";

export default function App() {
  return (
    <div>
      <Navbarcomp />
      <Headercomp />
      <Banner title="Lambrador Retriever"/>
      <Banner title="French Buldog"/>
      <Banner title="Beagel"/>
    </div>
  );
}
