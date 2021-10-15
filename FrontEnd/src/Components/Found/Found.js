import React, { Component } from "react";
import Display from "../Display/Display";
import "./Found.css";

class Found extends Component {
  state = {
    data: this.props.data,
    service: Object.keys(this.props.data.streamingInfo)[0],
    region: Object.keys(
      this.props.data.streamingInfo[
        Object.keys(this.props.data.streamingInfo)[0]
      ]
    )[0],
  };
  componentDidUpdate(prevProp) {
    if (this.props.data !== prevProp.data) {
      this.setState({
        data: this.props.data,
        service: Object.keys(this.props.data.streamingInfo)[0],
        region: Object.keys(
          this.props.data.streamingInfo[
            Object.keys(this.props.data.streamingInfo)[0]
          ]
        )[0],
      });
    }
    else
    {
      <Display/>
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
              {this.state.data.year}, {this.state.data.significants[0]}{" "}
            </h4>
            <span className="minutes"> {this.state.data.runtime} minutes </span>
            <span className="streamService"> {this.state.service} </span>
          </div>
          <div className="movie_desc">
            <p className="text">{this.state.data.overview}</p>
          </div>
          <div class="movie_social">
            <ul>
              <li>
                <a
                  href={
                    this.state.data.streamingInfo[this.state.service][
                      this.state.region
                    ].link
                  }
                  rel="noreferrer"
                  target="_blank"
                  class="gg-screen-wide"
                ></a>
              </li>
              <li>
                <a
                  href={
                    "https://www.youtube.com/embed/" + this.state.data.video
                  }
                  rel="noreferrer"
                  target="_blank"
                  class="gg-youtube"
                ></a>
              </li>
              <li>
                <a
                  href={"https://www.imdb.com/title/" + this.state.data.imdbID}
                  rel="noreferrer"
                  target="_blank"
                >
                  IMDb
                </a>
                {"  "+this.state.data.imdbRating +"%"}
              </li>
              <li>
                <a
                  href={
                    "https://www.themoviedb.org/movie/" + this.state.data.tmdbID
                  }
                  rel="noreferrer"
                  target="_blank"
                >
                  TMDB
                </a>
                {"  "+this.state.data.tmdbRating +"%"}
              </li>
            </ul>
          </div>
        </div>
        <div className="blur_back">
          <img src={this.state.data.backdropURLs[1280]} alt="Failed" />
        </div>
      </div>
    );
  }
}
export default Found;
