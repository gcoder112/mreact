let r;
let theta;

function setup() {
  createCanvas(640, 240);
  r = height * 0.45;
  theta = 0;
}

function draw() {
  background(255);
  translate(width / 2, height / 2);

  let x = r * cos(theta);
  let y = r * sin(theta);

  fill(127);
  stroke(0);
  line(0, 0, x, y);
  circle(x, y, 48);
  theta += 0.02;
}
