// JavaScript Number -->
// JavaScript has only one type of number. 
// Numbers can be written with or without decimals.

const score = 100; 
console.log(score);

const balance = new Number(100);
console.log(balance);
console.log(typeof balance); // --> Object

// -------------------------------------------------------------------------

// Number Methods -->
// toString()	
// The toString() method returns a number as a string.

console.log(`toString() method ----> `, balance.toString());

// -----------------------------

// toFixed()	
// The toFixed() method returns a number written with a number of decimals.

console.log(`toFixed() method ----> `, balance.toFixed(2));

// -----------------------------

// toPrecision()	
// Returns a number written with a specified length

const precisionVal = 123.45;
console.log(`toPrecision() method ----> `, precisionVal.toPrecision(4));

// -----------------------------

// toLocaleString()	
// The toLocaleString() method of Number values returns a string with a language-sensitive representation of this number.
// By default it display in US format.
// Note - for indian format... we can give "en-IN"

const bigNum = 100000000;
console.log(`toLocaleString() method ----> `, bigNum.toLocaleString("en-IN"));


// -------------------------------------------------------------------------

// Note --->

// Property	            - Description
// ----------------------------------------------------------------------------
// EPSILON              - The difference between 1 and the smallest number > 1
// MAX_VALUE	        - The largest number possible in JavaScript
// MIN_VALUE	        - The smallest number possible in JavaScript
// MAX_SAFE_INTEGER	    - The maximum safe integer (253 - 1)
// MIN_SAFE_INTEGER	    - The minimum safe integer -(253 - 1)
// POSITIVE_INFINITY    - Infinity (returned on overflow)
// NEGATIVE_INFINITY    - Negative infinity (returned on overflow)
// NaN	                - A "Not-a-Number" value