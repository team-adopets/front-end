import React, {Component} from 'react'
import { Field, reduxForm } from "redux-form";
import {Link} from "react-router-dom";
import CustomInput from "./CustomInput";

import "./styles.scss"

class Signup extends Component{
    onSubmit = (formData) => {    
       console.log(formData, "redux form data signup");
      };
    render(){
        const {handleSubmit} = this.props;
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
                  name="phone"
                  type="text"
                  id="phone"
                  placeholder="Phone number"
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
                <small id="passHelp" className="form-text">
                  We'll never share your email, phone number, and password.
                </small>
                <div>
                    <button onClick={handleSubmit(this.onSubmit)} className="btn__bg btn-block">Sign in</button>
                  </div>
              </fieldset>
              <p>
                  Sudah punya akun? Login di <Link to="/signin" className="forget-pwd">sini</Link>
              </p>
            </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
    }
}

export default reduxForm({ form: "signup" })(Signup);
