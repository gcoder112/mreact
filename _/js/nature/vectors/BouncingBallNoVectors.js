let x = 100;
let y = 100;
let xspeed = 2.5;
let yspeed = 2;
let r, g, b;

function setup() {
  createCanvas(640, 240);
  pickColor();
}

function draw() {
  background(255);
  stroke(r, g, b);
  strokeWeight(5);
  fill(255);
  rect(0,0, width, height);
  x = x + xspeed;
  y = y + yspeed;

  if (x > width-24 || x < 24) {
    xspeed = xspeed * -1;
    pickColor();
  }

  if (y > height-24 || y < 24) {
    yspeed = yspeed * -1;
    pickColor();
  }

  stroke(0);
  strokeWeight(1);
  fill(r, g, b);
  circle(x, y, 48);
}

function pickColor() {
  r = round(255*random())
  g = round(255*random())
  b = round(255*random())
}