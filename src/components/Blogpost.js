import React, { Component } from "react";
import "../index.scss";

class Blogpost extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-lg">
          <div className="card container">
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
      // <div>
      //   <BlockTitle>All blogpost</BlockTitle>
      //   <Block>
      //     <Row>
      //       <Col>
      //         <Card className="demo-facebook-card card-expandable">
      //           <CardHeader className="no-border">
      //             <div className="demo-facebook-avatar">
      //               <img
      //                 src="https://cdn.framework7.io/placeholder/people-68x68-1.jpg"
      //                 width="100"
      //                 height="100"
      //               />
      //             </div>
      //             <div className="demo-facebook-name">John Doe</div>
      //             <div className="demo-facebook-date">Monday at 3:47 PM</div>
      //           </CardHeader>
      //           <CardContent padding={false}>
      //             <img
      //               src="https://cdn.framework7.io/placeholder/nature-1000x700-8.jpg"
      //               width="100%"
      //               height="350px"
      //             />
      //             <div class="card-content card-content-padding">
      //               <p class="date">Posted on January 21, 2015</p>
      //               <p>
      //                 Quisque eget vestibulum nulla. Quisque quis dui quis ex
      //                 ultricies efficitur vitae non felis. Phasellus quis nibh
      //                 hendrerit...
      //               </p>
      //             </div>
      //           </CardContent>
      //           <CardFooter className="no-border">
      //             <BlockTitle>Comment</BlockTitle>
      //             <textarea />
      //           </CardFooter>
      //         </Card>
      //       </Col>
      //     </Row>
      //   </Block>
      // </div>
    );
  }
}

export default Blogpost;
