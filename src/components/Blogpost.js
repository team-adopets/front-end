import React, { Component } from "react";
import "../App.scss";

class Blogpost extends Component {
  render() {
    return (
      <div className="container">
      <div className="row">
        <div className="col-md">
          <div className="card">
            <h2 className="heading-title">TITLE HEADING</h2>
            <h5>Title description, Dec 7, 2017</h5>
            <p>Author name</p>
            <img
              src="https://cdn.framework7.io/placeholder/nature-1000x700-8.jpg"
              width="100%"
              height="310px"
              background-size="cover"
            />
            <p>
              Sunt in culpa qui officia deserunt mollit anim id est laborum
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco.
            </p>

            <hr />
            <p>Comment user will be view here!!</p>
            <hr />
            <input
              type="text"
              className="comment-input"
              name="comment"
              placeholder="Type your comment here..."
            />
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Blogpost;
