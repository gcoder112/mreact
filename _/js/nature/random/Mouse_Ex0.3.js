// Graphical Random Walk Example using p5.js

class Walker {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
  }

  show() {
    stroke(0);
    point(this.x, this.y);
  }

  step() {
    const r = random(1);

    if (r < 0.5) {
      // Make a random choice 50% of the time
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
    } else {
      // Follow the mouse position 50% of the time
      this.x += this.x < mouseX ? 1: -1;
      this.y += this.y < mouseY ? 1: -1;
    }
    // Keep walker within canvas
    this.x = constrain(this.x, 0, width - 1);
    this.y = constrain(this.y, 0, height - 1);
  }

}

let walker;

function setup() {
  createCanvas(640, 240);
  walker = new Walker();
  background(255);
}

function draw() {
  walker.step();
  walker.show();
}
