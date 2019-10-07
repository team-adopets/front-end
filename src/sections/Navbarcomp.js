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
import { Link as Links } from "react-router-dom";
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
    const IconLinks = props => (
      <NavItem>
        <NavLink>
          <FontAwesomeIcon
            className="nav-links"
            icon={props.icons}
            color="#91b237"
            size="lg"
          />
        </NavLink>
      </NavItem>
    );

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
                  <Links className="nav-links" to="/">
                    Home
                  </Links>
                </NavLink>
              </NavItem>
              <NavLink>
                <Links className="nav-links" to="/product">
                  Products
                </Links>
              </NavLink>

              <NavItem>
                <NavLink>
                  <Links className="nav-links" to="/about">
                    About
                  </Links>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Links className="nav-links" to="/contact">
                    Contact
                  </Links>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <FontAwesomeIcon
                  
                    icon={faUser}
                    color="#91b237"
                    size="lg"
                  />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <FontAwesomeIcon
                   
                    icon={faShoppingCart}
                    color="#91b237"
                    size="lg"
                  />
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
