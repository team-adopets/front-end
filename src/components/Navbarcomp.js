import React from "react";
import { Link, withRouter } from "react-router-dom";
import { logoutUser } from "../actions/Registration";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";

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

  // handleChange = (e) => {
  //   this.setState({
  //     [e.target.name] : e.target.value
  //   })
  // }

  onLogout = e => {
    e.preventDefault();
    this.props.logoutUser(this.props.history);
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            <img
              src="assets/images/logo.png"
              alt="logo"
              style={{ height: "80px", width: "80px" }}
            />
          </a>
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
                  Dog Breeds
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav_link" to="/about">
                  About Us
                </Link>
              </li>
            </ul>
            {/* <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" name="search" value={this.state.search} onChange={this.handleChange} type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form> */}
            <ul className="navbar-nav ml-auto">
              {isAuthenticated ? (
                <li className="nav-item">
                  <Link onClick={this.onLogout} to="/" className="nav_link">
                    Logout, {user.name}
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
                    icon={faShoppingBag}
                    color="#91b237"
                    size="lg"
                  />
                  <span class="badge badge-pill badge-success">
                    {this.props.checkoutItem.length}
                  </span>
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
  auth: state.auth,
  checkoutItem: state.products.checkoutItems
});

export default withRouter(
  connect(
    mapStateToProps,
    { logoutUser }
  )(Navbarcomp)
);
