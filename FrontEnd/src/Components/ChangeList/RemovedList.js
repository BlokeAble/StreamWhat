import React, { Component } from "react";
import "./RemovedList.css"

class RemovedList extends Component {
  constructor(props) {
    super(props);
 
    this.handleDate = this.handleDate.bind(this);
  }
  
  state = {
    data: this.props.data,
    // If streaming INfo null than don't 
    service: Object.keys(this.props.data.streamingInfo).length !== 0 ? Object.keys(this.props.data.streamingInfo)[0] : "0",
    region: Object.keys(this.props.data.streamingInfo).length !== 0 ? Object.keys(this.props.data.streamingInfo[Object.keys(this.props.data.streamingInfo)[0]])[0] : "Gone",
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
  console.log(this.state.data)
  return (
  <div className="movie_remove">
     <h1 className="movieTitleRemove">{this.state.data.title}</h1>  
     {
     ()=>{
      if(this.service === "0")
      {
        return <span>Gone</span>
      }
      else{
        return   <span className="added">Added: {this.handleDate(this.state.data.streamingInfo[this.state.service][this.state.region].leaving)} </span>

      }

     }}
  </div>
  );
    
}
}
export default RemovedList;