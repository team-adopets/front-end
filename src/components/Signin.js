import React from "react";
import { Field, reduxForm } from "redux-form";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../actions/regisAction";

import CustomInput from "./CustomInput";
import "./styles.scss";

const Signin = props => {
  const onSubmit = formData => {
    console.log(formData, "form data redux-form");
    loginUser(formData)
  };
  const { handleSubmit } = props;
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
                <h2>Login</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <fieldset>
                    <Field
                      name="email"
                      type="email"
                      id="email"
                      placeholder="Enter your email"
                      component={CustomInput}
                    />
                  </fieldset>
                  <Field
                    name="password"
                    type="password"
                    id="password"
                    placeholder="enter your password"
                    component={CustomInput}
                  />
                  <div>
                    <button onClick={handleSubmit(onSubmit)} className="btn__bg btn-block">Sign in</button>
                  </div>
                  <p>
                    <a href="#" className="forget-pwd">
                      Lupa kata sandi
                    </a>
                  </p>
                  <p>
                    "Belum punya akun? register di
                    <Link to="/signup" href="" className="forget-pwd">
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
};

Signin.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default withRouter(
  connect(
    mapStateToProps,
    { loginUser }
  )(reduxForm({ form: "signup" })(Signin))
);

