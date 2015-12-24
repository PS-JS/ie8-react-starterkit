import React, { Component, PropTypes } from "react";
import { Link, IndexLink } from "react-router";

import {__} from 'utils';

import ProgressBar from './common/ProgressBar';

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

						<IndexLink activeClassName="selected" to={`/`}>{__('Overview')}</IndexLink>


						<Link activeClassName="selected" to={`/citation`}>{__('citation-analysis')}</Link>


						<Link activeClassName="selected" to={`/family`}>{__('patent-family')}</Link>


						<Link activeClassName="selected" to={`/legal`}>{__('legal-information')}</Link>

					</div>


					<div className="right-side">




					</div>
				</div>
				<ProgressBar className="header-line"/>
			</div>
		);
	}
}


export default Header;