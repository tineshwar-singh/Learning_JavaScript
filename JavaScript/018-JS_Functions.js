// JavaScript Functions -->
// A JavaScript function is a block of code designed to perform a particular task.
// A JavaScript function is executed when "something" invokes it (calls it).

// Function Definition -->
function functionName() {
    // code
}
functionName() // function call.

// --------------------------------------------

// Function Declaration -->

// creating function to display our name -->
function sayMyName() {
    console.log("My name is Tineshwar Singh");
}

sayMyName();    // My name is Tineshwar Singh


// --------------------------------------------

// creating function to add two numbers -->
function addTwoNumbers(num1, num2) {
    console.log(num1+num2);
}

addTwoNumbers(3,4);     // 7


// Note -->
// function functionName( parameters ) {
//     // code
// }
// functionName( arguments );

// --------------------------------------------


// Function return -->
// When JavaScript reaches a return statement, the function will stop executing.

// creating function to multiply two numbers -->
function mutliplyTwoNumbers(num1, num2) {
    // let result = num1 * num2;
    // return result;

    return num1 * num2;
    
    console.log("tineshwar"); // it will not execute this line because of return keyword
}

const ans = mutliplyTwoNumbers(2, 5);
console.log(`Multiply --> `, ans);      // 10


// --------------------------------------------

// creating function to display message to logged in user -->
function loginUserMessageOne(username) {
    return `${username} just logged in...!!!`;
}

console.log(loginUserMessageOne("Tineshwar"));     // Tineshwar just logged in...!!!

// --------------------------------------------

// creating function to display message to logged in user, when user name is not passed -->
function loginUserMessageTwo(username) {
    if(username === undefined) {
        console.log("Please enter a username");
        return  // using return keyword because below line is also executing which is wrong
    } 
    console.log(`${username} just logged in...!!!`)
}

console.log(loginUserMessageTwo());  // undefined

// --------------------------------------------

// another way -->

function loginUserMessageThree(username) {
    if(!username) {
        console.log("Please enter a username");
        return  // using return keyword because below line is also executing which is wrong
    } 
    console.log(`${username} just logged in...!!!`)
}

console.log(loginUserMessageThree());  // undefined

// --------------------------------------------

// Default Parameter -->
// when we don't pass any argument while calling any function
// we can assign default value which will handle the situation

function loginUserMessageFour(username = "Tinesh") {
    if(!username) {
        console.log("Please enter a username");
        return  // using return keyword because below line is also executing which is wrong
    } 
    console.log(`${username} just logged in...!!!`)
}

console.log(loginUserMessageFour());  // Tinesh just logged in...!!!

// --------------------------------------------

// REST Parameter -->

function calculateCartPrice(val1, val2, ...num) {
    return num;
}
console.log(calculateCartPrice(20,50,100,200,500));

// note -->
// if we give parameter as only "num", it will return only 20 (first value)
// if we give parameter with rest parameter as "...num", it will return array of all the values [20,50,100,200,500]
// if we give parameter as "val1, val2, ...num", num will return array of values except 1st and 2nd --> [100,200,500]

// --------------------------------------------


// Handling the object in function -->

const personalDetails = {
    name : "Tineshwar Singh",
    age : 25,
}

function handleObject(anyObject) {
    return `My name is ${anyObject.name} and my age is ${anyObject.age}`;
}

console.log(`handle object --> `, handleObject(personalDetails));   // My name is Tineshwar Singh and my age is 25

console.log(`handle object --> `, handleObject({
    name : "Sanjana Singh",
    age : 23
}
));   // My name is Sanjana Singh and my age is 23


// --------------------------------------------

// Handling the array in function -->

const myFriends = ["Sanjana", "Vivek", "Shivam"];

function secondFriendName(myFriendsArray) {
    return myFriendsArray[1];
}

console.log(`second friend name --> `, secondFriendName(myFriends));    // Vivek

console.log(`second friend name --> `, secondFriendName(["Vivek", "Sanjana", "Shivam"]));    // Sanjana

// --------------------------------------------

