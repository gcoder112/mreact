// Graphical Random Walk Example using p5.js

class Walker {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.x2 = this.x
    this.y2 = this.y
    this.length = 0
  }

  show() {
    stroke(0);
    let r = Math.round(random()*255)
    let g = Math.round(random()*255)
    let b = Math.round(random()*255)

    fill(r, g, b)
    line(this.x, this.y, this.x2, this.y2);
    circle(this.x, this.y, this.length)
  }

  step() {
    const length = randomGaussian(15, 5)
    const choice = floor(random(4));
    this.x2 = this.x
    this.y2 = this.y
    this.length = length
    if (choice === 0) {
      this.x += length;
    } else if (choice === 1) {
      this.x -= length;
    } else if (choice === 2) {
      this.y += length;
    } else {
      this.y -= length;
    }
    // Keep walker within canvas
    this.x = constrain(this.x, 0, width - 1);
    this.y = constrain(this.y, 0, height - 1);
  }

}

let walker;

function setup() {
  createCanvas(1024, 800);
  walker = new Walker();
  background(255);
}

function draw() {
  walker.step();
  walker.show();
}
