import React, { Component } from "react";
import { connect } from "react-redux";
import ScrollAnimation from "react-animate-on-scroll";
import Carousel from "react-bootstrap/Carousel";

import "./styles.scss";

class ProductDesc extends Component {
  
  
  render() {
    console.log(this.props.product, "product desc");
    return (
      <div className="container section-spacer">
        <div className="row">
          <div className="col-sm col-md">
            <div className="img-fluid">
              <img className="imgDetail" src={this.props.product.pictures[0].link} alt="product" />
            </div>
          </div>
          <div className="col-sm col-md">
          <div className="content-details-pet">
              <h2>Breed: {this.props.product.ras}</h2>
              <h6 className="text-title text-uppercase mt-3 mb-2">
                Gender: {this.props.product.gender}
              </h6>
              <h6 className="text-title text-uppercase mt-3 mb-2">
                Age: {this.props.product.age}
              </h6>

              <p className="text-capitalize font-weight-bold mt-3 mb-0">
                Pet Description:
              </p>
              <p className="text-muted  text-justify">
                {this.props.product.description}
              </p>
              <h5 className="text-red">
                <strong>
                  price:{" "}{this.props.product.price}
                </strong>
              </h5>

              <div className="cart">
                <button
                  type="button"
                  className="btn btn-success"
                  // onClick={}
                >
                  Take Me Home
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    product: state.products.product
  };
};

export default connect(mapStateToProps)(ProductDesc);
