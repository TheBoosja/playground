import React, { Component } from 'react';
import _ from 'lodash';

class DigitCount extends Component {
	constructor(props) {
		super(props);

		this.renderDigitCounts = this.renderDigitCounts.bind(this);
	}

	generateDigitCounts(sequence = [], sorted) {
		let numCount = [
			{ Zero: 0 },
			{ One: 0 },
			{ Two: 0 },
			{ Three: 0 },
			{ Four: 0 },
			{ Five: 0 },
			{ Six: 0 },
			{ Seven: 0 },
			{ Eight: 0 },
			{ Nine: 0 }
		];

		sequence.forEach(s => {
			const split = s
				.toString(10)
				.split('')
				.map(i => parseInt(i, 10));

			split.forEach(i => {
				const key = this.convertDigitToLabel(i);
				numCount[i][key]++;
			});
		});

		if (sorted) {
			numCount = _.sortBy(numCount, dc => {
				const key = _.keys(dc)[0];
				return dc[key];
			});
		}

		return numCount;
	}

	convertDigitToLabel(num) {
		switch (num) {
			case 1:
				return 'One';
			case 2:
				return 'Two';
			case 3:
				return 'Three';
			case 4:
				return 'Four';
			case 5:
				return 'Five';
			case 6:
				return 'Six';
			case 7:
				return 'Seven';
			case 8:
				return 'Eight';
			case 9:
				return 'Nine';
			default:
				return 'Zero';
		}
	}

	renderDigitCounts(ic, i) {
		let label = _.keys(ic)[0];

		return [<span key={0}>{`${label}:`}</span>, <span key={1}>{`${ic[label]} times`}</span>];
	}

	render() {
		const { fib, sorted } = this.props;

		let digitCount = this.generateDigitCounts(fib, sorted);

		return (
			<div className="digit-count">
				<label className="digit-count__title">
					Digit Count
					<div>&nbsp;{sorted && '(sorted)'}</div>
				</label>
				<div className="digit-count__data">{digitCount.map(this.renderDigitCounts)}</div>
			</div>
		);
	}
}

export default DigitCount;
