import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
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
        <Navbar color="light" light expand="md">
          <NavbarBrand className="logo-brand" href="/">
            B R A N D
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink>
                  <Link
                    style={{ textDecoration: "none", color: "#929292" }}
                    to="/"
                  >
                    Home
                  </Link>
                </NavLink>
              </NavItem>
              <NavLink>
                <Link
                  style={{ textDecoration: "none", color: "#929292" }}
                  to="/product"
                >
                  Products
                </Link>
              </NavLink>

              <NavItem>
                <NavLink>
                  <Link
                    style={{ textDecoration: "none", color: "#929292" }}
                    to="/about"
                  >
                    About
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link
                    style={{ textDecoration: "none", color: "#929292" }}
                    to="/contact"
                  >
                    Contact
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link to="/signin">
                    <FontAwesomeIcon icon={faUser} color="#91b237" size="lg" />
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link to="/checkout">
                    <FontAwesomeIcon
                      icon={faShoppingCart}
                      color="#91b237"
                      size="lg"
                    />
                  </Link>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navbarcomp;
