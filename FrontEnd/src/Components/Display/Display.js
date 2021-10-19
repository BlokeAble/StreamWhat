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
            <h1> Hush </h1>
            <h4>
            2016, Mike Flanagan
            </h4>
            <span className="minutes"> 82 minutes</span>
            <span className="streamService"> Netflix </span>
          </div>
          <div className="movie_desc">
            <p className="text"> A deaf woman is stalked by a psychotic killer in her secluded home.</p>
          </div>
          <div class="movie_social">
            <ul>
              <li>
                <a
                  href= "https://www.netflix.com/title/80091879/"
                  rel="noreferrer"
                  target="_blank"
                  class="gg-screen-wide icon"
                > </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/embed/Q_P8WCbhC6s"
                  rel="noreferrer"
                  target="_blank"
                  class="gg-youtube icon"
                > </a>
              </li>
              <li>
                <a
                  href= "https://www.imdb.com/title/tt5022702" 
                  rel="noreferrer"
                  target="_blank"
                >
                  IMDb
                </a>
                " 0%"
              </li>
              <li>
                <a
                  href= "https://www.themoviedb.org/movie/376570" 
                  rel="noreferrer"
                  target="_blank"
                >
                  TMDB
                </a>
               " 14%"
              </li>
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
