// JavaScript Arrow Function --->
// Arrow functions allows a short syntax for writing function expressions.
// Arrow functions are not hoisted. They must be defined before they are used.
// Arrow functions do not have their own this. They are not well suited for defining object methods.
// Using const is safer than using var, because a function expression is always constant value.



// Arrow Function syntax -->
const arrowFunction = () => {
    console.log(`My name is Tineshwar Singh`);
}
arrowFunction();

// ----------------------------------------------------------


// Arrow Function with parameter -->
const showMyName = (name) => {
    console.log(`My name is ${name}`);
}
showMyName("Tinesh Singh");     // My name is Tinesh Singh


// ----------------------------------------------------------


// Arrow Function with return keyword -->
const addOne = (num) => {
    return num+1;
}
console.log(`addOne -->`, addOne(10));  // 11


// ----------------------------------------------------------


// Arrow Function without return keyword / implicit return -->
const addTwo = (num) => num+2;
console.log(`addTwo -->`, addTwo(10));  // 12

// --------------------------------

const addThree = num => num+3;
console.log(`addThree -->`, addThree(10));  // 13

// --------------------------------

const addAnotherTwoNumbers = (val1, val2) => (val1+val2);
console.log(`addAnotherTwoNumbers -->`, addAnotherTwoNumbers(10,20));  // 30

// --------------------------------

const addTwoNumbers = (num1, num2) => {
    return num1+num2;
}
console.log(`addTwoNumbers -->`, addTwoNumbers(10,20));  // 30


// -------------------------------------------------------------------------------------

// Hoisting in arrow function -->

hositedArrowFunction(); // ReferenceError: Cannot access 'hositedArrowFunction' before initialization

const hositedArrowFunction = () => {
    console.log("Hoisted or not...???")
}

// Note -->
// Arrow Function can't be hosited.