import React, { Component, PropTypes } from "react";
import { Link } from "react-router";

import Header from './Header.jsx';
import Aside from './Aside.jsx';

class MainFrame extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="pnview-master-container">
				<Header className="pnview-header"/>
				<div id="detail-view">
					<Aside className="side"/>
				</div>
				{this.props.children}
			</div>
		);
	}
}


export default MainFrame;