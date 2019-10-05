import React from "react";
import Addpost from "./Addpost";
import "../App.scss";

const Footercomp = () => {
  return (
    <div>
      <div className="footer">
        <h5>JANTOMOTULO</h5>
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
  );
};
export default Footercomp;
