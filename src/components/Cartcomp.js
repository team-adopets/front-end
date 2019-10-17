import React, { Component } from "react";
import { removeProductCart, checkOut } from "../actions/Product";
import { connect } from "react-redux";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";


import "./styles.scss";

class Cart extends Component {

  AlertDelete = () => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: '#b22222',
        cancelButton: '#91b237'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.handleRemove()
        swalWithBootstrapButtons.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  
  }

  handleRemove = id => {
    this.props.removeProductCart(id)
  };

  handleCheckout = (data) => {
    this.props.checkOut(data)
    console.log(data, "item checkout");
    
  }

  render() {
    let addedItems = this.props.item.length ? (
      this.props.item.map(item => (
        <div className="col-md-4 col-sm-4">
          <div className="card">
            <h5 className="card-header">Cart</h5>
            <img
              src={item.pictures[0].link}
              className="card-img-top imgCart"
              alt={item.name}
            />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              {/* <p className="card-text">{item.desc}</p> */}
              <p className="card-text2">Price: {item.price}</p>
              <div
                className="btn btn-outline-danger"
                onClick={
                  () => this.AlertDelete(item._id)
                  }
              >
                Remove
              </div>
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
        <div>
          <div className="row">{addedItems}</div>
        </div>
        <div>
          <div className="btn btn-outline-primary btn-lg btn-block" onClick={
            () => this.handleCheckout(this.props.item)}>
            Checkout
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    item: state.products.checkoutItems
  };
};

export default connect(
  mapStateToProps,
  { removeProductCart, checkOut }
)(Cart);
