import React, { Component, PropTypes } from "react";
import { Link } from "react-router";
import mainStore from '../store/main-store';


import PnsTable from './common/PnsTable';

class CitesRender extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentWillMount(){

	}

	render() {
		var type = 'cites';
		if(this.props.route.path.indexOf('citedby')>=0){
			type = 'citedby'
		};

		var pnlistFake = [
			{pn:'EP0029214B1',title:'Titre non disponible',an:'INTERNATIONAL HARVESTER',pbdt:'25 Jul 1972',apdt:'07 Jul 1971'}
		];
		return (
			<div className="pnview-cites-render">
				<div className="mar-top common-section">
					<PnsTable list={pnlistFake}/>
				</div>

				<div className="mar-top common-section">
					<h3 className="bottom-border"><span>Other references</span></h3>
					This patent has no non-patent reference.
				</div>
			</div>

		);
	}
}




export default CitesRender;