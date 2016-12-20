// Include the axios package for performing HTTP requests (promise based alternative to request)
import axios from "axios";

//Testing code
var nytApiKey = "9f84f8dcc16c46789413d9ccd53f1ea1";
var queryUrlBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + nytApiKey + "&fl=pub_date,headline,web_url&q=";


//Testing code
const helpers = {
  runQuery: (topic,b,c) => {
    //topic = "obama"
    var queryURL = queryUrlBase+topic;
      return axios.get(queryURL).then((response) => {
      console.log("this")
    return response.data.response;
    });
  },

  postToDatabase: (title, url, pub_date) => {
    return axios.post("/api/saved", { title: title,
                                      url: url,
                                      pub_date: pub_date });
  },
  deleteFromDatabase: (id) => {
    return axios.delete("/api/saved/"+id);
  },

  getSaved: () => {
    return axios.get("/api/saved");
  }

}

// We export the API helper
module.exports = helpers;
