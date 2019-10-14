import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../actions/Registration";
import classnames from "classnames";

import "./styles.scss";

class Signin extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
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
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(user);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
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

  render() {
    const { errors } = this.state;
  
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
                  <h2>Sign In</h2>
                  <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
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
                    </div>
                    <div className="form-group">
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
                    </div>
                    <p>
                      Don't have an account? Register{" "}
                      <Link to="/signup" href="" className="forget-pwd">
                        here
                      </Link>
                    </p>
                    <div>
                        <button
                          onClick={this.handleSubmit}
                          className="btn__bg btn-block"
                        >
                          Sign In
                        </button>
                      </div>
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

Signin.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => (
  {
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Signin);

