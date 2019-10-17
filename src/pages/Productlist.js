import React, { Component } from "react";
import { connect } from "react-redux";
import { addProductToCart, getProduct, getProducts } from "../actions/Product";
import Spinner from "react-bootstrap/Spinner";
import "./styles.scss";

class Productlist extends Component {
  componentDidMount() {
    this.props.getProducts();
  }

  //   AlertAddToCart = () => {
  //     Swal.fire({
  //         type: 'success',
  //         title: 'Added To Cart',
  //         showConfirmButton: false,
  //         timer: 1500
  //       })
  // }

  handleProductDesc = (id, history) => {
    this.props.getProduct(id, history);
  };

  handleAddToCart = (id, history) => {
    this.props.addProductToCart(id, history);
  };

  render() {
    const { products, isLoading } = this.props;
console.log(this.props.auth, "render ")
    let itemList = products.map(product => {
      return (
        <div className="col-md-4 col-sm-4 mt-30">
          <div className="card">
            <img
              src={product.pictures[2].link}
              className="cardImg card-img-top"
              alt={product.title}
            />
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="">{product.ras}</p>
              <p className="card-text-2">
                {product.gender}, {product.age}
              </p>
              <div
                className="btn btn-outline-dark mr-10"
                onClick={() =>
                  this.handleProductDesc(product._id, this.props.history)
                }
              >
                About {product.name}
              </div>
              {this.props.auth ? (
                <div
                  className="btn btn-outline-success"
                  onClick={() =>
                    this.handleAddToCart(product._id, this.props.history)
                  }
                >
                  Take Me Home
                </div>
              ) : (
                <button
                  onClick={() =>
                    this.handleProductDesc(product._id, this.props.history)
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
      );
    });
    return isLoading ? (
      <div className="center mt-30">
        <Spinner animation="border" role="status" size="lg" />
      </div>
    ) : (
      <div className="container section-spacer">
        <div className="row">{itemList}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products.products,
    isLoading: state.products.isLoading,
    auth: state.auth["isAuthenticated"]
  };
};

export default connect(
  mapStateToProps,
  { getProduct, getProducts, addProductToCart }
)(Productlist);


