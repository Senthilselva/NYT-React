 //import react 
import React from "react";




//define class
class Result extends React.Component {
	
	constructor(props) {
	    super(props);

	    this.state = {
	      results:""
	    };  
	 	this.handleChange = this.handleChange.bind(this);
	}

  handleChange(event) {
    console.log("handle Change")
    
  }


render() {
	    return (	    	
  			
	    );
	}//render

}//React.Component


// Export the componen back for use in other files
export default Query;