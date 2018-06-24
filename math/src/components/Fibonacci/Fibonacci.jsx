import React, { Component } from 'react';
import _ from 'lodash';
import DigitCount from './DigitCount/DigitCount';

class Fibonacci extends Component {
	constructor(props) {
		super(props);

		this.state = {
			sequence: []
		};
	}

	componentDidMount() {
		const sequence = this.generateFibonacci();

		this.setState({
			sequence
		});
	}

	generateFibonacci() {
		let prevs = [1, 1];
		const sequence = _.times(80, i => {
			if (i < 2) return 1;

			let num = prevs[0] + prevs[1];
			prevs = [prevs[1], num];

			return num;
		});

		return sequence;
	}

	render() {
		const { sequence } = this.state;

		if (_.isEmpty(sequence)) {
			return 'No data.';
		}

		return (
			<div className="fibonacci">
				<DigitCount fib={this.state.sequence} />
				<DigitCount fib={this.state.sequence} sorted />
			</div>
		);
	}
}

export default Fibonacci;
