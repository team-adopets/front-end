import React, { Component } from "react";
import { connect } from "react-redux";
import { addProductToCart } from "../actions/Product";

import "./styles.scss";

class ProductDesc extends Component {
  handleAddToCart = (id, history) => {
    this.props.addProductToCart(id, history);
  };

  
  render() {
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
                  Price:{" "}Rp.{" "}{this.props.product.price}
                </strong>
              </h5>

              <div className="cart">
              {this.props.auth ? (
                <div
                  className="btn btn-outline-success"
                  onClick={() =>
                    this.handleAddToCart(this.props.product._id, this.props.history)
                  }
                >
                  Take Me Home
                </div>
              ) : (
                <button
                  onClick={() =>
                    this.handleProductDesc(this.props.product._id, this.props.history)
                  }
                  type="button"
                  className="btn btn-outline-success mr-10"
                  disabled
                >
                  Take me home
                </button>
              )}
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
    product: state.products.product,
    auth: state.auth["isAuthenticated"]
  };
};

export default connect(mapStateToProps, {addProductToCart})(ProductDesc);
