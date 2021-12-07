import React, { Component } from "react";
import "./ChangeList.css"

class ChangeList extends Component {
  constructor(props) {
    super(props);
 
    this.handleDate = this.handleDate.bind(this);
  }
  
  state = {
    data: this.props.data,
    service: Object.keys(this.props.data.streamingInfo)[0],
    region: Object.keys(this.props.data.streamingInfo[Object.keys(this.props.data.streamingInfo)[0]])[0],
  };

  componentDidUpdate(prevProp) {
    if (this.props.data !== prevProp.data) {
      this.setState({
        data: this.props.data,
        service: Object.keys(this.props.data.streamingInfo)[0]
      });
    }
  }
 
  handleDate(date){
    if(date !== 0)
    {
      var newDate = new Date(date*1e3).toDateString();
      return newDate;
    }
    else
    {
      return date
    }
  }


render(){
  return (
  <div className="movie_con">
     <h1 className="movieTitleNew" onClick= {()=> window.location.href= `http://localhost:3000/?search=${this.state.data.title}`} >{this.state.data.title}</h1>  
     <span className="added">Added: {this.handleDate(this.state.data.streamingInfo[this.state.service][this.state.region].added)} </span>

  </div>
  );
  
}
}
export default ChangeList;