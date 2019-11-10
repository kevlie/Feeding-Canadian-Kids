import React from "react";
import Sidebar from "./Sidebar";
//import "./NewSignupsInfo.css";

class NewSignupsProgramInfo extends React.Component {
	constructor(props) {
		super(props)
	}

	componentDidMount = () => {
		fetch("http://localhost:9000/api/admin/newSignups/program/:id")
			// .then((res) => res.json())
			// .then((values) => this.setState({values}, () => console.log(this.state.values)))
			// .then(() => this.addIndices())
	}

	render() {
		return <div></div>
	}
}

export default NewSignupsProgramInfo;