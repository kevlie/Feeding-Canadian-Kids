import React from "react";
import Sidebar from "./Sidebar";
//import "./NewSignupsInfo.css";

class NewSignupsProgramInfo extends React.Component {
	constructor(props) {
		super(props)
	}

	componentDidMount = () => {
		const newId = this.props.match.params.id;
		const fetchURL = "http://localhost:9000/api/admin/newSignups/program/" + newId;
		fetch(fetchURL)
			// .then((res) => res.json())
			// .then((values) => this.setState({values}, () => console.log(this.state.values)))
			// .then(() => this.addIndices())
	}

	render() {
		//console.log(this.props.match.params.id);
		return <div></div>
	}
}

export default NewSignupsProgramInfo;