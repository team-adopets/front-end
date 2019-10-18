import React, { Component } from "react";
import { removeProductCart, checkOut } from "../actions/Product";
import { connect } from "react-redux";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";


import "./styles.scss";

class Cart extends Component {

  AlertDelete = (id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: "You won't be able to take home if do this!",
      text: "Are you sure",
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Are you?',
      cancelButtonText: 'Cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.handleRemove(id)
        swalWithBootstrapButtons.fire(
          'Removed',
          'You so mean!',
          'success'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'You still want me :)',
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
    console.log(data, "data");
        
  }

  render() {
    let addedItems = this.props.item.length ? (
      this.props.item.map(item => (
        <div className="col-md-4 col-sm-4" key={item._id}>
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
              <p className="card-text2">{item.ras}</p>
              <p className="card-text2">{item.age}</p>
              <div
                className="btn btn-outline-danger"
                onClick={ () => this.AlertDelete(item._id) }
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
