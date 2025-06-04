const { Engine, Bodies, Body, Composite } = Matter;

let boxes = [];
let boundary1, boundary2;
let engine;

function setup() {
  createCanvas(640, 360);
  engine = Engine.create();
  boundary1 = new Boundary(50, 300, 400, 25);
  boundary2 = new Boundary(450, 200, 150, 25);
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
}

class Box {
  constructor(x, y) {
    this.w = 16;
    this.l = 48;
    let part1 = Bodies.rectangle(x, y, this.l, this.w);
    let part2 = Bodies.circle(x+this.l, y, this.w);
    this.body = Body.create({parts: [part1, part2]});

    Composite.add(engine.world, this.body);
  }

  show() {
    let position = this.body.position;
    let angle = this.body.angle;

    rectMode(CENTER);
    fill(127, 0, 0);
    stroke(0);
    strokeWeight(2);
    push();
    translate(position.x, position.y);
    rotate(angle);
    rect(0, 0, this.l, this.w);
    fill(127, 127, 0);
    circle(this.l - this.w, 0, this.w);
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