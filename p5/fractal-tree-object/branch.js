class Branch {
	constructor(begin, end) {
		this.begin = begin;
		this.end = end;
		this.finished = false;
	}

	jitter() {
		const { begin, end } = this;
		end.x += random(-1, 1);
		end.y += random(-1, 1);
	}

	show() {
		const { begin, end } = this;
		stroke(255);
		line(begin.x, begin.y, end.x, end.y);
		// this.jitter();
	}

	branch(angle) {
		const { begin, end } = this;

		const dir = p5.Vector.sub(end, begin);
		dir.rotate(angle);
		dir.mult(0.67);
		const newEnd = p5.Vector.add(end, dir);

		this.finished = true;
		if (newEnd.y > 4) {
			return new Branch(end, newEnd);
		}
	}
}
