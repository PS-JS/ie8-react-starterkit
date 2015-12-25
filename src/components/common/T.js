import React, { Component, PropTypes } from "react";
import mainStore from 'mainStore';
import {__,lang} from 'utils';
import T from 'T';

var Translate = React.createClass({
	mixins:[mainStore.createReactMixin('curLang')],
	getInitialState: function () {
		return {curLang:lang()}
	},
	displayName:"Translate",
	onStoreChange:function(curLang){
		this.setState({
			curLang:curLang
		})
	},
	render:function(){
		let comp = this;
		var text = __(comp.props.children,comp.props.project,comp.state.curLang);
		return (
			<span>{text}</span>
		);
	}
});



export default Translate;