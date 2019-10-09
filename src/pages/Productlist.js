import React, { Component } from "react";
import { connect } from "react-redux";
import "./styles.scss";
class Productlist extends Component {
  render() {
    return (
      <div className="product-list">
        <div className="row">
          <h1>Hello</h1>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state.cartReducer, "map state to props");
  return {
    items: state.cartReducer
  };
};

export default connect(mapStateToProps)(Productlist);
