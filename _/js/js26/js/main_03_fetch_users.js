// Fetch API requires a discussion of ...
// Callbacks, Promises, Thenables, and Async/Await

// Promises

// 3 states: Pending, Fulfilled, Rejected

const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users");

// pending
// console.log(fetchUsers); // Promise {<pending>}

fetchUsers.then(response => {
    // console.log(response);
    return response.json();
}).then(data => {
    // console.log(data);
    data.forEach(user => {
        console.log(user);
    });
});
