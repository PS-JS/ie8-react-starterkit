import React, { Component } from "react";
import { render } from "react-dom";
import { Router, Route, History } from "react-router";

import List from "./components/List";
import Content from "./components/Ctnt";

export default class AppRouter extends Component {
	render() {
		return (
			<Router>
				<Route path="/" component={List} />
				<Route path="/content/:id" component={Content} />
			</Router>
		);
	}
}