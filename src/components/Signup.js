import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser } from "../actions/regisAction";

import PropTypes from "prop-types";

import CustomInput from "./CustomInput";

import "./styles.scss";

class Signup extends Component {
  onSubmit = formData => {
    registerUser(formData, this.props.history);
  };
  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="login section-spacer">
        <div className="container">
          <div className="member-area-from-wrap">
            <div className="row text-center">
              <div className="col d-flex justify-content-center">
                <div
                  className="login-reg-form-wrap"
                  style={{ width: "450px !important" }}
                >
                  <h2>Sign Up</h2>
                  <form onSubmit={handleSubmit(this.onSubmit)}>
                    <fieldset>
                      <Field
                        name="name"
                        type="text"
                        id="name"
                        placeholder="Username"
                        component={CustomInput}
                      />
                    </fieldset>
                    <fieldset>
                      <Field
                        name="email"
                        type="email"
                        id="email"
                        placeholder="Email"
                        component={CustomInput}
                      />
                    </fieldset>
                    <fieldset>
                      <Field
                        name="password"
                        type="password"
                        id="password"
                        placeholder="Password"
                        component={CustomInput}
                      />
                      <fieldset>
                        <Field
                          name="confirm password"
                          type="password"
                          id="confirm-password"
                          placeholder="Confirm Password"
                          component={CustomInput}
                        />
                      </fieldset>
                      <small id="passHelp" className="form-text">
                        We'll never share your email, phone number, and
                        password.
                      </small>
                      <div>
                        <button
                          onClick={handleSubmit(this.onSubmit)}
                          className="btn__bg btn-block"
                        >
                          Sign in
                        </button>
                      </div>
                    </fieldset>
                    <p>
                      Sudah punya akun? Login di{" "}
                      <Link to="/signin" className="forget-pwd">
                        sini
                      </Link>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Signup.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default withRouter(
  connect(
    mapStateToProps,
    { registerUser }
  )(reduxForm({ form: "signup" })(Signup))
);
