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
		return (
			<div className="pnview-abst-render">
				<div className="section-cites">
					<h3>Cites <span>(0)</span></h3>
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
						<tbody></tbody>
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