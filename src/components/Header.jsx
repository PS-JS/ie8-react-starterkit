import React, { Component, PropTypes } from "react";
import { Router, Link, IndexLink } from "react-router";


import Dropdown, { DropdownTrigger, DropdownContent } from './common/react-simple-dropdown/Dropdown.jsx';

import {__,lang} from 'utils';
import T from 'T';

import ProgressBar from './common/ProgressBar';

class Header extends Component {
	constructor(props) {
		super(props);
	}

	changeLang(l){
		lang(l);
	}

	render() {
		var comp = this;
		var curLang = lang();

		return (
			<div>
				<div className="header-v2 pnview-header">
					<a href="/" className="logo">
						<img src="//static.patsnap.com/img/logo_patsnap_35.png"/>

					</a>



					<div className="tab-mode">

						<IndexLink activeClassName="selected" to={`/`}><T>Overview</T></IndexLink>


						<Link activeClassName="selected" to={`/citation`}><T>citation-analysis</T></Link>


						<Link activeClassName="selected" to={`/family`}><T>patent-family</T></Link>


						<Link activeClassName="selected" to={`/legal`}><T>legal-information</T></Link>

					</div>



					<div className="header-right">
						<Dropdown className="lang-dropdown">
							<DropdownTrigger>
								<strong className="lang-btn">{__(`lang-${curLang}`)}</strong>
							</DropdownTrigger>
						<DropdownContent>
							<ul className="lang-dropdown__quick-links lang-dropdown__segment">
								<li onClick={()=>comp.changeLang('en')} className="lang-dropdown__link">
									<a className="lang-dropdown__link__anchor"><T>lang-en</T></a>
								</li>
								<li onClick={()=>comp.changeLang('cn')} className="lang-dropdown__link">
									<a className="lang-dropdown__link__anchor"><T>lang-cn</T></a>
								</li>
								<li onClick={()=>comp.changeLang('tw')} className="lang-dropdown__link">
									<a className="lang-dropdown__link__anchor"><T>lang-tw</T></a>
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