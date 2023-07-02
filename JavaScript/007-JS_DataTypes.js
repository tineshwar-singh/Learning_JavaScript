//? Data Types in JavaScript 
//* In JavaScript, an operator is a special symbol 
//* Which is used to perform operations on operands (values and variables).

console.log("--- 007-JS_DataTypes.js ---");

//? Primitive Data Types -
//* 1. String
//* 2. Number
//* 3. Boolean
//* 4. Undefined
//* 5. Null
//* 6. Symbol
//* 7. BigInt

//? Non-Primitive (Reference Type) Data Types -
//* 1. Array
//* 2. Objects
//* 3. Functions

//! typeof operator -->
//! It is an operator used for type checking and returns the data type.

console.log("Primitive Data Types :- ");

console.log("1. String - ");
//! A string (or a text string) is a series of characters.

let myName = "My name is Tineshwar";
console.log("In double quotes - " + myName);
console.log("Data Type of myName is - " + typeof myName);

let myFullName = 'My full name is Tineshwar Singh';
console.log("In single quotes - " + myFullName);
console.log("Data Type of myFullName is - " + typeof myFullName);

console.log("--------------------");

console.log("2. Number - ");
//! It contains numbers with decimals and without decimals both.

let myAge = 25;
console.log("My age is " + myAge);
console.log("Data Type of myAge is - " + typeof myAge);

let myPercentage = 71.5;
console.log("My myPercentage is " + myPercentage);
console.log("Data Type of myPercentage is - " + typeof myPercentage);

console.log("--------------------");

console.log("3. Boolean - ");
//! It contains only true and false as value.

let isLoggedIn = true;
console.log("My isLoggedIn is " + isLoggedIn);
console.log("Data Type of isLoggedIn is - " + typeof isLoggedIn);

console.log("--------------------");

console.log("4. Undefined - ");
//! In JavaScript, a variable without a value, has the value undefined. 
//! The type is also undefined.

let wantToBuyBike;
console.log("I wantToBuyBike is " + wantToBuyBike);
console.log("Data Type of wantToBuyBike is - " + typeof wantToBuyBike);

console.log("--------------------");

console.log("5. Null - ");
//! In JavaScript, null is a special value that represents an empty or unknown value.
//! It's data type is "Object". --> it's a bug in JavaScript.

let myAccountBalance = null;
console.log("My myAccountBalance is " + myAccountBalance);
console.log("Data Type of myAccountBalance is - " + typeof myAccountBalance);

console.log("--------------------");

console.log("6. Symbol - ");
//! Every Symbol() call is guaranteed to return a unique Symbol.

let uniqueVariable = Symbol('123');
console.log(uniqueVariable); //* uniqueVariable value
console.log("Data Type of uniqueVariable is - " + typeof uniqueVariable);

console.log("--------------------");

console.log("7. BigInt - ");
//! JavaScript BigInt is a new datatype (ES2020).
//! That can be used to store integer values that are too big.

let tooLargeNumber = 123456789098765432101234567890n;
console.log("My tooLargeNumber is " + tooLargeNumber);
console.log("Data Type of tooLargeNumber is - " + typeof tooLargeNumber);

let sameTooLargeNumber = BigInt(123456789098765432101234567890);
console.log("My sameTooLargeNumber is " + sameTooLargeNumber);
console.log("Data Type of sameTooLargeNumber is - " + typeof sameTooLargeNumber);

console.log("----------------------------------------");

console.log("Non Primitive (Reference Types) Data Types :- ");

console.log("1. Array - ");
//! JavaScript arrays are written with square brackets.
//! Array items are separated by commas.
//! It's data type is "Object".

let myFriends = ["Sanjana", "Vivek", "Shivam", "Nithin", "Rahul"];
console.log("My myFriends is " + myFriends);
console.log("Data Type of myFriends is - " + typeof myFriends);

console.log("--------------------");

console.log("2. Object - ");
//! JavaScript objects are written with curly braces {}.
//! Object properties are written as name:value pairs, separated by commas.

let myDetails = {
    name : "Tineshwar Singh",
    age : 25,
    isMarried : true,
}
console.log(myDetails);
console.log("Data Type of myDetails is - " + typeof myDetails);

console.log("--------------------");

console.log("3. Function - ");

let myFunction = function(name) {
    console.log("Hi guys... My name is Tineshwar Singh")
}
console.log(myFunction);
console.log("Data Type of myFunction is - " + typeof myFunction);

