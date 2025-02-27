// JavaScript Execution Context -->
// JavaScript is a single-threaded interpreted language. 
// Every browser has its own JavaScript engine. 
// Google Chrome has the V8 engine.


// Execution Contexts --> 
// When the JavaScript engine scans a script file, it makes an environment called the Execution Context that handles the entire transformation and execution of the code.

// There are two types of Execution Contexts : 

// 1. Global Execution Context.
// The global execution context is created when a JavaScript script first starts to run, and it represents the global scope in JavaScript. 

// 2. Function Execution Context. 
// A function execution context is created whenever a function is called, representing the function's local scope.

// Note - 
// Global Execution Context creates first and it refers to "this" keyword.
// In Browser --> Global Execution Context is Window Object.

// ---------------------------------------------

// Phases of the JavaScript Execution Context :

// 1. Memory Creation Phase
// In this phase, the JavaScript engine creates the execution context and sets up the script's environment. 
// It determines the values of variables and functions and sets up the scope chain for the execution context.


// 2. Execution Phase
// In this phase, the JavaScript engine executes the code in the execution context. 
// It processes any statements or expressions in the script and evaluates any function calls.


// Note --> 
// JavaScript execution context is a crucial part of understanding how JavaScript works behind the scenes. 
// It determines the environment in which code is executed and what variables and functions are available to use.
// Everything in JS happens inside this execution context. It is divided into two components. One is memory and the other is code.

// ---------------------------------------------

// At the very beginning, the JavaScript engine executes the entire source code, creates a global execution context.

// Step-1 --> Global Execution Context :
// Creates a Global Object that is Window in browser.

// Step-2 --> Memory Creation Phase :
// Sets up a memory for storing variables and functions.
// Stores the variables with values as undefined and function references.

// Step-3 --> Execution Phase :
// Now, in this phase, it starts going through the entire code line by line from top to bottom.


// Example -
let val1 = 10;
let val2 = 5;
function addNum(num1 , num2) {
    let total = num1 + num2;
    return total;
}
let result1 = addNum(val1, val2);
let result2 = addNum(10, 20);


// 1. Memory Creation Phase :
// --> var1 = undefined
// --> var2 = undefined
// --> addNum = function definition
// --> result1 = undefined
// --> result2 = undefined

// 2. Execution Phase :
// --> val1 = 10
// --> val2 = 5
// --> addNum --> memory already allocated 
// --> result1 = 15 --> there again new Executional Context will create for addNum()

    // ------------------------------
    // In Execution Context of addNum -->
    // ------------------------------
    // 1. Memory Creation Phase :
    // --> num1 = undefined
    // --> num2 = undefined
    // --> total = undefined

    // 2. Execution Phase :
    // --> num1 = 10
    // --> num2 = 5
    // --> total = 15  

    // Note - 
    // --> this total returns to the global execution context.
    // --> this created execution context will delete after function execution.
    //-----------------------------------

// --> result1 = 30 --> there again new Executional Context will create for addNum()

    // ------------------------------
    // In Execution Context of addNum -->
    // ------------------------------
    // 1. Memory Creation Phase :
    // --> num1 = undefined
    // --> num2 = undefined
    // --> total = undefined

    // 2. Execution Phase :
    // --> num1 = 10
    // --> num2 = 20
    // --> total = 30  


    // Note - 
    // --> this total returns to the global execution context.
    // --> this created execution context will delete after function execution.
    //-----------------------------------


// ------------------------------------------------------------------------

// Once the entire code is dome completely, 
// the global context will look like this and it will be destroyed also.

// Memory Creation Phase :
// --> var1 = 10
// --> var2 = 5
// --> addNum = function definition
// --> result1 = 15
// --> result2 = 30

// ------------------------------------------------------------------------


// Call Stack -->
// To keep the track of all the contexts, including global and functional, the JavaScript engine uses a call stack. 
// A call stack is also known as an 'Execution Context Stack', 'Runtime Stack', or 'Machine Stack'.
// It uses the LIFO principle (Last-In-First-Out). 
// When the engine first starts executing the script, it creates a global context and pushes it on the stack.


function one() {
    console.log('one');
    two();
}

function two() {
    console.log('two');
    three();
}

function three() {
    console.log('three');
}

one();
