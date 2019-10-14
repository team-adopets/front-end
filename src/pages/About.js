import React, { Component } from "react";
import "./styles.scss";
class About extends Component {
  render() {
    return (
      <div className="about section-spacer">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="about-text-wrap">
                <h1 className="about-us-text">About Us</h1>
                <h2>
                  <span>Kami menyediakan</span> produk yang terbaik untuk anda
                </h2>
                <p>
                  AdoPet adalah basis data hewan online yang dapat dicari
                  yang membutuhkan rumah. Ini juga merupakan direktori dari
                  hampir 11.000 tempat perlindungan hewan dan organisasi adopsi
                  di seluruh daerah Jakarta.
                </p>
              </div>
            </div>
            <div className="col-xl5 col-lg-6 ml-auto">
              <div className="about-img-wrap">
                <img src="" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
