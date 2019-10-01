import React, { Component } from "react";
import ReactFilestack from "filestack-react";
import { Field, reduxForm } from "redux-form";

import CustomInput from "./CustomInput";

class Addpost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgUrl: "",
      previewImg: ""
    };
  }

  onSubmit = formData => {
    const { imgUrl } = this.state;
    const newPost = {
      ...formData,
      imgUrl
    };
    console.log(newPost, "new post data");
    
  };

  render() {
    console.log(this.props, "this.props");

    const { handleSubmit } = this.props;
    return (
      <div>
        <div
          className="modal fade"
          id="floatbutton"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="floatbutton"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="floatbutton">
                  Add Blog Post
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
                      name="title"
                      type="text"
                      id="title"
                      label="Title"
                      placeholder="Enter your title"
                      component={CustomInput}
                    />
                  </fieldset>
                  <fieldset>
                    <Field
                      name="content"
                      type="text"
                      id="content"
                      label="Content"
                      placeholder="Enter your content"
                      component={CustomInput}
                    />
                  </fieldset>
                  <div className="input-file">
                    <ReactFilestack
                      apikey={`ApZlTzBaiT6OTIZ2Qu5uZz`}
                      onSuccess={result => {
                        this.setState({
                          imgUrl: result.filesUploaded[0].url,
                          previewImg: result.filesUploaded[0].originalFile.name
                        });
                      }}
                    />
                    <p>{this.state.previewImg}</p>
                  </div>
                </form>
              </div>
              <button
                type="button"
                className="btn btn-add btn-lg btnt-block btn-outline-danger"
                data-dismiss="modal"
                onClick={handleSubmit(this.onSubmit)}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default reduxForm({ form: "addpost"})(Addpost);
