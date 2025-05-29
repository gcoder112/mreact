// let total = 50;
let particles = [];

function setup() {
  createCanvas(640, 640);
  // for (let i=0; i < total; i++) {
  //   particles[i] = new Particle(width / 2, height / 4);
  // }
}

function draw() {
  background(255);
  particles.push(new Particle(width / 2, 20));
  for (let i = particles.length - 1; i >= 0; i--) {
    let particle = particles[i];
    particle.run();
    if (particle.isDead()) {
      particles.splice(i, 1);
    }
  }
  // for (let particle of particles) {
  //   particle.run();
  // }
}

class Particle {
  constructor(x, y) {
    this.reset(x, y);
  }

  reset(x, y) {
    this.position = createVector(x, y);
    this.velocity = createVector(random(-5, 5), random(-5, 5));
    this.acceleration = createVector(0, 0);
    this.lifespan = 255;
  }

  run() {
    this.update();
    this.show();
    let gravity = createVector(0, 0.1);
    this.applyForce(gravity);
    if (this.isDead()) {
      console.log("Particle dead!");
      this.reset(width / 2, height / 4);
    }
  }

  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);  
    this.lifespan -= 2.0;
    this.acceleration.mult(0);
  }

  show() {
    stroke(0, this.lifespan);
    fill(0, this.lifespan);
    circle(this.position.x, this.position.y, 5);
  }

  applyForce(force) {
    this.acceleration.add(force);
  }


  isDead() {
    return (this.lifespan < 0.0);
  }
}