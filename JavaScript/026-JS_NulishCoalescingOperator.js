// JavaScript Nulling Coalescing Operator (&&) -->
// The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand. 
// when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

const nullValue = null;
const undefinedVal = undefined;


const val1 = nullValue ?? 10;
console.log(val1);


const val2 = undefinedVal ?? 20;
console.log(val2);


const val3 = 100 ?? 200;
console.log(val3);


const val4 = nullValue ?? 500 ?? 1000;
console.log(val4);
