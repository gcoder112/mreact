// Graphical Random Walk Example using p5.js

class Walker {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.x2 = this.x
    this.y2 = this.y
  }

  show() {
    let r = Math.round(random()*255)
    let g = Math.round(random()*255)
    let b = Math.round(random()*255)

    stroke(r, g, b);
    line(this.x, this.y, this.x2, this.y2);
  }

  step() {
    this.x2 = this.x
    this.y2 = this.y

    let r = random(1)
    if (r < 0.01) {
      this.x += random(-100, 100);
      this.y += random(-100, 100);
    } else {
      this.x += random(-5, 5);
      this.y += random(-5, 5);
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
