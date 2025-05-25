let mover;

function setup() {
  createCanvas(640, 640);
  mover = new Mover();
}

function draw() {
  background(255);

  let gravity = createVector(0, 0.001);
  mover.applyForce(gravity);
  if (mouseIsPressed) {
    let wind = createVector(0.01, 0);
    mover.applyForce(wind);
  }

  mover.update();
  mover.checkEdges();
  mover.show();
}

class Mover {
  constructor() {
    this.position = createVector(random(width), random(height));
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
    this.mass = 10;
  }

  applyForce(force) {
    let f = force.copy();

    f.div(this.mass);
    this.acceleration.add(f);
  }

  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
  }

  show() {
    stroke(0);
    fill(64);
    rect(0,0,width,height);
    strokeWeight(2);
    fill(127);
    circle(this.position.x, this.position.y, 48);
  }

  checkEdges() {
    if (this.position.x > width) {
      this.position.x = 0;
    } else if (this.position.x < 0) {
      this.position.x = width;
    }

    if (this.position.y > height) {
      this.position.y = 0;
    } else if (this.position.y < 0) {
      this.position.y = height;
    }
  }
}