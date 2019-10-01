import React, { Component } from "react";
import ReactFilestack from "filestack-react";

class Addpost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
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
                <form>
                  <div className="form-group">
                    <label>Title :</label>
                    {/* input for title blog post here */}
                    <input
                      type="text"
                      className="input-add"
                      name="title"
                      value={this.state.title}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Content :</label>
                    {/* input for content blog post here */}
                    <input
                      type="text"
                      className="input-add add-post"
                      name="content"
                      value={this.state.content}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="input-file">
                    <ReactFilestack
                      apikey={`ApZlTzBaiT6OTIZ2Qu5uZz`}
                      onSuccess={result => {
                        this.setState({
                          files: result.filesUploaded[0].url,
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
                onClick={this.handleSubmit}
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

export default Addpost;
