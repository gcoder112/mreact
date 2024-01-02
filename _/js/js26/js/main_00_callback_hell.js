// Fetch API requires a discussion of ...
// Callbacks, Promises, Thenables, and Async/Await

// Callbacks
function firstFunction(parameters, callback) {
    // do stuff
    callback();
}

// AKA "callback hell"
firstFunction(para, function() {
    // do stuff
    secondFunction(para, function() {
        thirdFunction(para, function() {

        });
    });
});