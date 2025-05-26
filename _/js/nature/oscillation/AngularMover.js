class Mover {
  constructor() {
    this.position = createVector();
    this.velocity = createVector();
    this.acceleration = createVector();
    this.mass = 1.0;
    this.radius = this.mass * 16;

    this.angle = 0;
    this.angleVelocity = 0;
    this.angleAcceleration = 0;
  }

  applyForce(force) {
    let f = p5.Vector.div(force, this.mass);
    this.acceleration.add(f);
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
    stroke(0);
    fill(175, 200);
    push();

    translate(this.position.x, this.position.y);
    rotate(this.angle);
    circle(0, 0, this.radius * 2);
    line(0, 0, this.radius, 0);
    pop();
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
}

// ====================================================

let moverA, moverB;

function setup() {
  createCanvas(640, 640);
  moverA = new Mover(100, 30, 10);
  moverB = new Mover(400, 30, 2);
}

function draw() {
  background(255);

  let gravity = createVector(0, 0.1);
  moverA.applyForce(gravity);
  moverB.applyForce(gravity);
  if (mouseIsPressed) {
    let wind = createVector(0.1, 0);
    moverA.applyForce(wind);
    moverA.applyForce(wind);
    moverB.applyForce(wind);
    moverB.applyForce(wind);
  }

  moverA.checkEdges();
  moverA.update();
  moverA.show();

  moverB.checkEdges();
  moverB.update();
  moverB.show();
}
