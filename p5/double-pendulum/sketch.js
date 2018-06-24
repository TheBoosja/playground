let begin = false;
let counter = 0;

let angle1 = 0;
let angle2 = 0;
let angle1_vel = 0;
let angle2_vel = 0;
let g = 1;

let prevX2 = -1;
let prevY2 = -1;
let cx, cy;

let buffer;
let penLengthA, penLengthB, massA, massB;
let beginBtn, resetBtn;

const bgClr = 235;
let framerate;

function setup() {
	createCanvas(900, 800);
	angle1 = PI / 2;
	angle2 = PI / 2;
	cx = width / 2;
	cy = height / 2;

	buffer = createGraphics(width, height);
	buffer.background(bgClr);
	buffer.translate(cx, cy);
	buffer.colorMode(HSB, 100);

	penLengthA = createSlider(10, 200, 100, 0.1);
	penLengthB = createSlider(10, 200, 100, 0.1);
	massA = createSlider(10, 100, 10, 1);
	massB = createSlider(10, 100, 10, 1);

	beginBtn = createButton('Start');
	beginBtn.mousePressed(beginSimulation);
	resetBtn = createButton('Reset');
	resetBtn.mousePressed(resetSimulation);

	framerate = createP('0');
	framerate.position(45, 25);
}

function draw() {
	// Initialization
	background(bgClr);
	imageMode(CORNER);
	image(buffer, 0, 0, width, height);
	translate(cx, cy);
	stroke(0);
	strokeWeight(2);

	if (frameCount % 10 === 0) {
		framerate.html(Math.trunc(frameRate()) + ' fps');
	}

	// Pendulums and balls
	let pen1 = penLengthA.value();
	let pen2 = penLengthB.value();
	let ball1 = massA.value();
	let ball2 = massB.value();

	// Formula
	const angle1_acc = getAngle1_acc(pen1, pen2, ball1, ball2);
	const angle2_acc = getAngle2_acc(pen1, pen2, ball1, ball2);

	// Points
	let x1 = pen1 * sin(angle1);
	let y1 = pen1 * cos(angle1);

	x2 = x1 + pen2 * sin(angle2);
	y2 = y1 + pen2 * cos(angle2);

	// Draw
	line(0, 0, x1, y1);
	fill(0);
	ellipse(x1, y1, ball1, ball1);

	line(x1, y1, x2, y2);
	fill(0);
	ellipse(x2, y2, ball2, ball2);

	// Simulation
	if (begin) {
		angle1_vel += angle1_acc;
		angle2_vel += angle2_acc;
		angle1 += angle1_vel;
		angle2 += angle2_vel;

		// angle1_vel *= 0.9999;
		// angle2_vel *= 0.9999;

		// Draw path
		const color = map(angle2_vel, -0.2, 0.2, 0, 100);
		buffer.stroke(color, 100, 100);
		buffer.strokeWeight(1);
		if (counter > 1) {
			buffer.line(prevX2, prevY2, x2, y2);
		}

		prevX2 = x2;
		prevY2 = y2;

		counter++;
	}
}

function beginSimulation() {
	if (!begin) {
		begin = true;
		beginBtn.html('Stop');
	} else {
		begin = false;
		beginBtn.html('Start');
	}
}

function resetSimulation() {
	angle1 = PI / 2;
	angle2 = PI / 2;
	angle1_vel = 0;
	angle2_vel = 0;

	buffer.clear();
	buffer.background(bgClr);
	background(bgClr);
	counter = 0;

	begin = false;
	beginBtn.html('Start');
}

function getAngle1_acc(pen1, pen2, mass1, mass2) {
	const p1 = -g * (2 * mass1 + mass2) * sin(angle1);
	const p2 = -mass2 * g * sin(angle1 - 2 * angle2);
	const p3 = -2 * sin(angle1 - angle2) * mass2;
	const p4 = angle2_vel * angle2_vel * pen2;
	const p5 = angle1_vel * angle1_vel * pen1 * cos(angle1 - angle2);

	const den = pen1 * (2 * mass1 + mass2 - mass2 * cos(2 * angle1 - 2 * angle2));

	return (p1 + p2 + p3 * (p4 + p5)) / den;
}

function getAngle2_acc(pen1, pen2, mass1, mass2) {
	const p1 = 2 * sin(angle1 - angle2);
	const p2 = angle1_vel * angle1_vel * pen1 * (mass1 + mass2);
	const p3 = g * (mass1 + mass2) * cos(angle1);
	const p4 = angle2_vel * angle2_vel * pen2 * mass2 * cos(angle1 - angle2);

	const den = pen2 * (2 * mass1 + mass2 - mass2 * cos(2 * angle1 - 2 * angle2));

	return p1 * (p2 + p3 + p4) / den;
}
