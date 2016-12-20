//import react 
import React from "react";

// Import sub-components
import helpers from "../utils/Helpers";

//define class
class Results extends React.Component {
	
	constructor(props) {
    super(props);
       
    this.state = {
      saved : []
    },

     this.handleChange = this.handleChange.bind(this);
     this.componentDidMount =this.componentDidMount.bind(this);
  }

  // The moment the page renders get the History
  componentDidMount() {
    // Get the latest history.
    helpers.getSaved().then(function(response) {
      console.log(response);
      this.setState({ saved: response.data });
    }.bind(this));
  }

  //Will activate if new props come in
  componentWillReceiveProps(nextProps) {
    helpers.getSaved().then(function(response) {
      console.log(response);
      this.setState({ saved: response.data });
    }.bind(this));

  }

  handleChange(event) {
    console.log("handle Change"); 
    console.log(event.target.id);
    var idToDelete = event.target.id;
    var that = this;
    helpers.deleteFromDatabase(idToDelete).then(function(){
      console.log("deleted")
      helpers.getSaved().then(function(response) {
        console.log(response);
        that.setState({ saved: response.data });
      });
    });
    //this.props.updateDataBase(idToSave)
  }

render() {
  var that = this;
	   return (
      <div className="row">
        <div className="col-sm-12">
          <br/>
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title"><strong><i className="fa fa-table"></i>Saved List</strong></h3>
              </div>

              <div className="panel-body" id="wellSection">
                {/* Here we use a map function to loop through an array in JSX */}
                {this.state.saved.map(function(search, i){
                  return(
                    <div className="well" key={i}>
                      <h3> {search.title} </h3>
                      <h5> Url : {search.url} </h5>
                      <h6> Date published: {search.pub_date} </h6>
                      <button 
                        className="btn btn-primary" type="submit" id={search._id}
                        onClick = { that.handleChange }>Delete</button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
    );
	}//render

}//React.Component


// Export the componen back for use in other files
export default Results;