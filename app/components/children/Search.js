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
	//render the function
	render() {
    return (	    	
  		<div>
        <Query setQuery = {this.setQuery}/> 
        <Results results = {this.state.results}/>
      </div> 
    )
	}//render
}//React.Component


// Export the componen back for use in other files
export default Search;