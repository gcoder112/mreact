class Boid {
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

  run(boids) {
    let separation = this.separate(boids);
    let alignment = this.align(boids);
    let cohesion = this.cohere(boids);
    separation.mult(1.5);
    alignment.mult(1.0);
    cohesion.mult(1.0);
    this.applyForce(separation);
    this.applyForce(alignment);
    this.applyForce(cohesion);
    this.update();
    this.show();
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

  separate(boids) {
    let desiredSeparation = this.r * 2;

    let sum = createVector();
    let count = 0;
    for (let other of boids) {
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

  align(boids) {
    let neighborDistance = 50;
    let sum = createVector(0, 0);
    let count = 0;
    for (let other of boids) {
      let d = p5.Vector.dist(this.position, other.position);
      if ((this !== other) && (d < neighborDistance)) {
        sum.add(other.velocity);
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

  cohere(boids) {
    let neighborDistance = 50;
    let sum = createVector(0, 0);
    let count = 0;
    for (let other of boids) {
      let d = p5.Vector.dist(this.position, other.position);
      if ((this !== other) && (d < neighborDistance)) {
        sum.add(other.position);
        count++;
      }
    }
    if (count > 0) {
      sum.div(count);
      return this.seek(sum);
    } else {
      return createVector(0, 0);
    }
  }
}

// =====

class Flock {
  constructor() {
    this.boids = [];
  }

  run() {
    for (let boid of this.boids) {
      boid.run(this.boids);
    }
  }

  addBoid(boid) {
    this.boids.push(boid);
  }
}

// =====
let flock = [];

function setup() {
  createCanvas(640, 640);
  flock = new Flock();
  for (let i = 0; i < 120; i++) {
    let boid = new Boid(random(width), random(height));
    flock.addBoid(boid);
  }
}

function draw() {
  background(255);
  flock.run();
}
