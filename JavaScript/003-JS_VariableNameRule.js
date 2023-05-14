//? Rules for naming variables 

console.log("--- 003-JS_VariableNameRule.js ---");

//? you cannot start with number 
//* example :- 
//* 1name (invalid)
//* name1 (valid)

//! var 1name = "Tineshwar"; 
//! Error - Uncaught SyntaxError: Invalid or unexpected token

var name1 = "Tineshwar-name1";

//? you can use only undersore _ or dollar $ symbol 
//* first_name (valid)
//* _firstname (valid) 
var first_name = "Tineshwar Singh";
var _firstname = "Tineshwar Singh";

console.log(first_name);
console.log(_firstname);

//* first$name (valid)
//* $firstname (valid)
var first$name = "Tineshwar Singh";
var $firstname = "Tineshwar Singh";

console.log(first$name);
console.log($firstname);

//? you cannot use spaces 
var first_name = "Tineshwar"; //! snake case writing 
var firstName = "Tineshwar"; //! camel case writing 

console.log(first_name);
console.log(firstName);

//* first name (invalid)
//! var first name = "Tineshwar";

//? convention 
//* Recommended - start with small letter and use camelCase 


//! Note :- 
//! Names are case sensitive (y and Y are different variables).
//! Reserved words (like JavaScript keywords) cannot be used as names.