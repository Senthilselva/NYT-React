//import react 
import React from "react";
//var axios = require("axios");

import Query from "./Query";
import Results from "./Result";

// Import sub-components
import helper from "../utils/Helpers";

//define class
class Search extends React.Component {
	constructor(props) {
    super(props);

    this.state = {
      searchTopic:"",
      searchStartDate: Date.now(),
      searchEndDate: Date.now(),
      results:[]
    };

    this.setQuery = this.setQuery.bind(this);
    this.updateDataBase = this.updateDataBase.bind(this);
  }

componentDidUpdate(prevProps, prevState) {

      helper.runQuery(this.state.searchTopic, this.state.searchStartDate, this.state.searchEndDate)
      .then((response) => {
          console.log(response)
          this.setState({ results: response.docs });
          console.log(("results:"+this.state.results))
      });

}


  setQuery(topic,startDate,endDate) {
    this.setState({
      searchTopic:topic,
      searchStartDate: startDate,
      searchEndDate: endDate
    });
  }

  updateDataBase(saveId){
    var topic = this.state.results[saveId].headline.main;
    var url = this.state.results[saveId].web_url;
    var pub_date = this.state.results[saveId].pub_date;
    console.log("Topic: " +topic + "url"+ url +"   " +pub_date )

    helper.postToDatabase(topic,url,pub_date).then(function(data){
       console.log(data);
       console.log(saveId);
       this.props.databaseChanged();
       //remove the one element from the result array
       var tempResult = this.state.results;
       tempResult.splice(saveId,1);
       this.setState({ result : tempResult})

    }.bind(this))

  }


	//render the function
	render() {
    return (	    	
  		<div>
        <Query setQuery = {this.setQuery}/> 
        <Results results = {this.state.results}
                 updateDataBase = {this.updateDataBase}/>
      </div> 
    )
	}//render
}//React.Component


// Export the componen back for use in other files
export default Search;