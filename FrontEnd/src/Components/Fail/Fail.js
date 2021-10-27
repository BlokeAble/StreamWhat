import React, { Component } from "react";
import "./Fail.css";

class Found extends Component {
  render() {
    return (
      <div className="movie_card_fail">
        <div className="info_section">
          <div className="movie_header">
            <img
              //Moive Poster
              className="locandina"
              src="data:image/jpeg;base64,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"
              alt="Failed"
            />
            <h1> Failed to Find </h1>
            <h4>00000 , Not Found</h4>
            <span className="minutes"> 0000 minutes</span>
            <span className="streamService"> No Service </span>
          </div>
          <div className="movie_desc">
            <p className="text">
              {" "}
              Nothing was found therefore there is no overview
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default Found;
