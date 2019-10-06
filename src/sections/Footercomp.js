import React from "react";
// import Addpost from "./Addpost";
import "./styles.scss"

const Footercomp = () => {
  return (
    <div className="mt-5 pt-5 pb-5 footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-xs-12 about-company">
            <h2>Brand Logo</h2>
            <p>
             Adopet adalah tempat dimana anda dan sekeluarga ingin mencari dan mengadopsi anjing yang lengkap,
             dapat dipercaya, dan premium{" "}
            </p>
            <p>
              <a href="#">
                <i className="fa fa-facebook-square mr-1"></i>
              </a>
              <a href="#">
                <i className="fa fa-linkedin-square"></i>
              </a>
            </p>
          </div>
          <div className="col-lg-3 col-xs-12 links">
            <h4 className="mt-lg-0 mt-sm-3">Layanan</h4>
            <ul className="m-0 p-0">
              <li>
                <a href="#">Tentang Kami</a>
              </li>
              <li>
                <a href="#">Kebijakan Privasi</a>
              </li>
              <li>
                <a href="#">Persyaratan dan Kebijakan</a>
              </li>
              <li>
                <a href="#">Kebijakan Penukaran dan Pengembalian</a>
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
              <i className="fa fa-envelope-o mr-3"></i>info@gmail.com
            </p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col copyright">
            <p className="">
              <small className="text-white-50">© 2019. All Rights Reserved.</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footercomp;
