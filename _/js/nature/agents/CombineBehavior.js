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

  applyBehaviors(vehicles) {
    let separate = this.separate(vehicles);
    let seek = this.seek(createVector(mouseX, mouseY));
    separate.mult(1.5);
    seek.mult(0.5);

    this.applyForce(separate);
    this.applyForce(seek);
  }

  applyForce(force) {
    this.acceleration.add(force);
  }

  seek(target) {
    let desired = p5.Vector.sub(target, this.position);
    desired.mult(0.05);
    desired.setMag(this.maxspeed);
    let steer = p5.Vector.sub(desired, this.velocity);
    steer.limit(this.maxforce);
    return steer;
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

  separate(vehicles) {
    let desiredSeparation = this.r * 2;

    let sum = createVector();
    let count = 0;
    for (let other of vehicles) {
      let d = p5.Vector.dist(this.position, other.position);
      if (this !== other && d < desiredSeparation) {
        let diff = p5.Vector.sub(this.position, other.position);
        diff.setMag(1 / d);
        sum.add(diff);
        count++;
      }
    }

    if (count > 0) {
      sum.setMag(this.maxspeed);
      let steer = p5.Vector.sub(sum, this.velocity);
      steer.limit(this.maxforce);
      return steer;
    } else {
      return createVector(0, 0);
    }
  }
}

// =====
let vehicles = [];
let path;

function setup() {
  createCanvas(640, 640);

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
  target = createVector(mouseX, mouseY);
  for (let vehicle of vehicles) {
    vehicle.applyBehaviors(vehicles);
    vehicle.update();
    vehicle.show();
  }
}
