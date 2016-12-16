import React from "react";
import { render } from "react-dom";

// Import sub-components
import { Header } from "./children/Header";
import Search from "./children/Search";
//import Result from "./children/Result";
//import Saved from "./children/Saved";

// Helper Function
//import helpers from "./utils/Helpers";

//define class
class Main extends React.Component {
 
 render() {
    return (
      <div>
      	<Header />
      </div>
    );
  }
}

// Export the componen back for use in other files
export default Main;



