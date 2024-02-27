// JavaScript Global & Local Scope -->

// Note -->
// When we check the JS code in "node" environment, there GLOBAL scope is different because
// In a browser, the global scope is the window object. 

// When we check the JS code in "browser's console" environment, there GLOBAL scope is different 
// while in Node, the global scope is the global object. 



// example-1 --> scoping with variable 

var c = 300;

if (true) {
    let a = 10;
    const b = 20;
    c = 30;
}

// console.log("a --> ", a); 
// it will throw error as "Uncaught ReferenceError: a is not defined"

// console.log("b --> ", b); 
// it will throw error as "Uncaught ReferenceError: b is not defined"

console.log("c --> ", c);  // 30
// it will display the c value because c is decleared with var keyword.
// it should display the c value as 300 but it is diplayed as 30 because it is overridden.


// --------------------------------------------------------------------

// example-2 --> scoping with if block

let var1 = 1000; // GLOBAL scope

if(true) {
    let var1 = 2000; // LOCAL scope
    console.log(`INNER var1 --> `, var1);  // INNER var1 --> 2000
}
console.log(`OUTER var1 --> `, var1); // OUTER var1 --> 1000


// --------------------------------------------------------------------


// example-3 --> scoping with functions

function outerFunction() {
    const outerVar = "outerVariable";

    function innerFunction() {
        const innerVar = "innerVariable";
        console.log(`outerVar --> `, outerVar); // It will display "outerVar --> outerVariable"
    }
    // console.log(`innerVar --> `, innerVar); // It will throw error as "Uncaught ReferenceError"
    
    innerFunction();
}
outerFunction();


// --------------------------------------------------------------------


// example-4 --> scoping with nested if block

if (true) {
    const firstName = "Tineshwar";

    if (firstName === "Tineshwar") {
        const lastName = " Singh";
        console.log(firstName+lastName);
    }
    // console.log(`lastName --> `, lastName);   // It will throw error as "Uncaught ReferenceError"
}
// console.log(`firstName --> `, firstName);   // It will throw error as "Uncaught ReferenceError"


// --------------------------------------------------------------------

