// Fetch API requires a discussion of ...
// Callbacks, Promises, Thenables, and Async/Await

// workflow function

const getAllUserEmails = async () => {

    const response =  await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonUserData = await response.json();

    return jsonUserData;
}

const anotherFunc = async () => {
    const data = await myCoolFunction();
    myUsers.userList = data;
    console.log(myUsers.userList);
}

anotherFunc();
console.log(myUsers.userList);
