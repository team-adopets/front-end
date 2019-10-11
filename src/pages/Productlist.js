import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "../actions/cartAction";
import { Link } from "react-router-dom"
import "./styles.scss";
class Productlist extends Component {
  handleClick = id => {
    this.props.addToCart(id);
  };

  render() {
    const { items } = this.props;
    let itemList = items.map(item => {
      return (
        <div className="col-md-4 col-sm-4 mt-30">
          <div className="card" style={{ width: "18rem" }}>
            <img src="" className="card-img-top" alt={item.title} />
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">{item.desc}</p>
              <p className="card-text-2">Price: {item.price}</p>
              <Link
                to="/product-desc"
                className="btn btn-outline-success mr-10"
              >
                Details
              </Link>
              <Link
                className="btn btn-outline-dark"
                to="/cart"
                onClick={() => {
                  this.handleClick(item.id);
                }}
              >
                Add To Cart
              </Link>
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
    items: state.cart.items
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: id => {
      dispatch(addToCart(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Productlist);
