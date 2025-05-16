function setup() {
  // Example to choose a random element from an array
  let stuff = [1, 1, 2, 3, 3];
  let value = random(stuff);
  print(value); // 1

  // Example of weighted probability
  let probability = 0.1;
  let r = random(1);
  if (r < probability) {
    print("Sing!"); // Sing!
  }

  // From 0.0 to 0.6 (60 percent) - Singing
  // From 0.6 to 0.7 (10 percent) - Dancing
  // From 0.7 to 1.0 (30 percent) - Sleeping
  let num = random(1);
  if (num < 0.6) {
    print("Sing!"); // Sing!
  } else if (num < 0.7) {
    print("Dance!") // Dance!
  } else {
    print("Sleep!") // Sleep!
  }
}