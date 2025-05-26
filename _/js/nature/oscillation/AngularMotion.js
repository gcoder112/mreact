let angle = 0;
let angleVelocity = 0;
let angleAcceleration = 0.0001;

function setup() {
  createCanvas(640, 640);
}

function draw() {
  background(255);
  translate(width / 2, height / 2);
  rotate(angle);

  stroke(0);
  fill(127);
  line(-60, 0, 60, 0);
  circle(60, 0, 16);
  circle(-60, 0, 16);
  angleVelocity += angleAcceleration;
  
  angle += angleVelocity;
}
