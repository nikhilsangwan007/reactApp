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
		const task = this.state.input;
		todoActions.createTodo(task);
	}

	getInitialState() {
		return {input : ''};
	}

	handleChange(e) {
		this.setState({input : e.target.value});
	}

	render() {

		const {todos} = this.state;

		const todoComponents = todos.map((todo) => {
			return <Todo key={todo.id} {...todo} />
		});

		return (
				<div>
					<div className="uk-container">
						<h1 className="todoTitle">TodoList</h1>
						<ul className="todoList">{todoComponents}</ul>
						<input className="uk-form-small" type="text" onChange={this.handleChange.bind(this)}/>
						<button className="uk-button" onClick={this.createTodo.bind(this)}>Add Task</button>
					</div>
				</div>
			)
	}
}