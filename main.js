import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from "react-router";
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import allReducers from './js/reducers/allReducers';
import App from './js/App.jsx';
import Home from './js/pages/home';
import Extra from './js/pages/extra';


const store = createStore(allReducers); 

ReactDOM.render(
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route path="/" component={App}>
				<IndexRoute component={Home}></IndexRoute>
				<Route path="Extra" component={Extra}></Route>
			</Route>
		</Router>
	</Provider>,
	document.getElementById('app'));