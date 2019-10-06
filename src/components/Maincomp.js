import React, { Component } from "react";
import Bannercomp from "./Bannercomp";
import ServicePolicy from "./ServicePolicy"
import Trendingcomp from "./Trendingcomp";

import "./styles.scss"
export default class Maincomp extends Component {
  render() {
    return (
      <main>
        <Bannercomp/>
        <ServicePolicy/>
        <Trendingcomp/>
      </main>
    );
  }
}
