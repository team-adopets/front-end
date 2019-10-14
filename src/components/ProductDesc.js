import React, { Component } from "react";
import {connect} from "react-redux";
import Carousel from "react-bootstrap/Carousel";

import "./styles.scss"

class ProductDesc extends Component {
  render() {
    return (
      <div>
        <div className="container py-5">
            <div className="col-10 mx-auto text-center text slanted text-blue my-5">
              <div className="main-title">
                <h1>Product</h1>
              </div>
            </div>
          </div>
      
          <div className="row">
            <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
              <img
                src={this.props.product.pictures[1].link}
                // className="image-fluid"
                alt="product"
                height="500px"
                width="288px"
              />
            </div>
          
            <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
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
                  price: <span>Rp</span>17.000.000
                </strong>
              </h5>

              <div className="cart">
                <button
                  type="button"
                  className="btn btn-success"
                  // onClick={}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
          {/*related products*/}
          <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
            <div className="related-product">
              <h3>Related Pet</h3>
            </div>
            {/*Carousel*/}
            <div className="carousel">
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={this.props.product.pictures[0].link}
                    alt="First slide"
                    height="300px"
                  />
                  <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={this.props.product.pictures[1].link}
                    alt="Third slide"
                    height="300px"
                  />

                  <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={this.props.product.pictures[2].link}
                    alt="Third slide"
                    height="300px"
                  />

                  <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    product : state.products.product
  }
}

export default connect(mapStateToProps)(ProductDesc);