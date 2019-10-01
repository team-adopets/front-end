import React, { Component } from "react";

import Addpost from "./Addpost";

class Blogpost extends Component {
 
  render() {
    return (
      <div className="row">
        <div className="col-lg">
          <div className="card container">
            <h2 className="heading-title">TITLE HEADING</h2>
            <h5>Title description, Dec 7, 2017</h5>
            <p>Author name</p>
            <div className="fakeimg">Image</div>
            <p>
              Sunt in culpa qui officia deserunt mollit anim id est laborum
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco.
            </p>
            {/* <div>
            <button type="button" class="btn btn-sm btn-outline-info">More details</button>
        </div> */}

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
          <div>
            <button
              type="button"
              className="fab"
              data-toggle="modal"
              data-target="#floatbutton"
            >
              +
            </button>
          </div>
          <Addpost />
        </div>
      </div>
    );
  }
}

export default Blogpost;
