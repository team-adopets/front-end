import React, { Component } from "react";
import {removeProductCart} from "../actions/Product"
import { connect } from "react-redux";
import "./styles.scss";

class Cart extends Component {
  handleRemove = (id) => {
    this.props.removeProductCart(id)
  }
  render() {
    let addedItems = this.props.item.length ? (
      this.props.item.map(item => (
        <div className="col-md-4 col-sm-4">
          <div className="card">
            <h5 className="card-header">Cart</h5>
            <img
              // src={item.pictures[0].link}
              className="card-img-top imgCart"
              alt={item.name}
            />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              {/* <p className="card-text">{item.desc}</p> */}
              <p className="card-text2">Price: {item.price}</p>
              <div className="btn btn-outline-danger" onClick={()=> this.handleRemove(item._id)}>Remove</div>
            </div>
          </div>
        </div>
      ))
    ) : (
      <div className="container center">
        <img
          src="/assets/images/empty-cart.png"
          alt=""
          style={{ height: "300px" }}
        />
      </div>
    );
    return (
      <div className="container section-spacer">
        <div className="row">{addedItems}</div>
        {/* <div>
          <p>Total : {}</p>
        </div> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    item: state.products.checkoutItems
  };
};

export default connect(mapStateToProps, { removeProductCart })(Cart);
