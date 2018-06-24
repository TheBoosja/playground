import {
	ADD_TODO,
	CHANGE_STATUS,
	FILTER_TODOS,
	DELETE_TODO,
	CLEAR_COMPLETED
} from '../actions/types';

export default (state = {}, { type, payload }) => {
	const { all, filtered } = state;

	switch (type) {
		case ADD_TODO: {
			const id = all.length + 1;
			return {
				all: [...all, { id, ...payload }],
				filtered
			};
		}
		case CHANGE_STATUS: {
			const { todo, completed } = payload;
			return {
				all: all.map(t => t.id === todo.id ? { ...todo, completed } : t),
				filtered
			};
		}
		case FILTER_TODOS: {
			switch (payload) {
				case 'active':
					return { filtered: all.filter(t => t.completed === false), all };
				case 'completed':
					return { filtered: all.filter(t => t.completed === true), all };
				default:
					return { all, filtered };
			}
		}
		case DELETE_TODO:
			return {
				all: all.filter(t => t !== payload),
				filtered
			};
		case CLEAR_COMPLETED:
			return {
				all: all.filter(t => !t.completed),
				filtered
			};
		default:
			return {
				all: [
					{ id: 1, name: 'Do the dishes', completed: false },
					{ id: 2, name: 'Buy Groceries', completed: true },
					{ id: 3, name: 'Clean bathroom', completed: false }
				],
				filtered: []
			};
	}
};
