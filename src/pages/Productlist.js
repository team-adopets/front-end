import React, { Component } from "react";
import { connect } from "react-redux";
import {addToCart} from "../actions/cartAction"
// import "./styles.scss";
class Productlist extends Component {
  handleClick = id => {
    this.props.addToCart(id);
  };

  render() {
    console.log(this.props.items, "props");
    const { items } = this.props;
    let itemList = items.map(item => {
      return (
        <div className="card" key={item.id}>
          <div className="card-image">
            <img src={item.img} alt={item.title} />
            <span className="card-title">{item.title}</span>
            <span
              to="/"
              className="btn-floating halfway-fab waves-effect waves-light red"
            >
              <i
                onClick={() => {
                  this.handleClick(item.id);
                }}
                className="material-icons"
              >
                add
              </i>
            </span>
          </div>

          <div className="card-content">
            <p>{item.desc}</p>
            <p>
              <b>Price: {item.price}$</b>
            </p>
          </div>
        </div>
      );
    });
    return (
      <div className="container">
        <h3 className="center">Our items</h3>
        <div className="box">{itemList}</div>
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
