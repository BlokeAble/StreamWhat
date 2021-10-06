import React, { Component } from "react";
import './Found.css';


class Found extends Component {
  state = {
    data: this.props.data,
  };
  componentDidUpdate(prevProp){
    if(this.props.data !== prevProp.data)
    {
      this.setState({data: this.props.data})
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
              src="https://movieplayer.net-cdn.it/t/images/2017/12/20/bright_jpg_191x283_crop_q85.jpg" 
              alt="Failed"
            />

            <h1>
                {this.state.data.title}
            </h1> 
            <h4> Year of realse , Director </h4>
            <span className="minutes"> 213 mins Length </span>
            <p className="type">Genres...</p>
          </div>
          <div className="movie_desc">
            <p className="text">
              Moive def
            </p>
          </div>
        </div>
        <div className="blur_back bright_back" src={this.state.data.backDropUrl[0]}></div>
      </div>
    );
  }
}
export default Found;
