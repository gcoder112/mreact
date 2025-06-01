let emitter;

function setup() {
  createCanvas(640, 240);
  emitter = new Emitter(width/2, 20);
}

function draw() {
  background(255);
  let gravity = createVector(0, 0.1);
  emitter.applyForce(gravity);
  emitter.addParticle();
  emitter.run();
}

// =====

class Particle {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.velocity = createVector(random(-1, -1), random(-2, 0));
    this.acceleration = createVector(0, 0);

    this.lifespan = 255.0;
    this.mass = 1;
  }

  run() {
    let gravity = createVector(0, 0.05);
    this.applyForce(gravity);
    this.update();
    this.show();
  }

  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.lifespan -= 2.0;
    this.acceleration.mult(0);
  }

  applyForce(force) {
    let f = force.copy();
    f.div(this.mass);
    this.acceleration.add(f);
  }

  isDead() {
    return (this.lifespan < 0);
  }

  show() {
    fill(0, this.lifespan);
    circle(this.position.x, this.position.y, 8);
  }
}

// =====

class Confetti extends Particle {
  constructor(x, y) {
    super(x, y);
    /* I could add variables for only confetti here. */
  }

  /* Other methods like update() are inherited from the parent. */
  show() {
    let angle = map(this.position.x, 0, width, 0, TWO_PI * 2);
    rectMode(CENTER);
    fill(0, this.lifespan);
    stroke(0, this.lifespan);
    push();
    translate(this.position.x, this.position.y);
    rotate(angle);
    rectMode(CENTER);
    square(0, 0, 12);
    pop();
  }
}

// =====

class Emitter {
  constructor(x, y) {
    this.origin = createVector(x, y);
    this.particles = [];
  }

  addParticle() {
    let r = random(1);

    if (r < 0.5) {
      this.particles.push(new Particle(this.origin.x, this.origin.y));
    } else {
      this.particles.push(new Confetti(this.origin.x, this.origin.y));
    }
  }

  applyForce(force) {
    for (let particle of this.particles) {
      particle.applyForce(force);
    }
  }

  run() {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      let particle = this.particles[i];
      particle.run();
      if (particle.isDead()) {
        this.particles.splice(i, 1);
      }
    }
  }
}