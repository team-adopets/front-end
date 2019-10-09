import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";

import Bannercomp from "./Bannercomp";
import ServicePolicy from "./ServicePolicy";
import Productitem from "./Productitem";

import {
  faHeadset,
  faPiggyBank,
  faGifts
} from "@fortawesome/free-solid-svg-icons";
import "./styles.scss";

export default class Mainsection extends Component {
  
  render() {
    return (
      <main className="main-section">
        <section className="banner-comp section-spacer">
          <div className="container">
            <div className="row mb-30">
              <Bannercomp
                banner_title="Produk Populer"
                banner_desc="Golden Retriever"
              />
              <Bannercomp
                banner_title="Semua Produk"
                banner_desc="French Buldog"
              />
              <Bannercomp
                banner_title="Produk Terbaru"
                banner_desc="Shin Tzu"
              />
            </div>
          </div>
        </section>
        <section className="service-policy">
          <div className="container">
            <div className="row">
              <ServicePolicy
                icon={faPiggyBank}
                title="Pengembalian Uang"
                desc="30 Hari untuk pengembalian"
              />
              <ServicePolicy
                icon={faHeadset}
                title="Layanan Online"
                desc="Kami melayani 8jam/hari"
              />
              <ServicePolicy
                icon={faGifts}
                title="Promosi"
                desc="Kupon dan diskon"
              />
            </div>
          </div>
        </section>
        <section className="trending-product section-spacer">
        <ScrollAnimation animateIn="slideInLeft" duration={2}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section-title text-center">
                  <h2>Product Terbaru</h2>
                </div>
              </div>
            </div>

            <div className="row">
              <Productitem name="Thomas" price="1500" species="Purebred"/>
              <Productitem name="Thomas" price="1500" species="Purebred"/>
              <Productitem name="Thomas" price="1500" species="Purebred"/>
              <Productitem name="Thomas" price="1500" species="Purebred"/>
              <Productitem name="Thomas" price="1500" species="Purebred"/>
              <Productitem name="Thomas" price="1500" species="Purebred"/>
            </div>
          </div>
          </ScrollAnimation>
        </section>
      </main>
    );
  }
}
