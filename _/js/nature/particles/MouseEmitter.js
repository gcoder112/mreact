let emitters = [];

function setup() {
  createCanvas(800, 640);
}

function mousePressed() {
  emitters.push(new Emitter(mouseX, mouseY));
}

function draw() {
  background(255);
  for (let emitter of emitters) {
    emitter.run();
    emitter.addParticle();
  }
}

class Emitter {
  constructor(x, y) {
    this.orgin = createVector(x, y);
    this.particles = [];
  }

  addParticle() {
    this.particles.push(new Particle(origin.x, origin.y));
  }

  run() {
    this.addParticle();
    let length = this.particles.length - 1;
    for (let i = length; i >= 0; i--) {
      let particle = this.particles[i];
      particle.run();
      if (particle.isDead()) {
        this.particles.splice(i, 1);
      }
    }
  }
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