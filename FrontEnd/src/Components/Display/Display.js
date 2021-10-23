import React, { Component } from "react";
import "./Display.css";

class Found extends Component {

  render() {
    return (
      <div className="movie_card">
        <div className="info_section">
          <div className="movie_header">
            <img
              //Moive Poster
              className="locandina"
              src= "https://image.tmdb.org/t/p/w780/zHzBTd502IZf60x8n2g0TB01vPF.jpg"
              alt="Failed"
            />
            <h1> Movie Title </h1>
            <h4>
            Time, Director 
            </h4>
            <span className="minutes"> Time in minutes</span>
            <span className="streamService"> Service </span>
          </div>
          <div className="movie_desc">
            <p className="text"> Movie overview</p>
          </div>
          <div class="movie_social">
            <ul>
              <li>
                <a
                  href= "https://www.netflix.com/title/80091879/"
                  rel="noreferrer"
                  target="_blank"
                  className="gg-screen-wide icon, Green"

                > </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/embed/Q_P8WCbhC6s"
                  rel="noreferrer"
                  target="_blank"
                  className="gg-youtube icon, youtube"
                > </a>
              </li>
              <li>
                <a
                  href= "https://www.imdb.com/title/tt5022702"
                  rel="noreferrer"
                  target="_blank"
                  className= "IMDb_Rating"
                >
                  IMDb
                </a>
              </li>
              <il>
                <b className="White">5.5</b> <b className="Rating">/10</b>
              </il>
              <li>
                <a
                  href= "https://www.themoviedb.org/movie/376570"
                  rel="noreferrer"
                  target="_blank"
                  className= "TMDB_Rating"
                >
                  TMDB
                </a>
              </li>
              <il>
                <b className="White">2.5</b> <b className="Rating">/10</b>
              </il>
            </ul>
          </div>
        </div>
        <div className="blur_back">
          <img src="https://image.tmdb.org/t/p/w1280/57zBhcUGeeEunpEdqjfywK81ogd.jpg" alt="Failed" />
        </div>
      </div>
    );
  }
}
export default Found;
