// Loops
let myNumber = 0;
while (myNumber < 50) {
    myNumber += 2;
    console.log(myNumber);
}
// don't create an endless loop
let name = "Alex";

for(let i = 0; i < name.length; i++) {
    console.log(name.charAt(i));
}

let counter = 0;
let myLetter;
while (counter <= 3) {
    myLetter = name[counter];
    console.log(myLetter);
    if (counter === 1) {
        counter += 2;
        continue;
    }
    if (myLetter === 'v') break;
    counter++;
}
console.log(counter);