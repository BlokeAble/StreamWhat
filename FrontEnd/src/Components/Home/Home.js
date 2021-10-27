import React, { Component } from "react";
import "./Home.css";
import Found from "../Found/Found";
import Display from "../Display/Display";
import Fail from "../Fail/Fail";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      output: {results:[]},
      error: null
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
        if(response.data.results[0] === undefined)
        {
         this.setState({error:true, value:""});
        }
        else
        {
          this.setState({output:response.data, value:"", error:false});
        }
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  render() {
    return (
      <div className="App">
        <h1 className="title">Stream What </h1>
        <h1 className="red">?</h1>
        <form action="" onSubmit= {(e) =>  {e.preventDefault(); this.handleFind()}}>
          <input type="text" value={this.state.value} placeholder="Input here" name="find" onChange={({target: {value}}) => this.setState({value})}></input>
          <input
            type="submit"
            value="Find"
          ></input>
        </form>
        {
         this.state.output.results.length === 0?
         this.state.error?
         <Fail/>
         :
         <Display/>
         :
        this.state.output.results.map((data, i) =>(
            <Found data = {data} key= {i} />
        ))
        
        }
      </div>
    );
  }
}
export default Home;
