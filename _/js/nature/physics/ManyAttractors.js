class Attractor {
  constructor() {
    this.position = createVector(width / 2, height / 2);
    this.mass = 20;
  }

  attract(mover) {
    let force = p5.Vector.sub(this.position, mover.position);
    let distance = force.mag();
    distance = constrain(distance, 5, 25);

    let strength = (this.mass * mover.mass) / (distance*distance);
    force.setMag(strength);
    return force;
  }

  show() {
    stroke(0);
    fill(175, 200);
    circle(this.position.x, this.position.y, this.mass * 2);
  }
}

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
    fill(175, 175, 128);
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

let movers = [];
let attractor;

function setup() {
  createCanvas(640, 360);
  for (let i = 0; i < 10; i++) {
    movers[i] = new Mover(random(width), random(height), random(0.5, 3));
  }
  attractor = new Attractor();
}

function draw() {
  background(255);
  attractor.show();
  for (let i = 0; i < movers.length; i++) {
    let force = attractor.attract(movers[i]);

    movers[i].applyForce(force);
    movers[i].update();
    movers[i].show();
  }
}
