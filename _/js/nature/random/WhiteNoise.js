var t;

function setup() {
  createCanvas(640, 320);
  background(255);
  t = 0;
}

function draw() {
  loadPixels();
  t++;
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      let index = (x + y * width) * 4;
      let bright
      if (t % 75 < 25) {
        bright = random(255);
      } else if (t % 75 < 50) {
        bright = randomGaussian(128, 25)
      } else {
        // A Perlin Noise Brightness
        bright = map(noise(x, y), 0, 1, 0, 255);
      }
      pixels[index] = bright;
      pixels[index + 1] = bright;
      pixels[index + 2] = bright
      pixels[index + 3] = 255;
    }
  }
  updatePixels();
}
