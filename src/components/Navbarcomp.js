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
import "../App.scss";

export default class Navbarcomp extends React.Component {
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

    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">BRAND</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <Navlinks linkName="Home" />
              <Navlinks linkName="Products" />
              <Navlinks linkName="About" />
              <Navlinks linkName="Contact" />
              <Navlinks linkName="Signin" />
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
