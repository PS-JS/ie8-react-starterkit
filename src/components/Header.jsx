import React, { Component, PropTypes } from "react";
import { Link } from "react-router";



class Header extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<div className="header-v2">
					<a href="/" className="logo">
						<img src="http://vg2-static.patsnap.com/img/logo_patsnap_35.png?v=65f19feb"/>

					</a>




					<div className="right-side">




					</div>
				</div>
			</div>
		);
	}
}


export default Header;