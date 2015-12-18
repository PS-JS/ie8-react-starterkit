import React, { Component, PropTypes } from "react";
import { Link, IndexLink } from "react-router";



class Header extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<div className="header-v2 pnview-header">
					<a href="/" className="logo">
						<img src="http://vg2-static.patsnap.com/img/logo_patsnap_35.png?v=65f19feb"/>

					</a>



					<div className="tab-mode">

						<IndexLink activeClassName="selected" to={`/`}>Overview</IndexLink>


						<Link activeClassName="selected" to={`/citation`}>Citation</Link>


						<Link activeClassName="selected" to={`/family`}>Family</Link>


						<Link activeClassName="selected" to={`/legal`}>Legal</Link>

					</div>


					<div className="right-side">




					</div>
				</div>
			</div>
		);
	}
}


export default Header;