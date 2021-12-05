import React, { Component } from "react";
import { ReactFitty } from "react-fitty";
//import Fail from "../Fail/Fail";
import "./Found.css";


class Found extends Component {
  constructor(props) {
    super(props);
    
    this.fixService = this.fixService.bind(this);
    this.reFormat = this.reFormat.bind(this);
  }

  state = {
    data: this.props.data,
    service: Object.keys(this.props.data.streamingInfo)[0],
    region: Object.keys(this.props.data.streamingInfo[Object.keys(this.props.data.streamingInfo)[0]])[0],
  };

  fixService(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  reFormat(double){
    return double/10;
  }

  componentDidUpdate(prevProp) {
    if (this.props.data !== prevProp.data) {
      this.setState({
        data: this.props.data,
        service: Object.keys(this.props.data.streamingInfo)[0],
        region: Object.keys( this.props.data.streamingInfo[Object.keys(this.props.data.streamingInfo)[0]])[0],
      });
    }
  }

  render() {
    return (
      <div className="movie_card">
        <div className="info_section">
          <div className="movie_header">
            <img
              //Moive Poster
              className="PosterImage"
              src={this.state.data.posterURLs[500]}
              alt="No Img"
            />

            <ReactFitty>
              <h1 
              className="movieTitle"> {this.state.data.title} 
              </h1>
            </ReactFitty>
            
            <h4>
              {this.state.data.year}, {this.state.data.significants[0]}{" "}
            </h4>
            <div className="extraInfo">
              <span className="minutes"> {this.state.data.runtime} minutes </span>
              <span className="streamService"> {this.fixService(this.state.service)} </span>
            </div>
          </div>
          <div className="movie_desc">
            <p className="overview">{this.state.data.overview}</p>
          </div>
          <div className="movie_social">
            <ul className="found_ul">
              <li className="found_li">
                <a
                  href={this.state.data.streamingInfo[this.state.service][this.state.region].link}
                  rel="noreferrer"
                  target="_blank"
                  className="gg-screen-wide icon, Green"

                > </a>
              </li>
              <li className="found_li">
                <a
                  href={"https://www.youtube.com/embed/" + this.state.data.video}
                  rel="noreferrer"
                  target="_blank"
                  className="gg-youtube icon, youtube"
                > </a>
              </li>
              <li className="found_li">
                <a
                  href={"https://www.imdb.com/title/" + this.state.data.imdbID}
                  rel="noreferrer"
                  target="_blank"
                  className= "IMDb_Rating"
                >
                  IMDb
                </a>
              </li>
              <li className="found_li">
                <b className="White">{this.reFormat(this.state.data.tmdbRating)}</b> <b className="Rating">/10</b>
              </li>
              <li className="found_li">
                <a
                  href={"https://www.themoviedb.org/movie/" + this.state.data.tmdbID}
                  rel="noreferrer"
                  target="_blank"
                  className= "TMDB_Rating"
                >
                  TMDB
                </a>
              </li>
              <li className="found_li">
                <b className="White">{this.reFormat(this.state.data.tmdbRating)}</b> <b className="Rating">/10</b>
              </li>
            </ul>
          </div>
        </div>
        <div className="blur_back">
          <img src={this.state.data.backdropURLs[1280]} alt="shorturl.at/hmqzK" />
        </div>
      </div>
    );
  }
}
export default Found;
