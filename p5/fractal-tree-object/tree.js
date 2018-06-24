class Tree {
	constructor(props) {
		this.begin = begin;
		this.end = end;
	}

	show() {
		const { begin, end } = this;

		stroke(255);
		line(begin.x, begin.y, end.x, end.y);
		if (end.y > 3) {
		}
	}
}
