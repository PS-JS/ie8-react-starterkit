import React, { Component } from "react";
import { render } from "react-dom";
import { Router, Route, History, IndexRoute } from "react-router";

import List from "./components/List";
import Content from "./components/Ctnt";
import MainFrame from './components/MainFrame';
import Overview from './components/Overview';
import Citation from './components/Citation';

export default class AppRouter extends Component {
	render() {
		return (
			<Router>
				<Route path="/" component={MainFrame}>
					<IndexRoute component={Overview}/>
					<Route path="/citation" component={Citation} />
				</Route>

			</Router>
		);
	}
}