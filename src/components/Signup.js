import React, {Component} from 'react'
import { Field, reduxForm } from "redux-form";
import CustomInput from "./CustomInput";

import "./styles.scss"

class Signup extends Component{
    onSubmit = async (formData) => {    
        const newUser = {
          ...formData,
          imgUrl: this.state.imgUrl
        };
        /* await this.props.signup(newUser) */
        console.log(newUser, "new user data")
        
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
                <h2>Login</h2>
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
              </fieldset>
              <p>
                  Sudah punya akun? Login di <a href="" className="forget-pwd">sini</a>
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
