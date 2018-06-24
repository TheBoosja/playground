import React, { Component } from 'react';
import { connect } from 'react-redux';
import Todo from '../Todo';
import { filterTodos, clearCompleted } from '../../actions/todos';

import { List, ActionListItem, Detail, BtnGroup, FilterBtn, Button } from './styled';

class TodoList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			filter: 'all'
		};
	}

	renderTodos(todo, key) {
		return <Todo todo={todo} key={key} />;
	}

	clearCompletedTodos() {
		this.props.clearCompleted();
	}

	renderActions(length) {
		const onRadioChange = ({ target: { value } }) => {
			this.setState({
				filter: value
			});

			this.props.filterTodos(value);
		};

		const completedExists = this.props.todos.some(t => t.completed);

		return (
			<ActionListItem>
				<Detail>{length} items left</Detail>
				<BtnGroup>
					<FilterBtn
						name="all"
						label="All"
						value="all"
						checked={this.state.filter === 'all'}
						onChange={onRadioChange}
					/>
					<FilterBtn
						name="active"
						label="Active"
						value="active"
						checked={this.state.filter === 'active'}
						onChange={onRadioChange}
					/>
					<FilterBtn
						name="completed"
						label="Completed"
						value="completed"
						checked={this.state.filter === 'completed'}
						onChange={onRadioChange}
					/>
				</BtnGroup>
				{completedExists && 
					<Button style={{ fontSize: '1rem' }} onClick={() => this.clearCompletedTodos()}>
						Clear Completed
					</Button>
				}
			</ActionListItem>
		);
	}

	render() {
		const { todos, filtered } = this.props;

		if (todos.length < 1) {
			return <p>Add a todo...</p>;
		}

		const listOfTodos = this.state.filter === 'all' ? todos : filtered;

		const itemsLeft = todos.reduce((sum, t) => !t.completed ? sum + 1 : sum, 0);

		return (
			<List>
				{listOfTodos.map(this.renderTodos)}
				{this.renderActions(itemsLeft)}
			</List>
		);
	}
}

const mapStateToProps = ({ todos: { all, filtered } }) => {
	return { todos: all, filtered };
};

export default connect(mapStateToProps, { filterTodos, clearCompleted })(TodoList);
