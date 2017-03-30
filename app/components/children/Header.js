//import react 
import React from "react";

//define class
export class Header extends React.Component {
	//render the function
	render() {
	    return (	
        <div class="jumbotron">
          <h1><center><strong><i className="fa fa-newspaper-o"></i> New York Times Search</strong></center></h1>
        </div>
	    );
	}//render
}//React.Component

// We export the API helper
module.exports = Header;

