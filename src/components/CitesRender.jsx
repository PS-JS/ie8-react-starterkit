import React, { Component, PropTypes } from "react";
import { Link } from "react-router";
import mainStore from '../store/main-store';

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
		return (
			<div className="pnview-abst-render">
				<div className="section-cites">
					<h3>{type} <span>(0)</span></h3>
					<table className="cites-table">
						<thead>
						<tr>
							<th>Publication Number</th>
							<th>Title</th>
							<th>Assignee Name</th>
							<th className="col-date">Application Date</th>
							<th className="col-date">Publication Date</th>
						</tr>
						</thead>
						<tbody>
						<tr>
							<td><a className="pn"
								   href="/patent_view/view?pn=FR2103668A5&amp;related_pn=EP0029214B1&amp;_type=cite&amp;page=1&amp;rows=10"
								   target="_blank">FR2103668A5</a></td>
							<td className="col-title">Titre non disponible</td>
							<td><a className="name-link"
								   href="/patent/result?q=AN_FACET:&quot;INTERNATIONAL%20HARVESTER&quot;"
								   target="_blank">INTERNATIONAL HARVESTER</a></td>
							<td className="col-date">07 Jul 1971</td>
							<td className="col-date">14 Apr 1972</td>
						</tr>
						<tr>
							<td><a className="pn"
								   href="/patent_view/view?pn=US3679018&amp;related_pn=EP0029214B1&amp;_type=cite&amp;page=1&amp;rows=10"
								   target="_blank">US3679018</a></td>
							<td className="col-title">DUAL STATION TRANSMISSION CONTROL</td>
							<td><a className="name-link"
								   href="/patent/result?q=AN_FACET:&quot;INTERNATIONAL%20HARVESTER%20COMPANY&quot;"
								   target="_blank">INTERNATIONAL HARVESTER COMPANY</a></td>
							<td className="col-date">07 Jul 1970</td>
							<td className="col-date">25 Jul 1972</td>
						</tr>
						</tbody>
					</table>
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