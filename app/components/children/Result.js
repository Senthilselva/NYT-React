 //import react 
import React from "react";

//define class
class Results extends React.Component {
	
	constructor(props) {
      super(props);

     this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log("handle Change"); 
    console.log(event.target.value);
    var idToSave = event.target.value;
    this.props.updateDataBase(idToSave);
  }

render() {
  var that = this;
	   return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Search Result</h3>
        </div>
        <div className="panel-body text-center">

          {/* Here we use a map function to loop through an array in JSX */}
          {this.props.results.map(function(search, i){
            return (
              <p key={i}> {search.web_url} 
                    <br/> {search.headline.main}
                    <br/> {search.pub_date} 
                    <button 
                    className="btn btn-primary" type="submit" value={i}
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