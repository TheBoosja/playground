let angle = 0;
let isUpwards = true;
let slider;

function setup() {
	createCanvas(400, 400);
	slider = createSlider(0, PI, PI / 8, 0.01);
}

function draw() {
	background(51);

	angle = slider.value();
	// console.log('slider', angle);

	// if (isUpwards) {
	// 	angle += 0.02;
	// } else {
	// 	angle -= 0.02;
	// }

	// if (angle >= TAU) {
	// 	isUpwards = false;
	// } else if (angle <= 0) {
	// 	isUpwards = true;
	// }

	let len = 100;
	stroke(255);
	translate(200, height);
	branch(100);
}

function branch(len) {
	line(0, 0, 0, -len);
	translate(0, -len);
	if (len > 4) {
		push();
		rotate(angle);
		branch(len * 0.67);
		pop();
		push();
		rotate(-angle);
		branch(len * 0.67);
		pop();
	}
}
