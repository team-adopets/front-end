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
import ModalSignIn from "./ModalSignIn";
import ModalSignUp from "./ModalSignUp";

export default class Navbarcomp extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      isSignIn: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    const SignInUp = () => (
      <Nav className="ml-auto" navbar>
        <NavItem>
          <button
            type="button"
            className="btn btn-default"
            data-toggle="modal"
            data-target="#modalSignUp"
          >
            Sign up
          </button>
        </NavItem>
        <NavItem>
          <button
            type="button"
            className="btn btn-danger"
            data-toggle="modal"
            data-target="#modalSignin"
          >
            Sign in
          </button>
        </NavItem>
      </Nav>
    );

    const LogoutLink = () => (
      <Nav className="ml-auto" navbar>
          <NavLink>Logout</NavLink>
      </Nav>
    );
    
    return (
      <div>
        <Navbar className="container" color="light" light expand="sm">
          <NavbarBrand href="/">BLOGAPP</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            {this.state.isSignIn ? <LogoutLink /> : <SignInUp />}
          </Collapse>
          <ModalSignIn />
          <ModalSignUp />
        </Navbar>
      </div>
    );
  }
}
