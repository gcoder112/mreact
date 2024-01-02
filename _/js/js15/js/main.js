// Arrays
const myArray = [];

// add 
myArray[0] = "Alex";
myArray[1] = 25;
myArray[2] = true;

console.log(myArray)
console.log(myArray.length)
console.log(myArray[myArray.length-1])
console.log(myArray[1])

myArray.push("school");
console.log(myArray);
let poppedElement = myArray.pop();
console.log(myArray);
console.log(poppedElement);

const newLength = myArray.unshift(42);
console.log(myArray, newLength);

const firstItem = myArray.shift();
console.log(firstItem);
console.log(myArray);
console.log(myArray[30]);

// delete myArray[1];
const middleArray = myArray.splice(1, 1);
console.log(myArray);
console.log(middleArray);

myArray.splice(1, 0, 42);
console.log(myArray);


const myArray2 = ['A', 'B', 'C', 'D', 'E', 'F'];
const newArray = myArray2.slice(2);
console.log(newArray);
const newArray2 = myArray2.slice(2, 5);
console.log(newArray2);
newArray2.reverse();
console.log(newArray2);
const newString = newArray2.join();
console.log(newString);

const newArray3 = newString.split(",");
console.log(newArray3);

const myArrayA = ['A', 'B', 'C'];
const myArrayB = ['D', 'E', 'F'];
const myArrayBA = myArrayB.concat(myArrayA);
console.log(myArrayBA);

const spreadBA = [...myArrayB, ...myArrayA];
console.log(spreadBA);

const equipShelfA = ["baseball", "football", "volleyball"];
const equipShelfB = ["basketball", "golf balls", "tennis balls"];

const clothesShelfA = ["tank tops", "t-shirts", "jerseys"];
const clothesShelfB = ["sweat tops", "sweat pants", "hoodies"];

console.log(equipShelfA[1]);
console.log(clothesShelfB[0]);

const equipDept = [equipShelfA, equipShelfB];
const clothesDept = [clothesShelfA, clothesShelfB];
console.log(equipDept);
console.log(clothesDept);
console.log(equipDept[0][1]);
console.log(clothesDept[1][0]);

const sportsStore = [equipDept, clothesDept];
console.log(sportsStore);
console.log(sportsStore[0][0][1]);
console.log(sportsStore[1][1][0]);
