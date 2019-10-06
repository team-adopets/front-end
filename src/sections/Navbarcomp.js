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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

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
    const Navlinks = props => (
      <NavItem>
        <NavLink className="nav-links">{props.linkName}</NavLink>
      </NavItem>
    );

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
              <Navlinks linkName="Home" />
              <Navlinks linkName="Products" />
              <Navlinks linkName="About" />
              <Navlinks linkName="Contact" />
              <IconLinks icons={faUser} />
              <IconLinks icons={faShoppingCart} />
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navbarcomp;
