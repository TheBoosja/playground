class Circle {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.r = 1;

		this.growing = true;
	}

	show() {
		stroke(255);
		strokeWeight(2);
		noFill();
		ellipse(this.x, this.y, this.r * 2, this.r * 2);
	}

	grow() {
		if (this.growing) {
			this.r += 1;
		}
	}

	edges() {
		const { x, y, r } = this;
		return x + r > width || x - r < 0 || y + r > height || y - r < 0;
	}
}
