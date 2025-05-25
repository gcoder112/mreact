let G = 1.0;

class Body {
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

  attract(body) {
    let force = p5.Vector.sub(this.position, body.position);
    let d = constrain(force.mag(), 5, 25);
    let strength = (G *this.mass * body.mass) / (d * d);
    force.setMag(strength);
    body.applyForce(force);
    return force;
  }
}

// ====================================================

let bodyA;
let bodyB;

function setup() {
  createCanvas(640, 240);
  bodyA = new Body(320, 40, 4);
  bodyB = new Body(320, 200, 4);
  bodyA.velocity = createVector(1,0);
  bodyB.velocity = createVector(-1,0);
}

function draw() {
  background(255);
  bodyA.attract(bodyB);
  bodyB.attract(bodyA);
  bodyA.update();
  bodyA.show();
  bodyB.update();
  bodyB.show();
}
