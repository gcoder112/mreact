const { Engine, Bodies, Composite, Constraint } = Matter;

let boxes = [];
let boundary1, boundary2;
let windmill;
let engine;

function setup() {
  createCanvas(640, 640);
  engine = Engine.create();
  boundary1 = new Boundary(50, 300, 200, 5);
  boundary2 = new Boundary(450, 200, 150, 5);
  windmill = new Windmill(360, 420, 5, 300);
}

function draw() {
  Engine.update(engine);
  background(255);
  if (mouseIsPressed) {
    let box = new Box(mouseX, mouseY);
    boxes.push(box);
  }

  for (let box of boxes) {
    box.show();
  }
  boundary1.show();
  boundary2.show();
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

class Boundary {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    let options = { isStatic: true };

    this.body = Bodies.rectangle(this.x, this.y, this.w, this.h, options);
    Composite.add(engine.world, this.body);
  }

  show() {
    rectMode(CENTER);
    fill(127);
    stroke(0);
    strokeWeight(2);
    rect(this.x, this.y, this.w, this.h);
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