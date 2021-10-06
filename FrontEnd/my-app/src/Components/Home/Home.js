import React, { Component } from "react";
import Found from "../Found/Found";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      output: {} ,
    };

    this.handleFind = this.handleFind.bind(this);
  }
  handleFind() {
    var axios = require("axios").default;

    var options = {
      method: "GET",
      url: "https://streaming-availability.p.rapidapi.com/search/basic",
      params: {
        country: "us",
        service: "netflix",
        type: "movie",
        genre: "18",
        page: "1",
        keyword: this.state.value,
        language: "en",
      },
      headers: {
        "x-rapidapi-host": "streaming-availability.p.rapidapi.com",
        "x-rapidapi-key": "2f14d6be09mshd8c22612d1ad919p113dfajsn5138c71b0aef",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        this.setState(object) = response.data;
        console.log(this.state.object);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  render() {
    return (
      <div className="App">
        <h1>Behlod Where you can stream it?</h1>
        <form action="" onSubmit= {(e) =>  {e.preventDefault(); this.handleFind()}}>
          <input type="text" placeholder="Input here" name="find" onChange={({target: {value}}) => this.setState({value})}></input>
          <input
            type="submit"
            value="Find"
          ></input>
        </form> 
        <Found/>
      </div>
    );
  }
}
export default Home;
