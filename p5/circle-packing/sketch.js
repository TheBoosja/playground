let circles = [];
let attempts = 0;

function setup() {
	createCanvas(640, 360);
	circles.push(new Circle(200, 200));
}

function draw() {
	background(0);

	const total = 10;
	let count = 0;

	while (count < total) {
		const c = newCircle();
		if (c) {
			circles.push(c);
			count++;
		}
		attempts++;
		console.assert(attempts % 50, attempts);
		if (attempts > 1000) {
			noLoop();
			print('Finished');
			break;
		}
	}

	circles.forEach(c => {
		if (c.growing) {
			if (c.edges()) {
				c.growing = false;
			} else {
				for (let i = 0; i < circles.length; i++) {
					const other = circles[i];

					if (c !== other) {
						const d = dist(c.x, c.y, other.x, other.y);
						if (d - 1 < c.r + other.r) {
							c.growing = false;
							break;
						}
					}
				}
			}
		}
		c.show();
		c.grow();
	});
}

function newCircle() {
	const x = random(width);
	const y = random(height);

	let valid = circles.every(c => {
		const d = dist(x, y, c.x, c.y);
		return d > c.r;
	});

	if (valid) {
		return new Circle(x, y);
	} else {
		return null;
	}
}
