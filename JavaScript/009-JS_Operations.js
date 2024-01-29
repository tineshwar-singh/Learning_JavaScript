// JavaScript Operations -->

// String concatination -->
let str1 = "Tinesh";
let str2 = " Singh";

let str3 = str1 + str2;
console.log(str3); // Tinesh Singh

// using string template - 
let str4 = `${str1}${str2}`;
console.log(str4); // Tinesh Singh


// String with number -->
console.log("1" + "2");     // 12
console.log(1 + "2");       // 12
console.log("1" + 2);       // 12
console.log("1" + 2 + 3);   // 123
console.log(1 + 2 + "3");   // 33


// Boolean to Number -->
console.log(+true)          // 1
console.log(+false)         // 0
console.log(+"")            // 0

// ------------------------------------------------------------------


// Increment (++) -->
// Postfix Increment -->
let postfixNum1 = 10;
let postfixNum2 = postfixNum1++;

console.log("postfixNum1", postfixNum1);  // 11
console.log("postfixNum2", postfixNum2);  // 10

// postfixNum1 = 11 and postfixNum2 = 10
// because first postfixNum1 value is assigned to postfixNum2 and then incremented


// Prefix Increment -->
let prefixNum1 = 10;
let prefixNum2 = ++prefixNum1;

console.log("prefixNum1", prefixNum1);  // 11
console.log("prefixNum2", prefixNum2);  // 11

// prefixNum1 = 11 and prefixNum2 = 11
// because first prefixNum1 value is incremented and then assigned to prefixNum2


// ------------------------------------------------------------------


// Comparison -->

console.log("2" > 1);       // true --> because "2" converts into number
console.log("02" > 1);      // true --> because "02" converts into number

console.log(null > 0);      // false
console.log(null == 0);     // false
console.log(null >= 0);     // true

// Note --> 
// Comparison Operator converts null to a number, treating it as 0.
// That's why "null >= 0 is true" and "null > 0 is false"

console.log(undefined > 0);      // false
console.log(undefined == 0);     // false
console.log(undefined >= 0);     // false

// ------------------------------------------------------------------


// Strict check (===) --> 
console.log("2" === 0);         // false --> because it checks data type also
