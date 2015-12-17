import React, { Component } from "react";
import { render } from "react-dom";
import { Router, Route, History, IndexRoute } from "react-router";

import List from "./components/List";
import Content from "./components/Ctnt";
import MainFrame from './components/MainFrame'

export default class AppRouter extends Component {
	render() {
		return (
			<Router>
				<Route path="/" component={MainFrame}>
					<IndexRoute component={List}/>
					<Route path="/list" component={List} />
				</Route>

			</Router>
		);
	}
}