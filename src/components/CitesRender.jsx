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
			<div className="pnview-abst-render">
				<div className="section-cites">
					<h3>{type} <span>(0)</span></h3>
					<PnsTable list={pnlistFake}/>
				</div>

				<div className="section-other-references">
					<h3><span>Other references</span></h3>
					This patent has no non-patent reference.
				</div>
			</div>

		);
	}
}




export default CitesRender;