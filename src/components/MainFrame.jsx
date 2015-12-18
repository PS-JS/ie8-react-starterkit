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
				<div className="tab-content">
					<Aside className="main-aside"/>
					<div className="content-box main-section">
						{this.props.children}
					</div>
				</div>

			</div>
		);
	}
}


export default MainFrame;