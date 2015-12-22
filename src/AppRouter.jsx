import React, { Component } from "react";
import { render } from "react-dom";
import { Router, Route, History, IndexRoute, IndexRedirect } from "react-router";

import List from "./components/List";
import Content from "./components/Ctnt";
import MainFrame from './components/MainFrame';
import Overview from './components/Overview';
import Citation from './components/Citation';
import CitesRender from './components/CitesRender';
import Family from './components/Family';
import Legal from './components/Legal';



export default class AppRouter extends Component {
	render() {
		return (
			<Router>
				<Route path="/" component={MainFrame}>
					<IndexRoute component={Overview}/>
					<Route path="citation" component={Citation} >
						<IndexRedirect to="cites" />
						<Route path="cites" component={CitesRender} />
						<Route path="citedby" component={CitesRender} />
					</Route>
					<Route path="family" component={Family}/>
					<Route path="legal" component={Legal}/>
				</Route>

			</Router>
		);
	}
}