//import react 
import React from "react";
//var axios = require("axios");

import Query from "./Query";
//import { Result } from "Result";

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
      results:""
    };

    this.setQuery = this.setQuery.bind(this);
  }

componentDidUpdate(prevProps, prevState) {

      helper.runQuery(this.state.searchTopic, this.state.searchStartDate, this.state.searchEndDate)
      .then((data) => {
        if (data !== this.state.results) {
          console.log(data);
          this.setState({ results: data });
        }
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
        hbvkjwfhbvjwfhlefllr
        <Query setQuery = {this.setQuery}/> 
          {/* <Result />*/}
        </div> 
        )
	}//render
}//React.Component


// Export the componen back for use in other files
export default Search;