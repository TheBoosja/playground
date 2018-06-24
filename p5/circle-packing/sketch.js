let circles = [];
let img;
let spots = [];

function preload() {
	img = loadImage('assets/logo.png');
}

function setup() {
	createCanvas(500, 169);
	// circles.push(new Circle(200, 200));

	const density = displayDensity();
	pixelDensity(1);

	img.loadPixels();
	for (let x = 0; x < img.width; x++) {
		for (let y = 0; y < img.height; y++) {
			let index = x + y * img.width;
			let color = img.pixels[index * 4];
			let b = brightness([color]);
			if (b > 1) {
				spots.push(createVector(x, y));
			}
		}
	}
	// console.log(img.width, img.height, 'pixels', img.pixels.length, 'spots', spots.length, density);
}

function draw() {
	background(0);

	const total = 10;
	let count = 0;
	let attempts = 0;

	while (count < total) {
		const c = newCircle();
		if (c) {
			circles.push(c);
			count++;
		}
		attempts++;
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
	const r = int(random(0, spots.length));
	const spot = spots[r];
	const x = spot.x;
	const y = spot.y;

	let valid = circles.every(c => {
		const d = dist(x, y, c.x, c.y);
		return d > c.r + 2;
	});

	if (valid) {
		return new Circle(x, y);
	} else {
		return null;
	}
}
