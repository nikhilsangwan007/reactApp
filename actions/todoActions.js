import Dispatcher from "../dispatcher";

export function createTodo (task) {
	Dispatcher.dispatch({
		type: "CREATE_TODO",
		task,
	});
}

export function deleteTodo (id) {
	Dispatcher.dispatch({
		type: "DELETE_TODO",
		id,
	});
}