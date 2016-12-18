// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");

//Testing code
var nytAPI = "9f84f8dcc16c46789413d9ccd53f1ea1";

var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

queryURL = queryURL+"?qs="+"obama"+"&begin_date="+"20001231"+"&end_date=+"
queryURL = queryURL+ "20170101" + "&fl=" + "pub_date,headline,web_url"+ "page="+0;


queryURL = queryURL+"&api-key="+"9f84f8dcc16c46789413d9ccd53f1ea1";

// queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?qs=obama&api-key=9f84f8dcc16c46789413d9ccd53f1ea1"
axios.get(queryURL).then(function(response) {
  console.log(JSON.stringify(response));

});

//Testing code

var getNytArticle = function(){
	request.get({
  url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
  qs: {
    'api-key': "9f84f8dcc16c46789413d9ccd53f1ea1",
    'q': "obama",
    'begin_date': "20001231",
    'end_date': "20170101",
    'fl': "pub_date,headline,web_url",
    'page': 0
  },
}, function(err, response, body) {
  body = JSON.parse(body);
  console.log(body);
}// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");


}