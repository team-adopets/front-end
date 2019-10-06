import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import {
  Button,
  NavLink,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import CustomInput from "./CustomInput";
import "../App.scss"
class ModalSignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
  }

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };
  onSubmit = formData => {
    console.log(formData, "Redux Form Data");
  };
  render() {
    const { handleSubmit } = this.props;
    const closeBtn = (
      <button className="close" onClick={this.toggle}>
        &times;
      </button>
    );
    return (
      <div>
        <NavLink color="danger" onClick={this.toggle}>
          <FontAwesomeIcon className="user_icon" icon={faUser} />
        </NavLink>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle} close={closeBtn}>
            Sign In
          </ModalHeader>
          <FontAwesomeIcon icon="user" />

          <ModalBody>
            <form onSubmit={handleSubmit(this.onSubmit)}>
              <fieldset>
                <Field
                  name="email"
                  type="email"
                  id="email"
                  label="Enter your email"
                  placeholder="enter your email"
                  component={CustomInput}
                />
              </fieldset>
              <Field
                name="password"
                type="password"
                id="password"
                label="Enter your password"
                placeholder="*******"
                component={CustomInput}
              />
            </form>
          </ModalBody>
          <ModalFooter>
            <Button
              color="danger"
              onClick={(handleSubmit(this.onSubmit), this.toggle)}
            >
              Do Something
            </Button>
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default reduxForm({ form: "signin" })(ModalSignIn);
