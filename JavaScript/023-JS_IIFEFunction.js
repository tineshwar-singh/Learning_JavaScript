// IIFE Function -->
// IIFE stands for Immediately Invoked Function Expressions (IIFE).
// It is a JavaScript function that runs as soon as it is defined.
// It's a design pattern that produces a lexical scope using function scoping.
// Variables declared inside an IIFE are not accessible outside of it, preventing naming conflicts and unintended side effects.


// Syntax -->
// ( function() {
//     // Code to be executed immediately.
// })();

// Note :- 
// we should end the IIFE Function with the semi-colon (;) to write two or more IIFE Funtions.


// named IIFE -->
(function dbConnection() {
        console.log("DB Connected One...!!!");
    }
)();

// ---------------------------------------

// anonymous IIFE -->
// normal function
(function() {
    console.log("DB Connected Two...!!!");
}
)();

// arrow function
(() => {
    console.log("DB Connected Three...!!!");
}
)();

// ---------------------------------------

// we can pass the parameters in IIFE also...

( (status) => {
    if (status) {
        console.log('DB Connected Sucessfully...!!!!');        
    } else {
        console.log('Please check the status of DB...!!!');
    }
})(true);
