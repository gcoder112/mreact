const {Engine, Bodies, Constraint, Composite, Body, Vector, Render} = Matter;

let engine;

class Pendulum {
  constructor(x, y, len) {
    this.r = 12;
    this.len = len;

    this.anchor = Bodies.circle(x, y, this.r, {isStatic: true});
    this.bob = Bodies.circle(x + len, y, this.r, {restitution: 0.6});
    let options = {
      bodyA: this.anchor,
      bodyB: this.bob,
      length: this.len
    };
    this.arm = Constraint.create(options);
    Composite.add(engine.world, this.anchor);
    Composite.add(engine.world, this.bob);
    Composite.add(engine.world, this.arm);
  }

  show() {
    fill(127);
    stroke(0);
    line(this.anchor.position.x, this.anchor.position.y,
      this.bob.position.x, this.bob.position.y);
    push();
    translate(this.anchor.position.x, this.anchor.position.y);
    rotate(this.anchor.angle);
    circle(0, 0, this.r * 2);
    line(0, 0, this.r, 0);
    pop();
    push();
    translate(this.bob.position.x, this.bob.position.y);
    rotate(this.bob.angle);
    circle(0, 0, this.r * 2);
    line(0, 0, this.r, 0);
    pop();
  }
}

function setup() {
  let canvas = createCanvas(640, 360);

  engine = Engine.create();
  let render = Render.create({
    canvas: canvas.elt,
    engine: engine,
    options: {width: width, height: height}
  });
  Render.run(render);
  let options = {friction: 0.01, restitution: 0.75};
  let box = Bodies.rectangle(100, 100, 50, 50, options);
  Body.setVelocity(box, Vector.create(5, 0));
  Body.setAngularVelocity(box, 0.1);
  Composite.add(engine.world, box);
  let ground = Bodies.rectangle(width/2, height-5, width, 10, {isStatic: true});
  Composite.add(engine.world, ground);
  Composite.add(engine.world, new Pendulum(100, 100, 200));
  Composite.add(engine.world, new Pendulum(300, 100, 200));
  Composite.add(engine.world, new Pendulum(500, 100, 200));
  let runner = Matter.Runner.create();
  Matter.Runner.run(runner, engine);
}
