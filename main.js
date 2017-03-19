import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from "react-router";

import App from './js/App.jsx';
import Home from './js/pages/home';
import Extra from './js/pages/extra';

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home}></IndexRoute>
			<Route path="Extra" component={Extra}></Route>
		</Route>
	</Router>,
	document.getElementById('app'));