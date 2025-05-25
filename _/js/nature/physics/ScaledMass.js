class Mover {
  constructor(x, y, mass) {
    this.mass = mass;
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
    circle(this.position.x, this.position.y, this.mass * 16);
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
  let gravityA = p5.Vector.mult(gravity, moverA.mass);
  moverA.applyForce(gravityA);
  let gravityB = p5.Vector.mult(gravity, moverB.mass);
  moverB.applyForce(gravityB);
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
