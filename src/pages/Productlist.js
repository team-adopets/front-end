import React, { Component } from "react";
import { connect } from "react-redux";
import "./styles.scss";

class Productlist extends Component {
  // handleAddToCart = id => {
  //   this.props.addToCart(id);
  // };
  handleAddProductToCart = id => {
    this.props.addProductToCart(id)
  }
  handleProductDesc = id => {
    this.props.getProduct(id)
  }

  render() {
    const { items } = this.props;
    let itemList = items.map(item => {
      return (
        <div className="col-md-4 col-sm-4 mt-30" onClick={() => this.handleAddToCart(item.id)}>
          <div className="card" style={{ width: "18rem" }}>
            <img src="" className="card-img-top" alt={item.title} />
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">{item.desc}</p>
              <p className="card-text-2">Price: {item.price}</p>
              <div
                className="btn btn-outline-dark mr-10"
              >
                Details
              </div>
              <div
                className="btn btn-outline-success"
                // to="/cart"
                // onClick={() => {
                //   this.handleAddToCart(item.id);
                // }}

                /* onClick={this.handleAddProductToCart(item.id)} */
              >
                Add To Cart
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
    items: state.cart.items
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // addToCart: id => {
    //   dispatch(addToCart(id));
    // },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Productlist);
