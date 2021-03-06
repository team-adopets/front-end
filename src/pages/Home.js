import React, { Component } from "react";
import Headercomp from "../components/Headercomp";

import Bannercomp from "../components/Bannercomp";
import ServicePolicy from "../components/ServicePolicy";

import {
  faHeadset,
  faPiggyBank,
  faGifts
} from "@fortawesome/free-solid-svg-icons";

class Home extends Component {
  render() {
    return (
      <div>
        <Headercomp />
        <main className="main-section">
        <section className="banner-comp section-spacer">
          <div className="container">
            <div className="row mb-30">
              <Bannercomp
                banner_title="Popular"
                banner_desc="Beagle"
              />
              <Bannercomp
                banner_title="Favorite"
                banner_desc="French Buldog"
              />
              <Bannercomp
                banner_title="Newest"
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
                title="Money back Guarante"
                desc="30 Hari untuk pengembalian"
              />
              <ServicePolicy
                icon={faHeadset}
                title="Online Services"
                desc="Online service 8 hour/day"
              />
              <ServicePolicy
                icon={faGifts}
                title="Promotion"
                desc="Cupon and Discount"
              />
            </div>
          </div>
        </section>
        {/* <section className="trending-product">
        <ScrollAnimation animateIn="slideInLeft" duration={2}>
          <div className="container">
            <div className="row">
              <Productlist/>
            </div>
           </div>
          </ScrollAnimation>
        </section> */}
      </main>
      </div>
    );
  }
}

export default Home;
