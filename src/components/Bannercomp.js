import React from "react";
import { Link } from "react-router-dom"
import ScrollAnimation from "react-animate-on-scroll";

import "./styles.scss";

const Bannercomp = props => {
  return (
    <div className="col-md-4 col-sm-4">
      <ScrollAnimation animateIn="fadeInLeft" duration={1}>
        <div className="banner mb-30">
          <div className="banner-title pt-30">
            <p>{props.banner_title}</p>
          </div>
          <div className="banner-content">
            <h4>{props.banner_desc}</h4>
            <Link className="store-link" to="/signup">
              Daftar Sekarang
            </Link>
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
};

export default Bannercomp;
