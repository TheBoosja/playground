let shouldRotate = false;
let done = false;

// Data setup
let prevs = [175]; // Sequence
let count = 1; // Iterations
let scale = 5;
let skew = 0;

const colorScale = 'color'; // ['white', 'color', 'greyscale']
const colorMax = 200; // Default: 200
const mode = 1; // 1: 'normal', 2: 'mirror', 3: 'land', 4: 'sky', 5: 'quad',

function setup() {
	// createCanvas(windowWidth - 4, windowHeight - 4);
	createCanvas(1920, 1080);
	angleMode(DEGREES);
	background(0);

	if (colorScale === 'color') {
		colorMode(HSB, colorMax);
	} else {
		colorMode(RGB, colorMax);
	}
}

function draw() {
	switch (mode) {
		case 2:
		case 5:
			translate(width / 2, height / 2);
			break;
		case 3:
			translate(0, height - 50);
			break;
		case 4:
			translate(0, 50);
			break;
		default:
			translate(0, height / 2);
			break;
	}

	switch (colorScale) {
		case 'greyscale':
			stroke(count % colorMax);
			break;
		case 'color':
			stroke(count % colorMax, colorMax, colorMax);
			break;
		default:
			stroke(colorMax);
			break;
	}

	noFill();
	// frameRate(10);

	const last = prevs[prevs.length - 1];

	// if (count < 500) {
	if (!done) {
		// Find start
		const moveBack = isBack(last);
		let start = (moveBack ? last - count / 2 : last + count / 2) * scale;

		if (shouldRotate) {
			if (mode === 1 || mode === 2 || mode === 4 || mode === 5) {
				push();
				rotate(180);
				left(start);
				pop();
			}

			if (mode === 2 || mode === 5) {
				push();
				rotate(180);
				right(start);
				pop();
			}

			if (mode === 5) {
				push();
				translate(0, -height / 2 + 50);
				rotate(180);
				right(start);
				left(start);
				pop();
			}
			shouldRotate = false;
		} else {
			if (mode === 1 || mode === 2 || mode === 3 || mode === 5) {
				right(start);
			}

			if (mode === 2 || mode === 5) {
				left(start);
			}

			if (mode === 5) {
				push();
				translate(0, height / 2 - 50);
				right(start);
				left(start);
				pop();
			}
			shouldRotate = true;
		}

		// if (count < 25) {
		// 	push();
		// 	stroke(map(count, 0, 25, 0, colorMax), colorMax, colorMax);
		// 	translate(0, -height / 2 + 50);
		// 	ellipse(0, 0, count * scale * 2);
		// 	pop();
		// }

		count++;
	} else {
		console.log('iterations', count);
		// noLoop();
	}
}

function right(start) {
	arc(start, 0, count * scale, count * scale, 180, 360);
}
function left(start) {
	arc(-start, 0, count * scale, count * scale, 180, 360);
}

function mousePressed() {
	done = !done;
	console.log('done');
}

function isBack(last) {
	let move = last - count;
	const moveBack = !prevs.includes(move) && move > 0;

	if (!moveBack || move < 0) {
		move = last + count;
	}

	prevs.push(move);

	return moveBack;
}
