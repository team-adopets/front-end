import React, { Component } from "react";
import ReactFilestack from "filestack-react";


class ModalSignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      files: "",
      previewImg: ""
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
          id="modalSignUp"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="modalSignUp"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="modalSignUp">
                  Signup Form
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
                    <label>Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      onChange={this.handleChange}
                      value={this.state.name}
                      placeholder="Enter name"
                    />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      onChange={this.handleChange}
                      value={this.state.email}
                      placeholder="Enter email"
                    />
                    <small id="emailHelp" className="form-text">
                      We'll never share your email with anyone else.
                    </small>
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      onChange={this.handleChange}
                      value={this.state.password}
                      placeholder="Enter password"
                    />
                    <small id="passHelp" className="form-text">
                      We'll never share your password too.
                    </small>
                  </div>
                  <div className="profileimg">
                    <label htmlFor="">Profile Image:</label>
                    <ReactFilestack
                      apikey={`ApZlTzBaiT6OTIZ2Qu5uZz`}
                      onSuccess={result => {
                        this.setState({
                          files: result.filesUploaded[0].url,
                          previewImg: result.filesUploaded[0].originalFile.name
                        });
                      }}
                    />
                    <div>
                      <p>{this.state.previewImg}</p>
                    </div>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="submit"
                  data-dismiss="modal"
                  className="btn btn-primary"
                  onClick={this.handleSubmit}
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

export default ModalSignUp;
