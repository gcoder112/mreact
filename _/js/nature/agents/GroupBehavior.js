class Path {
  constructor() {
    this.radius = 20;
    this.points = [];
  }

  addPoint(x, y) {
    let pathPoint = createVector(x, y);
    this.points.push(pathPoint);
  }

  show() {
    stroke(200);
    strokeWeight(this.radius * 2);
    noFill();
    beginShape();
    for (let pathPoint of this.points) {
      vertex(pathPoint.x, pathPoint.y);
    }
    endShape();
    stroke(0);
    strokeWeight(1);
    beginShape();
    for (let pathPoint of this.points) {
      vertex(pathPoint.x, pathPoint.y);
    }
    endShape();
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
    let normalPoint;
    future.setMag(25);
    future.add(this.position);

    for (let i = 0; i < path.points.length - 1; i++) {
      let a = path.points[i];
      let b = path.points[i + 1];
      normalPoint = this.getNormalPoint(future, a, b);
      if (normalPoint.x < a.x || normalPoint.x > b.x) {
        normalPoint = b.copy();
      }
      b = p5.Vector.sub(a, b);
      b.setMag(25);
      let target = p5.Vector.add(normalPoint, b);

      let distance = p5.Vector.dist(normalPoint, future);
      if (distance > path.radius) {
        this.seek(target);
      }
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
let vehicles = [];
let path;

function setup() {
  createCanvas(640, 640);
  path = new Path();
  path.addPoint(50, 50);
  path.addPoint(100, 100);
  path.addPoint(120, 160);
  path.addPoint(300, 30);
  path.addPoint(500, 300);
  path.addPoint(600, 600);

  for (let i = 0; i < 100; i++) {
    vehicles.push(new Vehicle(random(width), random(height)));
  }
}

function mouseClicked() {
  for (let vehicle of vehicles) {
    vehicle.position = createVector(random(width), random(height));
    vehicle.velocity = createVector(0, 0);
    vehicle.acceleration = createVector(0, 0);
  }
}

function draw() {
  background(255);
  path.show();
  for (let vehicle of vehicles) {
    vehicle.follow(path);
    vehicle.update();
    vehicle.show();
  }
}
