import React from "react";
import { Link } from "react-router-dom"

import "./styles.scss";

const Headercomp = () => {
  return (
    <section className="site-blocks-cover overflow-hidden bg-light">
      <div className="container">
        <div className="row">
          <div className="col-md-5 mr-auto align-self-center text-center text-md-left">
            <div className="intro-text">
              <h1 className="title-header">Where Pets Find Their People</h1>
              <p className="mb-4">
              Thousands of adoptable pets are looking for people. People like you.
              </p>
              {/* <p>
                <button className="btn_adop">
                  Register
                </button>
              </p> */}
              <Link to="/signup" className="btn__bg nav_link">
                Register
              </Link>
            </div>
          </div>
          <div className="col-md-5 align-self-center text-center text-md-right">
            <img
              src="assets/images/dog_1.jpg"
              alt="images-1"
              className="img-fluid cover-img"
            />
            <img
              src="assets/images/dog_2.jpg"
              alt="images-2"
              className="img-fluid cover-img2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Headercomp;
