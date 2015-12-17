import React, { Component, PropTypes } from "react";
import { Link } from "react-router";


class List extends Component {

	render() {
		return (
			<div>
				<h1>Post List</h1>
				<ul>
					<li><Link to={"/content/5"}>Go to One</Link></li>
				</ul>
			</div>
		);
	}
}


export default List;