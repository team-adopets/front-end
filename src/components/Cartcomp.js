import React, { Component } from "react";
import { connect } from "react-redux";
import "./styles.scss";

class Cart extends Component {

  render() {

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
                href="/cart"
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
      <div className="container center">
      <img src="/assets/images/empty-cart.png" alt="" style={{height: "300px"}}/>
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
    items: state.products.checkoutItems
  };
};

export default connect(
  mapStateToProps,
)(Cart);
