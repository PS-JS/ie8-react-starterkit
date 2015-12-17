import React, { Component, PropTypes } from "react";
import { Link } from "react-router";



class Aside extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div class="side">
				<div class="side-nav">
					<ul>
						<li className="view-left-imgdiv thumb-item" data-render="sThumb">
							<span className="patent-img-no">58 image(s)</span>
							<a>
								<img alt="" className="patentimg" src="/static/img/pic_placeholder_120.gif" title=""/>
							</a>
						</li>


					</ul>
				</div>

			</div>
		);
	}
}


export default Aside;