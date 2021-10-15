import React, { Component } from "react";
import "./Fail.css";

class Found extends Component {
  render() {
    return (
      <div className="movie_card">
        <div className="info_section">
          <div className="movie_header">
            <img
              //Moive Poster
              className="locandina"
              src="https://image.freepik.com/free-vector/abstract-red-carbon-fiber-texture-background-design_1017-26050.jpg"
              alt="Failed"
            />
            <h1> Hush </h1>
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
        <div className="blur_back">
          <img
            src="https://image.freepik.com/free-vector/abstract-red-carbon-fiber-texture-background-design_1017-26050.jpg"
            alt="Failed"
          />
        </div>
      </div>
    );
  }
}
export default Found;
