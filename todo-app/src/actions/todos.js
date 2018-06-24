import { ADD_TODO, CHANGE_STATUS, FILTER_TODOS, DELETE_TODO, CLEAR_COMPLETED } from './types';

export function addTodo(query) {
	return {
		type: ADD_TODO,
		payload: {
			name: query,
			completed: false
		}
	};
}

export function changeStatus({ completed, todo }) {
	return {
		type: CHANGE_STATUS,
		payload: {
			completed,
			todo
		}
	};
}

export function filterTodos(filter) {
	console.log('action filter', filter);
	return {
		type: FILTER_TODOS,
		payload: filter
	};
}

export function deleteTodo(todo) {
	return {
		type: DELETE_TODO,
		payload: todo
	};
}

export function clearCompleted() {
	return {
		type: CLEAR_COMPLETED
	};
}
