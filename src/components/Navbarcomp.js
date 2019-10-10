import React from "react";
import { Link, withRouter } from "react-router-dom";
import { logoutUser } from "../actions/regisAction";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
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

  onLogout = e => {
    e.preventDefault();
    this.props.logoutUser(this.props.history);
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;

    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="logo">
            <a className="navbar-brand" href="#">
              <img
                className="logo-brand"
                src="assets/images/logo2.jpg"
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="logo"
              />
            </a>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="nav navbar-nav">
              <li className="nav-item">
                <Link className="nav_link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav_link" to="/product">
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav_link" to="/about">
                  About
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              {isAuthenticated ? (
                <li className="nav-item">
                  <Link onClick={this.onLogout} to="/" className="nav_link">
                    Logout
                  </Link>
                </li>
              ) : (
                <li className="nav-item">
                  <div>
                    <Link className="nav_link" to="/signin">
                      Login
                    </Link>
                  </div>
                </li>
              )}
              <li className="nav-item">
                <Link className="nav_link" to="/cart">
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

Navbarcomp.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default withRouter(
  connect(
    mapStateToProps,
    { logoutUser }
  )(Navbarcomp)
);
