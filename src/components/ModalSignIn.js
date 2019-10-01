import React, { Component } from "react";
import {Field, reduxForm} from "redux-form";

import CustomInput from "./CustomInput";
class ModalSignIn extends Component {

  onSubmit = (formData) => {
  
    console.log(formData, "===form data===");
  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <div
          className="modal fade"
          id="modalSignin"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="modalSignin"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="modalSignin">
                  Sign in Form
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
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
              </div>
              <div className="modal-footer">
                <button
                  type="submit"
                  data-dismiss="modal"
                  onClick={handleSubmit(this.onSubmit)}
                  className="btn btn-primary"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default reduxForm({ form: "signin"})(ModalSignIn);
