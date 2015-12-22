import React, { Component, PropTypes } from "react";
import { Link } from "react-router";
import mainStore from '../store/main-store';

import CitesRender from './CitesRender';

import TabLinks from './common/TabLinks';

class Overview extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentWillMount(){

	}

	render() {
		var links = [
			{name:'Cites(15)',path:'/citation/cites'},
			{name:'Cited by(6)',path:'/citation/citedby'}
		];
		return (
			<div>
				<TabLinks links={links}/>
				{this.props.children}
			</div>
		);
	}
}


export default Overview;