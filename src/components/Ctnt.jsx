import React, { Component, PropTypes } from "react";

class Ctnt extends Component {

	render() {
		const params = this.props.routeParams;

		return (
			<div>
				<h1>Id: {params.id}</h1>
				<p>bbb</p>
			</div>
		);
	}
}


export default Ctnt;