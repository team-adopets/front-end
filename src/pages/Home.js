import React, { Component } from "react";
import Headercomp from "../sections/Headercomp";
import Mainsection from "../sections/Mainsection";

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
