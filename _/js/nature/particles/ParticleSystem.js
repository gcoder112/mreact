let system;
let particle;

function setup() {
  createCanvas(640, 360);
  system = new ParticleSystem();
}

function draw() {
  background(255);
  system.run();
}

class Particle {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.acceleration = createVector(0, 0);
    this.velocity = createVector(0, 0);
    this.lifespan = 255;
  }

  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);  
    this.lifespan += 3.0;
  }

  show() {
    stroke(0, this.lifespan);
    fill(175, this.lifespan);
    circle(this.position.x, this.position.y, 1);
  }

  isDead() {
    return (this.lifespan < 0.0);
  }
}
