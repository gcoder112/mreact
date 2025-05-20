class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

let position = new Vector(100, 100);
let velocity = new Vector(1, 3.3);
const r = 48;

function setup() {
  createCanvas(640, 320);
}

function draw() {
  background(255);
  strokeWeight(5);
  fill(255);
  rect(0,0, width, height);
  position.x += velocity.x;
  position.y += velocity.y;

  if (position.x > width - r/2 || position.x < r/2) {
    velocity.x *= -1;
  }

  if (position.y > height - r/2 || position.y < r/2) {
    velocity.y *= -1;
  }

  stroke(0);
  strokeWeight(1);
  circle(position.x, position.y, r);
}
