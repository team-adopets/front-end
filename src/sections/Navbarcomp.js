import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./styles.scss";
class Navbarcomp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div className="logo">
            <a class="navbar-brand" href="#">
              <img
                className="logo-brand"
                src="../assets/logo.jpg"
                width="30"
                height="30"
                class="d-inline-block align-top"
                alt="logo"
              />
            </a>
          </div>

          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="nav navbar-nav">
              <li class="nav-item active">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to="/product">
                  Product
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
            </ul>
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <Link className="nav-link">
                    <FontAwesomeIcon icon={faUser} color="#91b237" size="lg" />
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link">
                <FontAwesomeIcon
                    icon={faShoppingCart}
                    color="#91b237"
                    size="lg"
                  />
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbarcomp;
