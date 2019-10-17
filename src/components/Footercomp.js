import React from "react";
import { Link } from "react-router-dom"

import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./styles.scss"

const Footercomp = () => {
  return (
    <div className="mt-5 pt-5 pb-5 footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-xs-12 about-company">
            <h2>AdoPet</h2>
            <p>
             Adopet adalah tempat dimana anda dan sekeluarga dapat mencari dan mengadopsi anjing yang lengkap,
             dapat dipercaya, dan premium{" "}
            </p>
            <p>
              <Link to="/">
                <i className="fab fa-facebook mr-3"></i>
              </Link>
              <Link to="/">
                <i className="fab fa-instagram mr-3"></i>
              </Link>
            </p>
          </div>
          <div className="col-lg-3 col-xs-12 links">
            <h4 className="mt-lg-0 mt-sm-3">Services</h4>
            <ul className="m-0 p-0">
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/">Privacy policy</Link>
              </li>
              <li>
                <Link to="/">Requirements and Policies</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-xs-12 location">
            <h4 className="mt-lg-0 mt-sm-4">Location</h4>
            <p>Jl. Kemang 1. No.7, Bangka, Mampang Prapatan, DKI Jakarta</p>
            <p className="mb-0">
              <i className="fa fa-phone mr-3"></i>(541) 754-3010
            </p>
            <p>
              <i className="fa fa-envelope-o mr-3"></i>adopet@gmail.com
            </p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col copyright">
            <p className="">
              <small className="text-black-50">© 2019. All Rights Reserved.</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footercomp;
