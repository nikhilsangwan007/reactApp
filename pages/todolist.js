import React from 'react';
import {EventEmitter} from 'events';

import Todo from '../components/todo';
import * as todoActions from '../actions/todoActions';
import TodoStore from '../stores/todostore';

export default class TodoList extends React.Component {
	constructor() {
		super()
		this.updateTodos = this.updateTodos.bind(this);
		this.state = {
			todos: TodoStore.getAll(),
		};
	}

	componentWillMount() {
		TodoStore.on("change", this.updateTodos);
	}

	componentWillUnmount() {
		// THROWING ERROR {REMOVELISTNER IS NOT A FUNCTION} FIX IT OTHERWISE MEMORY LEAKAGE WILL HAPPEN
		TodoStore.removeListner("change", this.updateTodos);
	}

	updateTodos() {
		this.setState({
				todos: TodoStore.getAll(),
			});
	}

	createTodo() {
		todoActions.createTodo(Date.now());
	}

	render() {

		const {todos} = this.state;

		const todoComponents = todos.map((todo) => {
			return <Todo key={todo.id} {...todo} />
		});

		return (
				<div>
					<h2>TodoList</h2>
					<ol>{todoComponents}</ol>
					<button className="uk-button" onClick={this.createTodo.bind(this)}>Add Task</button>
				</div>
			)
	}
}