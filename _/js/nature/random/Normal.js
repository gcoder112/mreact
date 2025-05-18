function setup() {
  let h = random(200, 300);
  print(h);

  createCanvas(640, 240);
  background(255);
}

function draw() {
  let x = randomGaussian(320, 60);
  let y = 60*randomGaussian() + 320

  noStroke();
  fill(0, 10);
  circle(x, 120, 16);
  circle(y, 60, 16);
}