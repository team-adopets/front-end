import React from "react";
import { Field, reduxForm } from "redux-form";
import CustomInput from "./CustomInput";
import "./styles.scss";

const Signin = props => {
  const onSubmit = formData => {
    console.log(formData, "form data redux-form");
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
                    <button className="btn__bg btn-block">Sign in</button>
                  </div>
                  <p>
                    <a href="#" className="forget-pwd">
                      Lupa kata sandi
                    </a>
                  </p>
                  <p>
                    "Belum punya akun? register di
                    <a href="" className="forget-pwd">
                      sini
                    </a>
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
export default reduxForm({ form: "signin" })(Signin);
