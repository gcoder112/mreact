let { Vec2D, Rect } = toxi.geom;
let { VerletPhysics2D, VerletParticle2D, VerletSpring2D } = toxi.physics2d;
let { GravityBehavior } = toxi.physics2d.behaviors;

let physics;
let particle1, particle2;

function setup() {
  createCanvas(640, 640);
  physics = new VerletPhysics2D();
  physics.setWorldBounds(new Rect(0, 0, width, height));
  physics.addBehavior(new GravityBehavior(new Vec2D(0, 0.5)));
  let length = 120;

  // Create two particles
  particle1 = new Particle(width / 2, 20, 8);
  particle2 = new Particle(width / 2 + length, 0, 8);
  particle1.lock(); // Lock particle 1 in place

  // Create one spring
  let spring = new VerletSpring2D(particle1, particle2, length, 0.01);
  physics.addParticle(particle1);
  physics.addParticle(particle2);
  physics.addSpring(spring);
}

function draw() {
  physics.update();
  background(255);
  stroke(0);
  line(particle1.x, particle1.y, particle2.x, particle2.y);
  particle1.show();
  particle2.show();
  if (mouseIsPressed) {
    particle2.lock();
    particle2.x = mouseX;
    particle2.y = mouseY;
    particle2.unlock();
  }
}

class Particle extends VerletParticle2D {
  constructor(x, y, r) {
    super(x, y);
    this.r = r;
  }

  show() {
    fill(127);
    stroke(0);
    circle(this.x, this.y, this.r * 2);
  }
}