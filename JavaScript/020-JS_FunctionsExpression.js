// Function Expression -->
// A JavaScript function can also be defined using an expression.
// A function expression can be stored in a variable.
// The function expression is actually an anonymous function (a function without a name).
// Functions stored in variables do not need function names. They are always invoked (called) using the variable name.

const displayName = function() {
    console.log(`My name is Tineshwar Singh`);
}

displayName();

// ----------------------------

const showName = function(value) {
    console.log(`My name is ${value}`);
}

showName("Tinesh Singh");

// ----------------------------


const addOne = function(num) {
    return num++;
}

const ans = addOne(10);
console.log(`addOne -->`,ans);

// -------------------------------------- INTERESTING CONCEPT --------------------------------------

// Function Declaration Hoisting...

functionDeclaration();

function functionDeclaration() {
    console.log(`Function Declaration Hoisted`);
}

// ----------------------------

// Function Expression Hoisting...

functionExpression(); // Uncaught ReferenceError: Cannot access 'functionExpression' before initialization

const functionExpression = function() {
    console.log(`Function Expression are not Hosited`)
}


// Note -->
// Function expressions in JavaScript are not hoisted, unlike function declarations. 
// We can't use function expressions before you create them.

// -------------------------------------- INTERESTING CONCEPT --------------------------------------