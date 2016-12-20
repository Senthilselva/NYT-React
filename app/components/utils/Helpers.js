// Include the axios package for performing HTTP requests (promise based alternative to request)
import axios from "axios";

//Testing code
var nytApiKey = "9f84f8dcc16c46789413d9ccd53f1ea1";
var queryUrlBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + nytApiKey + "&fl=pub_date,headline,web_url&q=";


//Testing code
const helpers = {
  runQuery: (topic,startYear,endYear) => {
    //topic = "obama"
    topic=topic.trim();
    startYear=startYear.trim();
    endYear=endYear.trim();

    var queryURL = queryUrlBase+topic;

    // If the user provides a startYear -- the startYear will be included in the queryURL
    if (parseInt(startYear)) {
      queryURL = queryURL + "&begin_date=" + startYear + "0101";
    }

    // If the user provides a startYear -- the endYear will be included in the queryURL
    if (parseInt(endYear)) {
      queryURL = queryURL + "&end_date=" + endYear + "0101";
    }

      return axios.get(queryURL).then((response) => {
      console.log("this")
      var docArr=[];
      for(var i =0; i <5; i++){
          docArr.push(response.data.response.docs[i])
      }
    // return response.data.response;
    return docArr;
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
