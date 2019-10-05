import React, { Component } from "react";
import ReactFilestack from "filestack-react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { compose } from "redux";
import { Button, NavLink, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import * as actions from "../_actions/";
import CustomInput from "./CustomInput";
class ModalSignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgUrl: "",
      previewImg: "",
      modal: false
    };
  }


  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };

  onSubmit = async (formData) => {    
    const newUser = {
      ...formData,
      imgUrl: this.state.imgUrl
    };
    /* await this.props.signup(newUser) */
    console.log(newUser, "new user data")
    
  };

  render() {
    const { handleSubmit } = this.props;
    console.log(this.props);
    
    const closeBtn = (
      <button className="close" onClick={this.toggle}>
        &times;
      </button>
    );
    return (
      <div>
        <NavLink color="danger" onClick={this.toggle}>
          Sign Up
        </NavLink>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle} close={closeBtn}>
            Sign In
          </ModalHeader>
          <ModalBody>
            <form onSubmit={handleSubmit(this.onSubmit)}>
              <fieldset>
                <Field
                  name="name"
                  type="text"
                  id="name"
                  label="Name"
                  placeholder="Enter your name"
                  component={CustomInput}
                />
              </fieldset>
              <fieldset>
                <Field
                  name="email"
                  type="email"
                  id="email"
                  label="Email"
                  placehoder="Enter your email"
                  component={CustomInput}
                />

                <small id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </small>
              </fieldset>
              <fieldset>
                <Field
                  name="password"
                  type="password"
                  id="password"
                  label="Enter your password"
                  placeholder="******"
                  component={CustomInput}
                />
                <small id="passHelp" className="form-text">
                  We'll never share your password too.
                </small>
              </fieldset>

              <div className="profileimg">
                <label htmlFor="">Profile Image:</label>
                <ReactFilestack
                  apikey={`ApZlTzBaiT6OTIZ2Qu5uZz`}
                  onSuccess={result => {
                    this.setState({
                      imgUrl: result.filesUploaded[0].url,
                      previewImg: result.filesUploaded[0].originalFile.name
                    });
                  }}
                />
                <div>
                  <p>{this.state.previewImg}</p>
                </div>
              </div>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button
              color="danger"
              onClick={(handleSubmit(this.onSubmit))}
            >
              CREATE
            </Button>{" "}
            <Button color="secondary" onClick={this.toggle}>
              CANCEL
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default compose(
  connect(
    null,
    actions
  ),
  reduxForm({ form: "signup" })
)(ModalSignUp);
