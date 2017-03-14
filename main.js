import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from "react-router";

import App from './App.jsx';
import Home from './pages/home';
import Extra from './pages/extra';
import TodoList from './pages/todolist';

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home}></IndexRoute>
			<Route path="Extra" component={Extra}></Route>
			<Route path="todo-list" component={TodoList}></Route>
		</Route>
	</Router>,
	document.getElementById('app'));