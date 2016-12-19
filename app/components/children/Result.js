 //import react 
import React from "react";

//define class
class Results extends React.Component {
	
	constructor(props) {
      super(props);

      this.state = {
        topic:"",
        startDate:"",
        endDate: ""
      };  
     this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log("handle Change");  
  }



render() {
  var that = this;
	   return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Search History</h3>
        </div>
        <div className="panel-body text-center">

          {/* Here we use a map function to loop through an array in JSX */}
          {this.props.results.map(function(search, i){
            return (
              <p key={i}> {search.web_url} 
                    <br/> {search.headline.main}
                    <br/> {search.pub_date} 
                    <button 
                    className="btn btn-primary" type="submit" id={i}
                    onClick = { that.handleChange }>Save</button>
              </p>
            );
          })}
        </div>
      </div>
    );
	}//render

}//React.Component


// Export the componen back for use in other files
export default Results;