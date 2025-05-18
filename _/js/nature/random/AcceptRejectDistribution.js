// Verify random() is Uniformly Distributed

const randomCounts = [];

const total = 20;

function setup() {
  createCanvas(640, 240);
  for (let i = 0; i < total; i++) {
    randomCounts[i] = 0;
  }
}

function draw() {
  background(255);
  const index = Math.round(total * acceptReject())
  randomCounts[index]++;
  stroke(0);
  fill(127);
  let w = width / randomCounts.length;

  for (let x = 0; x < randomCounts.length; x++) {
    rect(x * w, height - randomCounts[x], w - 1, randomCounts[x]);
  }
}

function acceptReject() {
  while (true) {
    let r1 = random(1);
    let probability = r1;
    let r2 = random(1);
    if (r2 < probability) {
      return r1;
    }
  }
}
