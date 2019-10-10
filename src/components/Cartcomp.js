import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  removeItem,
  addQuantity,
  subtractQuantity
} from "../actions/cartAction";
import "./styles.scss"

class Cart extends Component {
  //to remove the item completely
  handleRemove = id => {
    this.props.removeItem(id);
  };
  //to add the quantity
  handleAddQuantity = id => {
    this.props.addQuantity(id);
  };
  //to substruct from the quantity
  handleSubtractQuantity = id => {
    this.props.subtractQuantity(id);
  };
  render() {
    console.log(this.props, "this.props");

    let addedItems = this.props.items.length ? (
      this.props.items.map(item => {
        return (
          <div className="card">
            <h5 className="card-header">Cart</h5>
            <img className="card-img-top" alt={item.title} />
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">{item.desc}</p>
              <p className="card-text2">Price: {item.price}</p>
              <a
                href="#"
                onClick={() => {
                  this.handleRemove(item.id);
                }}
                className="btn btn-outline-danger"
              >
                Remove
              </a>
            </div>
          </div>
        );
      })
    ) : (
      <div className="container" style={{ textAlign: "center" }}>
        <p>Nothing</p>
      </div>
    );
    return (
      <div className="container section-spacer">
        <div className="row">{addedItems}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state, "data state");

  return {
    items: state.cart.addedItems
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeItem: id => {
      dispatch(removeItem(id));
    },
    addQuantity: id => {
      dispatch(addQuantity(id));
    },
    subtractQuantity: id => {
      dispatch(subtractQuantity(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
