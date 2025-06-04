const { Engine, Bodies, Composite, Vector, Body } = Matter;

let boxes = [];
let boundary1, boundary2, boundary3;
let engine;

function setup() {
  createCanvas(640, 640);
  engine = Engine.create();
  boundary1 = new Boundary(50, 300, 400, 25);
  boundary2 = new Boundary(450, 200, 150, 25);
  boundary3 = new Boundary(250, 550, 150, 25);
}

function draw() {
  Engine.update(engine);
  background(255);
  if (mouseIsPressed) {
    let r = random(1);
    if (r < 0.5) {
      let box = new Box(mouseX, mouseY);
      boxes.push(box);
    } else {
      let customShape = new CustomShape(mouseX, mouseY);
      boxes.push(customShape);
    }
  }

  for (let box of boxes) {
    box.show();
  }
  boundary1.show();
  boundary2.show();
  boundary3.show();
}

class CustomShape {
  constructor(x, y) {
    let vertices = [];
    vertices[0] = Vector.create(-10, -10);
    vertices[1] = Vector.create(20, -15);
    vertices[2] = Vector.create(15, 0);
    vertices[3] = Vector.create(0, 10);
    vertices[4] = Vector.create(-20, 15);
    let options = { restituion: 1 };
    this.body = Bodies.fromVertices(x, y, vertices, options);

    Body.setVelocity(this.body, Vector.create(random(-5, 5), 0));
    Body.setAngularVelocity(this.body, 0.1);
    Composite.add(engine.world, this.body);
  }

  show() {
    fill(0, 127, 0);
    stroke(0);
    strokeWeight(2);
    beginShape();
    for (let v of this.body.vertices) {
      vertex(v.x, v.y);
    }
    endShape(CLOSE);
  }
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
    fill(127, 0, 0);
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
    fill(0, 0, 127);
    stroke(0);
    strokeWeight(2);
    rect(this.x, this.y, this.w, this.h);
  }
}