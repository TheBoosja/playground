import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeStatus, deleteTodo } from '../../actions/todos';

import { ListItem, CheckBox, Title, DeleteBtn } from './styled';

class Todo extends Component {
	constructor(props) {
		super(props);

		this.onCheck = this.onCheck.bind(this);
	}

	onCheck({ target: { checked } }) {
		const { todo } = this.props;

		this.props.changeStatus({ completed: checked, todo });
	}

	deleteTodo() {
		const { todo, deleteTodo } = this.props;

		deleteTodo(todo);
	}

	render() {
		const { id, name, completed } = this.props.todo;

		return (
			<ListItem>
				<CheckBox id={id} value={completed} checked={completed} onChange={this.onCheck} />
				<Title strikeThrough={completed}>{name}</Title>
				<DeleteBtn onClick={() => this.deleteTodo()}>&times;</DeleteBtn>
			</ListItem>
		);
	}
}

export default connect(null, { changeStatus, deleteTodo })(Todo);
