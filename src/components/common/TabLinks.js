import React, { Component, PropTypes } from "react";
import { Link, History } from "react-router";



var TabLinks = React.createClass({
	mixins: [ History ],
	render:function(){
		let comp = this;
		//let isActive = this.history.isActive();
		let getCname = function(pathname){
			return comp.history.isActive(pathname) ? 'selected' : '';
		};
		return (
			<ul className="link-tab-headers">
				{this.props.links.map(item=>(<li className={getCname(item.path)} key={item.path}><Link to={item.path}>{item.name}</Link></li>))}
			</ul>
		);
	}
});



export default TabLinks;