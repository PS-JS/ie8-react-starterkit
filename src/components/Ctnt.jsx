import React, { Component, PropTypes } from "react";

class Ctnt extends Component {

	render() {
		const { detail } = this.props;
		return (
			<div>
				<h1>111</h1>
				<p>bbb</p>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		detail: {
			ctnt: state.ctnt			
		}
	};
}

export default Ctnt;