// Modules

// # Method 1 to import
// import playGuitar from "./guitars.js";
// import { shredding as shred, plucking as fingerpicking } from "./guitars.js";
// console.log(playGuitar());
// console.log(shred());
// console.log(fingerpicking());

// # Method 2 to import
import * as Guitars from "./guitars.js";
import User from "./user.js";
const me = new User("email@email.com", "Alex");
console.log(me);
console.log(me.greeting());

console.log(Guitars.playGuitar());
console.log(Guitars.shredding());
console.log(Guitars.plucking());