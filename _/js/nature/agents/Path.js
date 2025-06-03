class Path {
  constructor() {
    this.radius = 20;
    this.start = createVector(0, height/3);
    this.end = createVector(width, (2 * height)/3);
  }

  show() {
    strokeWeight(this.radius * 2);
    stroke(0, 100);
    line(this.start.x, this.start.y, this.end.x, this.end.y);
    strokeWeight(1);
    stroke(0);
    line(this.start.x, this.start.y, this.end.x, this.end.y);
  }
}

// =====

class Vehicle {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
    this.r = 6.0;
    this.maxspeed = 8;
    this.maxforce = 0.2;
  }

  update() {
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxspeed);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  }

  applyForce(force) {
    this.acceleration.add(force);
  }

  follow(path) {
    let future = this.velocity.copy();
    future.setMag(25);
    future.add(this.position);

    let normalPoint = this.getNormalPoint(future, path.start, path.end);
    let b = p5.Vector.sub(path.end, path.start);
    b.setMag(25);
    let target = p5.Vector.add(normalPoint, b);

    let distance = p5.Vector.dist(normalPoint, future);
    if (distance > path.radius) {
      this.seek(target);
    }
  }

  getNormalPoint(position, a, b) {
    let vectorA = p5.Vector.sub(position, a);
    let vectorB = p5.Vector.sub(b, a);
    vectorB.normalize();
    vectorB.mult(vectorA.dot(vectorB));
    let normalPoint = p5.Vector.add(a, vectorB);

    return normalPoint;
  }

  seek(target) {
    let desired = p5.Vector.sub(target, this.position);
    desired.mult(0.05);
    desired.setMag(this.maxspeed);
    let steer = p5.Vector.sub(desired, this.velocity);
    steer.limit(this.maxforce);
    this.applyForce(steer);
  }

  show() {
    let angle = this.velocity.heading();
    fill(127);
    stroke(0);
    push();
    translate(this.position.x, this.position.y);
    rotate(angle);
    beginShape();
    vertex(this.r * 2, 0);
    vertex(-this.r * 2, -this.r);
    vertex(-this.r * 2, this.r);
    endShape(CLOSE);
    pop();
  }
}

// =====
let vehicle;
let path;

function setup() {
  createCanvas(640, 640);
  vehicle = new Vehicle(width/4, height/6);
  path = new Path();
}

function draw() {
  background(255);
  vehicle.update();
  let target = createVector(mouseX, mouseY);

  vehicle.follow(path);
  vehicle.show();
  path.show();
}
