// Graphical Random Walk Example using p5.js

class Walker {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
  }

  step() {
    const choice = floor(random(4));
    if (choice === 0) {
      this.x++;
    } else if (choice === 1) {
      this.x--;
    } else if (choice === 2) {
      this.y++;
    } else {
      this.y--;
    }
    // Keep walker within canvas
    this.x = constrain(this.x, 0, width - 1);
    this.y = constrain(this.y, 0, height - 1);
  }

  show() {
    stroke(0, 50);
    point(this.x, this.y);
  }
}

let walker;

function setup() {
  createCanvas(600, 400);
  background(255);
  walker = new Walker();
}

function draw() {
  walker.step();
  walker.show();
}
