import React, { Component } from "react";
import Headercomp from "../components/Headercomp";
import Mainsection from "../components/Mainsection";

class Home extends Component {
  render() {
    return (
      <div>
        <Headercomp />
        <Mainsection />
      </div>
    );
  }
}

export default Home;
