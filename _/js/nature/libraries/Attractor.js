const { Engine, Bodies, Composite, Constraint, Vector } = Matter;

let boxes = [];
let windmill;
let attractor;
let engine;

function setup() {
  createCanvas(640, 640);
  engine = Engine.create();
  windmill = new Windmill(360, 420, 5, 300);
  attractor = new Attractor(360, 250);
}

function draw() {
  Engine.update(engine);
  background(255);
  if (mouseIsPressed) {
    let box = new Box(mouseX, mouseY);
    boxes.push(box);
  }

  for (let box of boxes) {
    attractor.attract(box);
    box.show();
  }
  windmill.show();
}

class Box {
  constructor(x, y) {
    this.w = 16;
    this.body = Bodies.rectangle(x, y, this.w, this.w);

    Composite.add(engine.world, this.body);
  }

  show() {
    let position = this.body.position;
    let angle = this.body.angle;

    rectMode(CENTER);
    fill(127);
    stroke(0);
    strokeWeight(2);
    push();
    translate(position.x, position.y);
    rotate(angle);
    square(0, 0, this.w);
    pop(); 
  }

  removeBody() {
    Composite.remove(engine.world, this.body);
  }
}

class Windmill {
  constructor(x, y, w, h) {
    this.w = w;
    this.h = h;
    this.body = Bodies.rectangle(x, y, w, h);
    Composite.add(engine.world, this.body);
    
    let options = {
      bodyA: this.body,
      pointB: {x: x, y: y},
      length: 0,
      stiffness: 1
    };
    this.constraint = Constraint.create(options);
    Composite.add(engine.world, this.constraint);
  }

  show() {
    rectMode(CENTER);
    fill(127);
    stroke(0);
    strokeWeight(2);
    push();
    translate(this.body.position.x, this.body.position.y);
    push()
    rotate(this.body.angle);
    rect(0, 0, this.w, this.h);
    pop();
    line(0, 0, 0, height);
    pop();
  }
}

class Attractor {
  constructor(x, y) {
    this.radius = 32;
    this.body = Bodies.circle(x, y, this.radius, { isStatic: true});
    Composite.add(engine.world, this.body);
  }

  attract(mover) {
    let force = Vector.sub(this.body.position, mover.body.position);
    let distance = Vector.magnitude(force);
    distance = constrain(distance, 5, 25);

    let G = 0.02;

    let strength = (G * mover.body.mass) / (distance * distance);
    force = Vector.normalise(force);
    force = Vector.mult(force, strength);
    return force;
  }
}