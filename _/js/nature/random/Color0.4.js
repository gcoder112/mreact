function setup() {
  createCanvas(640, 640);
  background(255);
}

function draw() {
  let x = randomGaussian(320, 60);
  let y = randomGaussian(320, 60);
  let r = Math.round(random()*255);
  let g = Math.round(random()*255);
  let b = Math.round(random()*255);

  noStroke();
  fill(r, g, b);
  circle(x, y, 16);
}