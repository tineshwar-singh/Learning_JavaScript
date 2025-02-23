// JavaScript Functions with "this" keyword -->

// Note -->
// In regular functions the "this" keyword represented the object that called the function, which could be window, document, a button or whatever.
// With arrow functions the "this" keyword always represents the object that defined the arrow function.


// Normal Function --> 
// In JavaScript Object, we can access the object property with "this" keyword.
// Because it refers to the current object only.

const normalFunctionDetails = {
    username : "tineshwar_singh",

    greeting : function() {
        console.log(`${this.username}, welcome to the website`);
    }
}

normalFunctionDetails.greeting();   // tineshwar_singh, welcome to the website

// ----------------------------------------------------------------------------

// Arrow Function --> 
// In JavaScript Object, we cannot access the object property with "this" keyword.
// Because it refers to the global object only.

const arrowFunctionDetails_One = {
    username : "tineshwar_singh",

    greeting : () => {
        console.log(`${this.username}, welcome to the website`);
    }
}

arrowFunctionDetails_One.greeting();   // undefined, welcome to the website


// ----------------------------------------------------------------------------


// "this" keyword in normal javascript function -->
// 1. Normal JavaScript Functions refers to the 
// when we use the this keyword in normal javascript function...

// In Browser -
// --> It refers to window object.

// In Node -
// --> It refers to empty object.


// Function Declaration -->

function functionDeclaration() {
    let firstName = "tineshwar";
    console.log(this.firstName); // undefined
    console.log(this);           // global object
}

functionDeclaration();

// ------------------------------------------

// Function Expression -->

const functionExpression = function () {
    let firstName = "tinesh";
    console.log(this.firstName); // undefined
    console.log(this);           // global object
}

functionExpression();

// ------------------------------------------

// Arrow Function -->

const arrowFunction = () => {
    let firstName = "Tineshwar";
    console.log(this.firstName); // undefined
    console.log(this);           // global object
}

arrowFunction();