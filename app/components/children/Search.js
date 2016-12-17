//import react 
import React from "react";

//define class
export class Search extends React.Component {
	constructor(props) {
    super(props);

    this.state = {
      topic:"",
      startDate: Date.now(),
      endDate: Date.now()
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    var newId = event.target.id;
    console.log(event.target.id +"   "+event.target.value);
    switch (newId){
    	case "topic":
    		this.setState({ topic : event.target.value } );
    		break;
    	case "startDate":
    		this.setState({ startDate : event.target.value } );
    	case "endDate":
    		this.setState({ endDate : event.target.value } );

    }
    this.setState({ newid : event.target.value } );
    console.log(this.state)
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("CLICK");
    console.log(this.state.topic);
  }

	//render the function
	render() {
	    return (	    	
  			<form onClick={this.handleSubmit}>
					<input type="text" id="topic" 
						value={this.state.topic} onChange={this.handleChange}
							required />
					<input type="date" id="startDate" 
						value={this.state.startDate}
                		onChange={this.handleChange}
                			required />
					<input type="date" id= "endDate" 
						value={this.state.endDate} 
						onChange={this.handleChange} required/>

					<button type = "submit"> Search </button>
			</form>
	    );
	}//render
}//React.Component