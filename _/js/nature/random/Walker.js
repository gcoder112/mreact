class Walker {
	constructor() {
		this.x = width / 2;
		this.y = height /2;
	}

	show() {
		stroke(0);
		point(this.x, this.y)
	}

	step() {
		let choice = floor(random(4));

		if (choice === 0) {
			this.x++;
		} else if (choice === 1) {
			this.x--;
		} else if (choice === 1) {
			this.y++;
		} else {
			this.y--;
		}
	}
}

let walker;

let randomCounts = [];

let total = 20;

function setup() {
	createCanvas(640, 240);
	walker = Walker();
	for (let i = 0; i < total; i++) {
		randomCounts[i] = 0;
	}
}

function draw() {
	background(255);
	let index = floor(random(randomCounts.length));
	randomCounts[index]++;
	stroke(0);
	fill(127);
	let w = width / randomCounts.length;

	for (let x = 0; x < randomCounts; x++) {
		rect(x * w, height --)
	}
	walker.step();
	walker.show();
}

