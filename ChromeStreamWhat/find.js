var axios = require("axios").default;

var options = {
  method: "GET",
  url: "https://streaming-availability.p.rapidapi.com/search/basic",
  params: {
    country: "us",
    service: "netflix",
    type: "movie",
    page: "1",
    keyword: "hush",
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
    console.log(response.data.results.title);    
  })
  .catch(function (error) {
    console.error(error);
  });
