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
              src={this.state.data.posterURLs}
              alt="Failed"
            />
            <h1>
                {this.state.data.title}
            </h1> 
            <h4>  {this.state.data.year}, {this.state.data.significants[0]}  </h4>
            <span className="minutes"> {this.state.data.runtime}  minutes </span>
          </div>
          <div className="movie_desc">
            <p className="text">
            {this.state.data.overview}
            </p>
          </div>
        </div>
        <div className="blur_back bright_back" >
        <img
            //Moive BackDrop
              src= {this.state.data.backDropURLs}
              alt="Failed"
            />
        </div>
      </div>
    );
  }
}
export default Found;
