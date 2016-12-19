//import react 
import React from "react";

//define class
export class Header extends React.Component {
	//render the function
	render() {
	    return (	    	
  			<header>
  				<nav className="navbar navbar-default">
    				<div className="container text-center">
       					<div className = "navbar-header">
       						<h3> New York Times Article Scrubber</h3>
       					  	<h4> Rock Paper Siccors</h4>
       					</div>
       				</div>
  				</nav>
			</header>
	    );
	}//render
}//React.Component

// We export the API helper
module.exports = Header;

