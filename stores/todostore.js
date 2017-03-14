import {EventEmitter} from 'events';
import Dispatcher from '../dispatcher';

class TodoStore extends EventEmitter {
	constructor() {
		super()
		this.todos = [
				{
					id: 1,
					task: "Learn view.js",
					complete: false
				},
				{
					id: 2,
					task: "Learn angular 2",
					complete: false
				},
				{
					id: 3,
					task: "Buy maggi",
					complete: false
				},
			];

	}

	createTodo(task) {
		const id = Date.now();

		console.log(task);

		this.todos.push({
			id,
			task,
			complete : false,
		});

		this.emit("change");
	}

	getAll() {
		return this.todos;
	}

	handleAction(action) {
		console.log(action);
		switch(action.type) {
			case "CREATE_TODO": {
				this.createTodo(action.task);
			}
		}
	}
}
const todoStore = new TodoStore;
Dispatcher.register(todoStore.handleAction.bind(todoStore));
window.todoStore = todoStore;

export default todoStore;