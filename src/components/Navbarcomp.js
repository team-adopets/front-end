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

import "../App.scss"

export default class Navbarcomp extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      isSignIn: true
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  handleClick = () => {
    this.setState({
      isSignIn : !this.state.isSignIn
    })
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
            onClick={this.handleClick}
          >
            Sign in
          </button>
        </NavItem>
      </Nav>
    );

    const LogoutLink = () => (
      <Nav className="ml-auto">
        <button onClick={this.handleClick} type="button" className="btn btn-danger">
          Sign out
        </button>
      </Nav>
    );

    const Navlinks = () => (
      <Nav>
          <NavItem className="nav-links"> 
            <NavLink>Home</NavLink>
          </NavItem>
          <NavItem className="nav-links">
            <NavLink>Products</NavLink>
          </NavItem>
          <NavItem className="nav-links"> 
            <NavLink>About</NavLink>
          </NavItem>
          <NavItem className="nav-links">
            <NavLink>Contact Us</NavLink>
          </NavItem>
      </Nav>
    )

    return (
      <div>
        <Navbar className="container" light expand="sm">
          <NavbarBrand href="/">BLOGAPP</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Navlinks/>
          <Collapse isOpen={this.state.isOpen} navbar>
            {this.state.isSignIn ? <LogoutLink/> : <SignInUp/>}
            <ModalSignIn />
            <ModalSignUp />
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
