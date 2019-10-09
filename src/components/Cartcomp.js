import React, { Component } from 'react'
import "./styles.scss"

class Cartcomp extends Component {
  render() {
    return (
      <div className="cart">
        <h1 className="cart-title">Cart Component</h1>
        <div className="cart-body">
          <h4>Cart body</h4>
          <h1>----------</h1>
        </div>
      </div>
    )
  }
}

export default Cartcomp

