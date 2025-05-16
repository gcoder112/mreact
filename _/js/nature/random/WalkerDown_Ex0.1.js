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
    const choice = floor(random(6));
    if (choice === 0 || choice === 1) { // 2/6 chance to move right
      this.x++;
    } else if (choice === 2) { // 1/6 change to move left
      this.x--;
    } else if (choice === 3) { // 1/6 chance to move up
      this.y++;
    } else { // 2/6 chance to move down
      this.y--;
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
