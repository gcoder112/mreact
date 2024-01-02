// Your First Code Challenge

// Write code that will return a random letter from your name

function randomLetter(word) {
    if (typeof word !== 'string') return "";
    const n = word.length;
    if (n == 0) return "";
    return word.charAt(Math.floor(Math.random()*n));
}
const word = "Alex"

console.log(randomLetter(word));
console.log(randomLetter(word));
console.log(randomLetter(word));
console.log(randomLetter(word));
console.log(randomLetter(word));
console.log(randomLetter(word));
console.log(randomLetter(word));

