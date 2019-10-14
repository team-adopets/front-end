import React, { Component } from "react";
import { connect } from "react-redux";
import { addProductToCart, getProduct, getProducts } from "../Actions/Product"

import "./styles.scss";

class Productlist extends Component {

  componentDidMount(){
    this.props.getProducts()
  }

  handleProductDesc = (id, history) => {
    this.props.getProduct(id, history )    
  }

  render() {
    const { products } = this.props;      
    let itemList = products.map(product => {      
      return (
        <div className="col-md-4 col-sm-4 mt-30" onClick={() => this.handleProductDesc(product._id)}>
          <div className="card">
            <img src={product.pictures[2].link} className="cardImg card-img-top" alt={product.title} />
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="">{product.ras}</p>
              {/* <p className="card-text">{product.description}</p> */}
              <p className="card-text-2">Price: {product.price}</p>
              <div
                className="btn btn-outline-dark mr-10"
                onClick={() => this.handleProductDesc(product._id, this.props.history)}
              >
                Details
              </div>
              <div
                className="btn btn-outline-success"
                /* onClick={this.handleAddToCart(product.id)} */
              >
                Buy
              </div>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div className="container section-spacer">
        <h1 style={{textAlign: "center"}}>Product List</h1>
        <div className="row">{itemList}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {  
  return {
    products: state.products.products
  };
};

export default connect(
  mapStateToProps, {getProduct, getProducts}
)(Productlist);
