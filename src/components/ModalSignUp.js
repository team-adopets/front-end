import React, { Component } from "react";
import ReactFilestack from "filestack-react";
import { Field, reduxForm } from "redux-form";
/*
1) import {connect} from react-redux
2) import {compose} from redux
3) import * from action folder
*/


import CustomInput from "./CustomInput";
class ModalSignUp extends Component {
  constructor(props){
    super(props)
    this.state = {
      imgUrl: "",
      previewImg: ""
    }
  }
  onSubmit = (formData) => {
    console.log(formData, "form data");
    const newUser = {
      ...formData,
      imgUrl: this.state.imgUrl,
    }
    console.log(newUser, "new data");
  }
  render() {
    const { handleSubmit } = this.props;
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
                <form onSubmit={handleSubmit(this.onSubmit)}>
                  <fieldset>
                    <Field
                      name="name"
                      type="text"
                      id="name"
                      label="Name"
                      placeholder="Enter your name"
                      component={CustomInput}
                    />
                  </fieldset>
                  <fieldset>
                    <Field
                      name="email"
                      type="email"
                      id="email"
                      label="Email"
                      placehoder="Enter your email"
                      component={CustomInput}
                    />

                    <small id="emailHelp" className="form-text">
                      We'll never share your email with anyone else.
                    </small>
                  </fieldset>
                  <fieldset>
                    <Field
                      name="password"
                      type="password"
                      id="password"
                      label="Enter your password"
                      placeholder="******"
                      component={CustomInput}
                    />
                    <small id="passHelp" className="form-text">
                      We'll never share your password too.
                    </small>
                  </fieldset>

                  <div className="profileimg">
                    <label htmlFor="">Profile Image:</label>
                    <ReactFilestack
                      apikey={`ApZlTzBaiT6OTIZ2Qu5uZz`}
                      onSuccess={result => {
                        this.setState({
                          imgUrl: result.filesUploaded[0].url,
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
                  onClick={handleSubmit(this.onSubmit)}
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

/*
  export default compose ({
    connect(state,actions),
    reduxform({ form : "signup"})
  })(ModalSignUp)
*/

export default reduxForm({ form : "signup"})(ModalSignUp);
