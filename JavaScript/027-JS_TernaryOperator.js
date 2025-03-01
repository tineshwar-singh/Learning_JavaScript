// JavaScript Ternary Operator -->
// Ternary Operator is the only JavaScript operator that takes three operands.
// 1. a condition followed by a question mark (?), 
// 2. then an expression to execute if the condition is truthy followed by a colon (:), 
// 3. and finally the expression to execute if the condition is falsy.

// Syntax --> 
// condition ? true : false;


// Example-1 -->

const bookPrice = 110;
bookPrice<100 ? console.log("Book price is less than 100") : console.log("Book prise is more than 100");


// Example-2 -->

const person = 'Tineshwar Singh';
const age = 17;
const ableToVote = age>=18 ? 'can' : 'can not';

console.log(`${person} ${ableToVote} vote because age is ${age}`);