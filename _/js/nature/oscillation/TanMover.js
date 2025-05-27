class Mover {
  constructor() {
    this.position = createVector();
    this.velocity = createVector(0.01, 0.02);
    this.acceleration = createVector(0.5, 0.5);
    this.mass = 1.0;

    this.angle = 0.1;
    this.angleVelocity = 0.1;
    this.angleAcceleration = 0.2;
  }

  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.angleAcceleration = this.acceleration.x / 10.0;

    this.angleVelocity += this.angleAcceleration;

    this.angleVelocity = constrain(this.angleVelocity, -0.1, 0.1);
    this.angle += this.angleVelocity;
    this.acceleration.mult(0);
  }

  show() {
    let angle = atan2(this.velocity.y, this.velocity.x);

    push();
    rectMode(CENTER);
    translate(this.position.x, this.position.y);
    rotate(angle);

    rect(0, 0, 30, 10);
    pop();
  }

}

// ====================================================

let mover;

function setup() {
  createCanvas(640, 640);
  mover = new Mover(0, 0, 2);
}

function draw() {
  background(255);
  mover.update();
  mover.show();
}
