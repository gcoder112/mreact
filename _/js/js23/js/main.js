// Web Storage API

// Not part of the DOM - refers to the Window API
// Available to JS via the global variable: window

// We do not have to type window.  It is implied:

// window.alert("ok!");
// alert("ok");
// console.log(window.location);
// console.log(location);
// alert(location);

/***
 * window.localStorage
 * window.sessionStorage
 */

const myArray = ['eat', 'sleep', 'code'];
const myObject = {
    name: 'Alex',
    hobbies: ['eat', 'sleep', 'code'],
    logName: function () {
        console.log(this.name);
    }
}

myObject.logName();
sessionStorage.setItem("mySessionStore", JSON.stringify(myObject));
let mySessionData = JSON.parse(sessionStorage.getItem("mySessionStore"));
console.log(mySessionData);

sessionStorage.setItem("mySessionStore", JSON.stringify(myArray));
mySessionData = JSON.parse(sessionStorage.getItem("mySessionStore"));
console.log(mySessionData);

localStorage.setItem("mySessionStore", JSON.stringify(myArray));
mySessionData = JSON.parse(localStorage.getItem("mySessionStore"));
console.log(mySessionData);

const key = localStorage.key(0);
console.log(key);
console.log(sessionStorage.length);
console.log(sessionStorage.key(0));
console.log(sessionStorage.key(1));
localStorage.removeItem("mySessionStore");
localStorage.clear();
