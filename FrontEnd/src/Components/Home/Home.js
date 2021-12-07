import React, { Component } from "react";
import "./Home.css";
import "./Bar.scss";
import Found from "../Found/Found";
import Display from "../Display/Display";
import Fail from "../Fail/Fail";
import ChangeList from "../ChangeList/ChangeList";
import RemovedList from "../ChangeList/RemovedList";



class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      service: "netflix",
      output: { results: [] },
      statusNew: { results: [] },
      statusRemove: {results: [] },
      error: false,
    };

    this.handleFind = this.handleFind.bind(this);
    this.handleNew = this.handleNew.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.changeName = this.changeName.bind(this);
  }

  changeName =(e)=>
  {
    this.setState({service:  e.target.value})
    this.handleNew();
    this.handleRemove();
  }

  handleFind() 
  {
    var axios = require("axios").default;
    var options = {
      method: 'GET',
      url: 'https://streaming-availability.p.rapidapi.com/search/ultra',
      params: {
        country: 'us',
        services: 'netflix,hulu,apple,mubi,prime,hbo,disney,peacock,paramount,starz,showtime',
        type: 'movie',
        order_by: 'year',
        language: 'en',
        keyword: this.state.value,
        output_language: 'en',
        desc: 'true'
      },
      headers: {
        'x-rapidapi-host': 'streaming-availability.p.rapidapi.com',
        'x-rapidapi-key': '2f14d6be09mshd8c22612d1ad919p113dfajsn5138c71b0aef'
      }
    };

    axios
      .request(options)
      .then((response) => {
        if (response.data.results[0] === undefined) {

          console.log("Failure "+this.state.value)
          this.setState({ error: true, value: "" });
          
        } else {
          this.setState({ output: response.data, value: "", error: false });
        }
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  handleNew()
  {
    var axios = require("axios").default;
    var options = {
      method: 'GET',
      url: 'https://streaming-availability.p.rapidapi.com/changes',
      params: {
        service: this.state.service,
        country: 'us',
        change_type: 'new',
        type: 'movie',
        output_language: 'en'
      },
      headers: {
        'x-rapidapi-host': 'streaming-availability.p.rapidapi.com',
        'x-rapidapi-key': '2f14d6be09mshd8c22612d1ad919p113dfajsn5138c71b0aef'
      }
    }
    axios.request(options).then((response) => {
        this.setState({ statusNew: response.data});
      }).catch(function (error) {
        console.error(error);
      });
  };

  handleRemove()
  {
    var axios = require("axios").default;
    var options = {
      method: 'GET',
      url: 'https://streaming-availability.p.rapidapi.com/changes',
      params: {
        service: this.state.service,
        country: 'us',
        change_type: 'removed',
        type: 'movie',
        output_language: 'en'
      },
      headers: {
        'x-rapidapi-host': 'streaming-availability.p.rapidapi.com',
        'x-rapidapi-key': '2f14d6be09mshd8c22612d1ad919p113dfajsn5138c71b0aef'
      }
    }
    axios.request(options).then((response) => {
        this.setState({ statusRemove: response.data});
      }).catch(function (error) {
        console.error(error);
      });
  };



  componentDidMount()
  {
    const search = new URL(window.location.href).searchParams.get("search");
    if(search !== null)
    {
      this.setState({value: search}, this.handleFind);

    }

    if(this.state.service != null)
    {
      this.handleNew();
      this.handleRemove();
    }
  }


  render() {
    return (
      <div className="App">
        <h1 className="title">Stream What ?</h1>

       <div className="container">
          <form
                action=""
                onSubmit={(e) => {
                  e.preventDefault();
                  window.location.href= `http://localhost:3000/?search=${this.state.value}`
                }}
              >
                  <input
                    type="text"
                    value={this.state.value}
                    placeholder="Search...."
                    name="find"
                    onChange={({ target: { value } }) => this.setState({ value })}
                    className="searchTerm"
                  >
                  </input>
                <div className="search"></div>
              </form>
          </div>

        <div>
          {this.state.output.results.length === 0 ? (this.state.error ? (<Fail/>) 
            :(
              <Display/>
            )
          ) : (
            this.state.output.results.map((data, i) => (
              <Found data={data} key={i} />
            ))
          )}
        </div>

        <div className="changeList">
        
        <form className="pickService">
          <label> Pick A Serivce: </label>
          <select  onChange={this.changeName} name="serviceNames" id="serivceList">
          <option value="netflix">Netflix</option>
          <option value="hulu">Hulu</option>
          <option value="apple">Apple</option>
          <option value="mubi">Mubi</option>
          <option value="prime">Prime</option>
          <option value="disney">Disney</option>
          <option value="peacock">Peacock</option>
          <option value="paramount">Paramount</option>
          <option value="starz">Starz</option>
          <option value="showtime">Showtime</option>
        </select>
        </form>        

        <h1>Recently Added</h1>
         { 
         this.state.statusNew.results.map((data, i) => (
              <ChangeList data={data} key={i} />
          ))
         } 
         
         <div className="RemoveList">
          <h1>Recently Removed</h1>
         { 
         this.state.statusRemove.results.map((data, i) => (
              <RemovedList data={data} key={i} />
          ))
         } 
         </div>
       
        </div>
      </div>
    );
  }
}
export default Home;
