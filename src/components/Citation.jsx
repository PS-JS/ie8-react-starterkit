import React, { Component, PropTypes } from "react";
import { Link } from "react-router";
import mainStore from '../store/main-store';

import CitesRender from './CitesRender';

class Overview extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentWillMount(){

	}

	render() {
		return (
			<div>
				<CitesRender/>
			</div>
		);
	}
}


export default Overview;