import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser } from "../actions/regisAction";
import classnames from "classnames";

import PropTypes from "prop-types";

import "./styles.scss";

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password_confirm: "",
      errors: {}
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password_confirm: this.state.password_confirm
    };  
    this.props.registerUser(user, this.props.history);
 
    
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/");
    }
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="signup section-spacer">
        <div className="container">
          <div className="member-area-from-wrap">
            <div className="row text-center">
              <div className="col d-flex justify-content-center">
                <div
                  className="login-reg-form-wrap"
                  style={{ width: "450px !important" }}
                >
                  <h2>Sign Up</h2>
                  <form onSubmit={this.handleSubmit}>
                    <fieldset className="form-group">
                      <input
                        type="text"
                        placeholder="Name"
                        className={classnames("form-control form-control-lg", {
                          "is-invalid": errors.name
                        })}
                        name="name"
                        onChange={this.handleInputChange}
                        value={this.state.name}
                      />
                      {errors.name && (
                        <div className="invalid-feedback">{errors.name}</div>
                      )}
                    </fieldset>
                    <fieldset className="form-group">
                      <input
                        type="email"
                        placeholder="Email"
                        className={classnames("form-control form-control-lg", {
                          "is-invalid": errors.email
                        })}
                        name="email"
                        onChange={this.handleInputChange}
                        value={this.state.email}
                      />
                      {errors.email && (
                        <div className="invalid-feedback">{errors.email}</div>
                      )}
                    </fieldset>
                    <fieldset className="form-group">
                      <input
                        type="password"
                        placeholder="Password"
                        className={classnames("form-control form-control-lg", {
                          "is-invalid": errors.password
                        })}
                        name="password"
                        onChange={this.handleInputChange}
                        value={this.state.password}
                      />
                      {errors.password && (
                        <div className="invalid-feedback">
                          {errors.password}
                        </div>
                      )}
                    </fieldset>
                    <fieldset className="form-group">
                      <input
                        type="password"
                        placeholder="Confirm Password"
                        className={classnames("form-control form-control-lg", {
                          "is-invalid": errors.password_confirm
                        })}
                        name="password_confirm"
                        onChange={this.handleInputChange}
                        value={this.state.password_confirm}
                      />
                      {errors.password_confirm && (
                        <div className="invalid-feedback">
                          {errors.password_confirm}
                        </div>
                      )}
                    </fieldset>
                    <small id="passHelp" className="form-text">
                      We'll never share your email, phone number, and password.
                    </small>
                    <div>
                      <button
                        onClick={this.handleSubmit}
                        className="btn__bg btn-block"
                      >
                        Sign Up
                      </button>
                    </div>
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

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Signup));
