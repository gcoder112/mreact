// JavaScript Errors and Error Handling
"use strict";

// const variable = "Dave";
// console.log(variable);
// Object..create();
// variable = "Joe";

const makeError = () => {
    let i = 1;
    while (i <= 5) {
        try {
            // const name = "Dave";
            // name = "Joe";
            // throw new customError("This is a custom error!");
            // throw new Error("This is a error");
            if (i % 2 !== 0) {
                throw new Error("Odd number: " + i);
            }
            console.log("Even number: " + i)
        } catch(err) {
            // console.error(err.name);
            console.error(err.message);
            // console.error(err.stack);
        } finally {
            console.log("Do something at the end.");
            i++
        }
    }
};
makeError();

// function customError(message) {
//     this.message = message;
//     this.name = "customError";
//     this.stack = `${this.name}: ${this.message}`;
// }