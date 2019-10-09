import React, { Component } from "react";
import { connect } from "react-redux";
import ProductItem from "../components/Productitem";
import { addToCart} from "../_actions/_cartAction";
import "./styles.scss";
class Productlist extends Component {
  render() {
    let productList = this.props.items.items.map(item => {
      console.log(item, "item map");

      return (
        <ProductItem
          key={item.id}
          id={item.id}
          species={item.species}
          name={item.title}
          price={item.price}
          imgUrl={item.imgUrl}
        />
      );
    });
    return (
      <div className="product-list">
        <div className="row">
          {productList}
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

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => { dispatch(addToCart(id))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Productlist);
