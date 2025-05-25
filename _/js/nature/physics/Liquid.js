class Liquid {
  constructor(x, y, w, h, c) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.c = c;
  }

  show() {
    noStroke();
    fill(0, 0, 175);
    rect(this.x, this.y, this.w, this.h);
  }

  contains(mover) {
    let pos = mover.position;

    return (pos.x > this.x && pos.x < this.x + this.w &&
      pos.y > this.y && pos.y < this.y + this.h);
  }

  drag(mover) {
    let speed = mover.velocity.mag();
    let dragMagnitude = this.c * speed * speed;

    let dragForce = mover.velocity.copy();
    dragForce.mult(-1);
    dragForce.setMag(dragMagnitude);

    return dragForce;
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
let liquid;

function setup() {
  createCanvas(640, 640);
  for (let i = 0; i < 9; i++) {
    let mass = random(0.1, 5);
    movers[i] = new Mover(40 + i * 70, 0, mass);

  }
  liquid = new Liquid(0, height / 2, width, height / 2, 0.1);
}

function draw() {
  background(255);

  liquid.show();

  for (let i = 0; i < movers.length; i++) {
    if (liquid.contains(movers[i])) {
      let dragForce = liquid.drag(movers[i]);
      movers[i].applyForce(dragForce)
    }
    let gravity = createVector(0, 0.1 * movers[i].mass);
    movers[i].applyForce(gravity);
    movers[i].update();
    movers[i].show();
    movers[i].checkEdges();
  }

}
