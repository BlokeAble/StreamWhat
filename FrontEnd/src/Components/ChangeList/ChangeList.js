import React, { Component } from "react";

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
      var day = new Date(date).getDay();
      var month = new Date(date).getDate();
      var year= new Date(date).getFullYear();
      var time = day+"/"+month+"/"+year;
      return time
    }
    else
    {
      return date
    }
  }


render(){
  return (
  <div className="movie_card">
     <h1 className="movieTitle">{this.state.data.title}</h1>

     <span className="added"> {this.handleDate(this.status.data.streamingInfo[this.state.service][this.state.region].added)} </span>
     <span className="leaving"> {this.handleDate(this.status.data.streamingInfo[this.state.service][this.state.region].leaving)} </span>
    
  </div>
  );
  
}
}
export default ChangeList;