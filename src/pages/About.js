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
                  <span>Kami menyediakan</span> hewan peliharaan yang terbaik, sehat, dan pastinya lucu
                </h2>
                <p>
                  AdoPet adalah platform online untuk mencari hewan peliharaan khususnya "anjing". Dimana di AdoPet ini anda dapat mencari
                  hewan peliharaan khususnya anjing. AdoPet perusahaan yang masih kecil dan berkembang. Dengan adanya AdoPet 
                  ini kiranya dapat membantu anda dan keluarga dapat menemukan hewan peliharaan khususnya anjing yang anda cari.  
                </p>
              </div>
            </div>
            <div className="col-xl5 col-lg-6 ml-auto">
           
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
