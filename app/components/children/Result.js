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
      <div className="row">
        <div className="col-sm-12">
          <br/>
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title"><strong><i className="fa fa-table"></i>Articles</strong></h3>
              </div>

              <div className="panel-body" id="wellSection">
                {/* Here we use a map function to loop through an array in JSX */}
                {this.props.results.map(function(search, i){
                  return(
                    <div className="well" key={i}>
                      <h3> {search.headline.main} </h3>
                      <h5> Url : {search.web_url} </h5>
                      <h6> Date published: {search.pub_date} </h6>
                      <button 
                        className="btn btn-primary" type="submit" value={i}
                        onClick = { that.handleChange }>Save</button>
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