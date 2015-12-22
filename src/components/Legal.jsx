import React, { Component, PropTypes } from "react";
import { Link } from "react-router";
import mainStore from '../store/main-store';


import PnsTable from './common/PnsTable';

class Legal extends Component {
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
					<h3>Legal Status</h3>

					<div className="tag-container">
						<span className="tag legal-3">Granted</span>
					</div>

					<table className="legal-status-table">
						<tbody>
						<tr>
							<th className="date" colSpan="2">01 Jan 2002</th>
						</tr>
						<tr>
							<th>PRS code</th>
							<td>REG</td>
						</tr>
						<tr>
							<th>PRS Code Expl</th>
							<td>REFERENCE TO A NATIONAL CODE</td>
						</tr>
						<tr>
							<th>Ref. country code</th>
							<td>GB</td>
						</tr>
						<tr>
							<th>Ref. PRS code</th>
							<td>IF02</td>
						</tr>
						<tr>
							<th className="date" colSpan="2">03 Mar 1999</th>
						</tr>
						<tr>
							<th>PRS code</th>
							<td>A4</td>
						</tr>
						<tr>
							<th>PRS Code Expl</th>
							<td>+ SUPPLEMENTARY SEARCH REPORT</td>
						</tr>
						<tr>
							<th className="date" colSpan="2">03 Mar 1999</th>
						</tr>
						<tr>
							<th>PRS code</th>
							<td>AK</td>
						</tr>
						<tr>
							<th>PRS Code Expl</th>
							<td>+ DESIGNATED CONTRACTING STATES:</td>
						</tr>
						<tr>
							<th>Kind code of ref. document</th>
							<td>A4</td>
						</tr>
						<tr>
							<th>Designated state(s)</th>
							<td>DE, FR, GB</td>
						</tr>
						<tr>
							<th className="date" colSpan="2">14 Oct 1998</th>
						</tr>
						<tr>
							<th>PRS code</th>
							<td>RHK1</td>
						</tr>
						<tr>
							<th>PRS Code Expl</th>
							<td>MAIN CLASSIFICATION (CORRECTION)</td>
						</tr>
						<tr>
							<th>IPC</th>
							<td>B66B, 1/20</td>
						</tr>
						<tr>
							<th className="date" colSpan="2">30 Sep 1998</th>
						</tr>
						<tr>
							<th>PRS code</th>
							<td>17P</td>
						</tr>
						<tr>
							<th>PRS Code Expl</th>
							<td>+ REQUEST FOR EXAMINATION FILED</td>
						</tr>
						<tr>
							<th>Effective date</th>
							<td>15 May 1998</td>
						</tr>
						<tr>
							<th className="date" colSpan="2">30 Sep 1998</th>
						</tr>
						<tr>
							<th>PRS code</th>
							<td>AK</td>
						</tr>
						<tr>
							<th>PRS Code Expl</th>
							<td>+ DESIGNATED CONTRACTING STATES:</td>
						</tr>
						<tr>
							<th>Kind code of ref. document</th>
							<td>A1</td>
						</tr>
						<tr>
							<th>Designated state(s)</th>
							<td>DE, FR, GB</td>
						</tr>
						<tr>
							<td colSpan="2" className="legal_source"><span className="i16-deep-gray ico-info"></span> Data
								source: INPADOC
							</td>
						</tr>
						</tbody>
					</table>
				</div>
			</div>

		);
	}
}




export default Legal;