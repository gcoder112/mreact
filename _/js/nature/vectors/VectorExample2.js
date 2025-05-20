class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  add(v) {
    this.x = this.x + v.x;
    this.y = this.y + v.y;
  }
}

let position;
let velocity;
const r = 48;

function setup() {
  createCanvas(640, 320);
  position = createVector(100, 100);
  velocity = createVector(2.5, 2);
}

function draw() {
  background(255);
  strokeWeight(5);
  fill(255);
  rect(0,0, width, height);

  position.add(velocity);

  if (position.x > width - r/2 || position.x < r/2) {
    velocity.x *= -1;
  }

  if (position.y > height - r/2 || position.y < r/2) {
    velocity.y *= -1;
  }

  stroke(0);
  fill(127);
  strokeWeight(1);
  circle(position.x, position.y, r);
}

function createVector(x, y) {
  return new Vector(x, y);
}

