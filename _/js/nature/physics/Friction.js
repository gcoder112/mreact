class Mover {
  constructor(x, y, mass) {
    this.mass = mass;
    this.radius = mass*16;
    this.position = createVector(x, y);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
  }

  applyForce(force) {
    let f = p5.Vector.div(force, this.mass);
    this.acceleration.add(f);
  }

  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);  
  }

  show() {
    stroke(0);
    fill(175);
    circle(this.position.x, this.position.y, this.radius);
  }

  checkEdges() {
    if (this.position.x > width) {
      this.position.x = width;
      this.velocity.x *= -1;
    } else if (this.position.x < 0) {
      this.velocity.x *= -1;
      this.position.x = 0;
    }

    if (this.position.y > height) {
      this.position.y = height;
      this.velocity.y *= -1;
    } else if (this.position.y < 0) {
      this.velocity.y *= -1;
      this.position.y = 0;
    }
  }

  bounceEdges() {
    let bounce = -0.9;

    if (this.position.y > height - this.radius) {
      this.position.y = height - this.radius;
      this.velocity.y *= bounce;
    }
  }

  contactEdge() {
    return (this.position.y > height - this.radius - 1);
  }
}

// ====================================================

let mover;

function setup() {
  createCanvas(640, 640);
  mover = new Mover(320, 120, 5);
}

function draw() {
  background(255);

  let gravity = createVector(0, 0.7);
  mover.applyForce(gravity);
  if (mouseIsPressed) {
    let wind = createVector(0.5, 0);
    mover.applyForce(wind);
  }

  if (mover.contactEdge()) {
    let c = 0.1;
    let friction = mover.velocity.copy();
    friction.mult(-1);
    friction.setMag(c);
    mover.applyForce(friction);
  }

  mover.bounceEdges();
  mover.update();
  mover.show();
}
