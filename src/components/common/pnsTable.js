import React, { Component, PropTypes } from "react";



var PnsTable = React.createClass({
	propTypes: {
		list: React.PropTypes.array.isRequired
	},
	render:function(){
		let comp = this;
		let list = comp.props.list;
		return (
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

				{list.map(function(item,idx){
					return (
						<tr key={item.pn}>
							<td>
								<a className="pn" href={`/patent_view/view?pn=${item.pn}&amp;related_pn=EP0029214B1`} target="_blank">
									{item.pn}
								</a>
							</td>
							<td className="col-title">{item.title}</td>
							<td>
								<a className="name-link" href={`/patent/result?q=AN_FACET:&quot;${item.an}&quot;`} target="_blank">
									{item.an}
								</a>
							</td>
							<td className="col-date">{item.apdt}</td>
							<td className="col-date">{item.pbdt}</td>
						</tr>
					)
				})}

				</tbody>
			</table>
		);
	}
});



export default PnsTable;