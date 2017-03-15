import Dispatcher from "../dispatcher";

export function createTodo (task) {
	Dispatcher.dispatch({
		type: "CREATE_TODO",
		task,
	});
}

export function deleteTodo (id) {
	console.log(id);
	Dispatcher.dispatch({
		type: "DELETE_TODO",
		id,
	});
}

window.Dispatcher = Dispatcher;