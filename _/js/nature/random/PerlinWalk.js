// Graphical Random Walk Example using p5.js

class Walker {
  constructor() {
    this.tx = 0;
    this.ty = 10000;
  }

  show() {
    stroke(0);
    point(this.x, this.y);
  }

  step() {
    this.x = map(noise(this.tx), 0, 1, 0, width);
    this.y = map(noise(this.ty), 0, 1, 0, height);
    this.tx += 0.01;
    this.ty += 0.01;

    // Keep walker within canvas
    this.x = constrain(this.x, 0, width - 1);
    this.y = constrain(this.y, 0, height - 1);
  }

}

let walker;

function setup() {
  createCanvas(640, 640);
  walker = new Walker();
  background(255);
}

function draw() {
  walker.step();
  walker.show();
}
