require('./polyfills.js');

import React from "react";
import { render } from "react-dom";

import AppRouter from "./AppRouter";

render(
	<AppRouter />,
	document.getElementById("app")
);