import React from "react";
// import { render } from "react-dom";

// Import sub-components
import Header  from "./children/Header";
import Search from "./children/Search";
import Saved from "./children/Saved";

// Helper Function
//import helpers from "./utils/Helpers";


//define class
class Main extends React.Component {
constructor(props) {
	super(props);

    this.state = {
    	isDatabaseChanged:false
    };

    this.databaseChanged = this.databaseChanged.bind(this);

}

	databaseChanged() {
		var isChange = -(this.state.isDatabaseChanged);
		this.setState({ isDatabaseChanged : isChange });
	}

 render() {
    return (
      <div>
      	<Header />
      	<Search databaseChanged = {this.databaseChanged}/>
      	<Saved isDatabaseChanged ={this.state.isDatabaseChanged}/>
      </div>
    );
  }
}

// Export the componen back for use in other files
export default Main;



