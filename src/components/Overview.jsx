import React, { Component, PropTypes } from "react";
import { Link } from "react-router";
import mainStore from '../store/main-store';

import AbstRender from './AbstRender';

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
				<AbstRender/>
			</div>
		);
	}
}


export default Overview;