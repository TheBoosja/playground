let tree = [];
let slider;
let leaves = [];
let count = 0;

function setup() {
	createCanvas(400, 400);
	slider = createSlider(0, TAU, PI / 4, 0.01);

	let a = createVector(width / 2, height);
	let b = createVector(width / 2, height - 100);
	let root = new Branch(a, b);

	tree.push(root);

	// for (let i = 0; i < 9; i++) {
	// 	tree
	// 		.slice()
	// 		.reverse()
	// 		.forEach(t => {
	// 			if (!t.finished) {
	// 				tree.push(t.branch(slider.value()));
	// 				tree.push(t.branch(-slider.value()));
	// 			}
	// 		});
	// }
}

function draw() {
	background(51);

	tree.forEach(t => t.show());
	leaves.forEach(l => {
		fill(255, 0, 100, 100);
		noStroke();
		ellipse(l.x, l.y, 8, 8);
		l.y += random(0, 2);
	});
}

function mousePressed() {
	tree
		.slice()
		.reverse()
		.forEach(t => {
			if (!t.finished) {
				// tree.push(t.branch(PI / 4));
				// tree.push(t.branch(-PI / 4));
				tree.push(t.branch(slider.value()));
				tree.push(t.branch(-slider.value()));
			}
		});
	count++;

	if (count === 6) {
		tree.forEach(t => {
			if (!t.finished) {
				let leaf = t.end.copy();
				leaves.push(leaf);
			}
		});
	}
}
