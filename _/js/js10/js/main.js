// User Input

// alert("Hello World!");

// let myBoolean = confirm("Ok === true\nCancel === false");
// console.log(myBoolean);

let userName = prompt("What is your name?");
if (userName) {
    console.log("[" + userName.trim() + "]");
} else {
    console.log("You didn't enter a name");
}
