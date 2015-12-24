import React, { Component, PropTypes } from "react";
import { Link, IndexLink } from "react-router";

import Dropdown, { DropdownTrigger, DropdownContent } from './common/react-simple-dropdown/Dropdown.jsx';

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
						<img src="//static.patsnap.com/img/logo_patsnap_35.png"/>

					</a>



					<div className="tab-mode">

						<IndexLink activeClassName="selected" to={`/`}>{__('Overview')}</IndexLink>


						<Link activeClassName="selected" to={`/citation`}>{__('citation-analysis')}</Link>


						<Link activeClassName="selected" to={`/family`}>{__('patent-family')}</Link>


						<Link activeClassName="selected" to={`/legal`}>{__('legal-information')}</Link>

					</div>



					<div className="header-right">
						<Dropdown className="lang-dropdown">
							<DropdownTrigger>
								<strong className="lang-btn">English</strong>
							</DropdownTrigger>
						<DropdownContent>
							<ul className="lang-dropdown__quick-links lang-dropdown__segment">
								<li className="lang-dropdown__link">
									<a className="lang-dropdown__link__anchor" href="/favorites">简体</a>
								</li>
								<li className="lang-dropdown__link">
									<a className="lang-dropdown__link__anchor">繁体</a>
								</li>
							</ul>
						</DropdownContent>
					</Dropdown>
					</div>


				</div>
				<ProgressBar className="header-line"/>
			</div>
		);
	}
}


export default Header;