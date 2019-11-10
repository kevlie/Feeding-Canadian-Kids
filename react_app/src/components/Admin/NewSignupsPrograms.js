import React from "react";

class NewSignupsProgram extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (<tr id= { this.props.status }>
					<td><a href="#">Program</a></td>
					<td>Example Address 1</td>
				</tr>
		)
	}
}

export default NewSignupsProgram