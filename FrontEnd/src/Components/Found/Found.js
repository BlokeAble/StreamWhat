import React, { Component } from "react";
import './Found.css';

class Found extends Component {
  render() {
    return (
      <div class="movie_card">
        <div class="info_section">
          <div class="movie_header">
            <img
            //Moive Poster
              class="locandina"
              src="https://movieplayer.net-cdn.it/t/images/2017/12/20/bright_jpg_191x283_crop_q85.jpg" 
              alt="Failed"
            />

            <h1>
                Movie Name
            </h1> 
            <h4> Year of realse , Director </h4>
            <span class="minutes"> 213 mins Length </span>
            <p class="type">Genres...</p>
          </div>
          <div class="movie_desc">
            <p class="text">
              Moive def
            </p>
          </div>
        </div>
        <div class="blur_back bright_back"></div>
      </div>
    );
  }
}
export default Found;
