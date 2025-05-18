function setup() {
  createCanvas(640, 640);
  background(255);
}

let t = 0;

function draw() {
  let n = noise(t);
  let x = map(n, 0, 1, 0, width);

  ellipse(x, 180, 16, 16);
  t += 0.01;
}