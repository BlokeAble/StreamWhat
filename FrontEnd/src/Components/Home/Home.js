import React, { Component } from "react";
import Fail from "../Fail/Fail";
import Display from "../Display/Display";
import Found from "../Found/Found";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      output: {results:[]},
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
      .then( (response) => {
        console.log(response.data)
        if(response.data.total_pages === 0)
        {
          <Fail/>
          console.log("Failed")
        }
         else if(response.data.results[0].title.toLowerCase() === this.state.value.toLowerCase())     
        {
          this.setState({output:response.data, value:""});
        }   
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  render() {
    return (
      <div className="App">
        <h1>Stream What?</h1>
        <form action="" onSubmit= {(e) =>  {e.preventDefault(); this.handleFind()}}>
          <input type="text" value={this.state.value} placeholder="Input here" name="find" onChange={({target: {value}}) => this.setState({value})}></input>
          <input
            type="submit"
            value="Find"
          ></input>
        </form> 
        {this.state.output.results.map((data, i) =>(
            <Found data = {data} key= {i} />
        ))}
        <Fail/>
        <Display/>
      </div>
    );
  }
}
export default Home;
