import React from "react";
import "./styles.scss"

const Headercomp = () => {
  return (
    <section className="site-blocks-cover overflow-hidden bg-light">
      <div className="container">
        <div className="row">
          <div className="col-md-5 mr-auto align-self-center text-center text-md-left">
            <div className="intro-text">
              <h1>We Love Dogs</h1>
              <p className="mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                odio exercitationem iste, excepturi similique omnis.
              </p>
              <p>
                <a href="#" className="btn btn-danger">
                  ADOP PET
                </a>
              </p>
            </div>
          </div>
          <div className="col-md-5 align-self-center text-center text-md-right">
            <img
              src="images/dog_1.jpg"
              alt="Image"
              className="img-fluid cover-img"
            />
            <img
              src="images/dog_2.jpg"
              alt="Image"
              className="img-fluid cover-img2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Headercomp;
