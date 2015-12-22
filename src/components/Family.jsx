import React, { Component, PropTypes } from "react";
import { Link } from "react-router";
import mainStore from '../store/main-store';


import PnsTable from './common/PnsTable';

class Family extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}


	render() {

		var pnlistFake = [
			{pn:'EP0029214B1',title:'Titre non disponible',an:'INTERNATIONAL HARVESTER',pbdt:'25 Jul 1972',apdt:'07 Jul 1971'}
		];
		return (
			<div className="pnview-family-render">
				<div className="common-section">
					<h3>Family(24)</h3>
					<PnsTable list={pnlistFake}/>
				</div>
			</div>

		);
	}
}




export default Family;