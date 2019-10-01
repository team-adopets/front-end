import React, { Component } from "react";

class ModalSignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
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
                <form>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter email"
                      name="email"
                      value={this.state.email}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      name="password"
                      value={this.state.password}
                      onChange={this.handleChange}
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="submit"
                  data-dismiss="modal"
                  onClick={this.handleSubmit}
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

export default ModalSignIn;
