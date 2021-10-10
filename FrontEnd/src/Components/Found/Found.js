import React, { Component } from "react";
import "./Found.css";

class Found extends Component {
  state = {
    data: this.props.data,
  };
  componentDidUpdate(prevProp) {
    if (this.props.data !== prevProp.data) {
      this.setState({ data: this.props.data });
    }
  }
  render() {
    return (
      <div className="movie_card">
        <div className="info_section">
          <div className="movie_header">
            <img
              //Moive Poster
              className="locandina"
              src={this.state.data.posterURLs[500]}
              alt="Failed"
            />
            <h1>{this.state.data.title}</h1>
            <h4>
              {" "}
              {this.state.data.year}, {this.state.data.significants[0]}{" "}
            </h4>
            <span className="minutes"> {this.state.data.runtime} minutes </span>
            <span className="streamService">
              {Object.keys(this.state.data.streamingInfo)[0]}
            </span>
          </div>
          <div className="movie_desc">
            <p className="text">{this.state.data.overview}</p>
          </div>
        </div>
        <div class="movie_social">
          <ul>
            <li>
              <i class="material-icons">share</i>
            </li>
            <li>
              <i class="material-icons"></i>
            </li>
            <li>
              <i class="material-icons">chat_bubble</i>
            </li>
          </ul>
        </div>
        <div className="blur_back">
          <img src={this.state.data.backdropURLs[1280]} alt="Failed" />
        </div>
      </div>
    );
  }
}
export default Found;
