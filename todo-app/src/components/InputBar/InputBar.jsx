import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../actions/todos';

import { Form, Input } from './styled';

class InputBar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			query: ''
		};

		this.onInputChange = this.onInputChange.bind(this);
		this.addTodo = this.addTodo.bind(this);
	}

	onInputChange({ target: { value } }) {
		this.setState({
			query: value
		});
	}

	addTodo(e) {
		e.preventDefault();
		const { query } = this.state;

		this.props.addTodo(query);

		this.setState({
			query: ''
		});
	}

	render() {
		const { query } = this.state;

		return (
			<Form onSubmit={this.addTodo} className="form">
				<Input
					name="query"
					type="text"
					value={query}
					onChange={this.onInputChange}
					autoFocus={true}
					placeholder="What do you need to do?"
				/>
			</Form>
		);
	}
}

export default connect(null, { addTodo })(InputBar);
