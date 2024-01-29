// Stack & Heap Memory -->

// Primitive Data Types -
// 1. String
// 2. Number
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. Symbol
// 7. BigInt

// Non-Primitive (Reference Type) Data Types -
// 1. Array
// 2. Objects
// 3. Functions


// Stack --> 
// stores only "Primitive" data
// stores address of Non-Primitive (Reference Type) data which is stored in Heap

// Heap  --> 
// stores only "Non-Primitive (Reference Type)" data


// Example-1 -->
// Primitive Data -->

let myName = "Tinesh";
let anotherMyName = myName;

console.log("myName - ",myName);
console.log("anotherMyName - ",anotherMyName);

// changing anotherMyName value -
anotherMyName = "Tineshwar";

console.log("myName - ",myName);
console.log("anotherMyName - ",anotherMyName);


// Note - 
// Only anotherMyName value is changed because it stored as copy of myName in stack memory.

// --------------------------------------------------------------------

// Example-2 -->
// Non-Primitive (Reference Type) Data -->

let myDetailsOne = {
    name : "Tineshwar",
    email : "tineshwar@example.com",
    isMarried : true
}

let myDetailsTwo = myDetailsOne;

console.log("myDetailsOne", myDetailsOne);
console.log("myDetailsTwo", myDetailsTwo);

// changing email value -
myDetailsTwo.email = "tinesh@example.com";

console.log("myDetailsOne", myDetailsOne);
console.log("myDetailsTwo", myDetailsTwo);