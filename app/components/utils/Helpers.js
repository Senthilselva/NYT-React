// Include the axios package for performing HTTP requests (promise based alternative to request)
import axios from "axios";

//Testing code
var nytApiKey = "9f84f8dcc16c46789413d9ccd53f1ea1";

var queryUrlBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + nytApiKey + "&fl=pub_date,headline,web_url&q=";

// queryURL = queryURL+"?qs="+"obama"+"&begin_date="+"20001231"+"&end_date=+"
// queryURL = queryURL+ "20170101" + "&fl=pub_date,headline,web_url"+ "page="+0;
// queryURL = queryURL+"&api-key="+"9f84f8dcc16c46789413d9ccd53f1ea1";

// queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?qs=obama&api-key=9f84f8dcc16c46789413d9ccd53f1ea1"
// axios.get(queryURL).then(function(response) {
//   console.log(JSON.stringify(response));

// });

//Testing code

const helpers = {

  runQuery: (topic,b,c) => {
    topic = "obama"
    var queryURL = queryUrlBase+topic;

    // console.log(queryURL)
      return axios.get(queryURL).then((response) => {
    // console.log(JSON.stringify(response));
    //console.log(response.data.response);
      console.log("this")
    return response.data.response;
    });
  }
}

// We export the API helper
module.exports = helpers;





	 // request.get({
  //    url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
  //     qs: {
  //       'api-key': "9f84f8dcc16c46789413d9ccd53f1ea1",
  //       'q': "obama",
  //       'begin_date': "20001231",
  //       'end_date': "20170101",
  //       'fl': "pub_date,headline,web_url",
  //       'page': 0
  //     },
  //   }, function(err, response, body) {
  //     body = JSON.parse(body);
  //     console.log(body);
  // });
  // } //run query

