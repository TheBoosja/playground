function setup() {
	createCanvas(400, 400);
	angleMode(DEGREES);
}

function draw() {
	background(0);
	translate(200, 200);
	rotate(-90);
	noFill();

	let hr = hour();
	let min = minute();
	let sec = second();

	strokeWeight(8);
	stroke(255, 100, 150, 100);
	let secondAngle = map(sec, 0, 60, 0, 360);
	arc(0, 0, 300, 300, 0, secondAngle);

	stroke(150, 100, 255, 100);
	let minuteAngle = map(min, 0, 60, 0, 360);
	arc(0, 0, 280, 280, 0, minuteAngle);

	stroke(150, 255, 100, 100);
	let hourAngle = map(hr, 0, 12, 0, 360);
	arc(0, 0, 260, 260, 0, hourAngle);

	const secRoot = 20;
	const minRoot = 10;
	const hrRoot = 0;

	push();
	rotate(secondAngle);
	stroke(255, 100, 150, 50);
	line(secRoot, 0, secRoot + 30 * 3, 0);
	stroke(255, 100, 150);
	for (let i = 0; i < 4; i++) {
		point(secRoot + 30 * i, 0);
	}
	pop();

	push();
	rotate(minuteAngle);
	stroke(150, 100, 255, 50);
	line(minRoot, 0, minRoot + 30 * 3, 0);
	stroke(150, 100, 255);
	for (let i = 0; i < 4; i++) {
		point(minRoot + 30 * i, 0);
	}
	pop();

	push();
	rotate(hourAngle);
	stroke(150, 255, 100, 50);
	line(hrRoot, 0, hrRoot + 30 * 3, 0);
	stroke(150, 255, 100);
	for (let i = 0; i < 4; i++) {
		point(hrRoot + 30 * i, 0);
	}
	pop();

	// fill(255);
	// noStroke();
	// text(`${hr}:${min}:${sec}`, 10, 200);
}
