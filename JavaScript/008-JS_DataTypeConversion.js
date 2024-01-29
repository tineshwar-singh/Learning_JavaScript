// Data Type Conversion 

console.log("Conversion to Number -->");
// String to Number -->
let strToNum1 = "10"; //number in string
let strToNum2 = Number(strToNum1);

console.log("String to Number (number in string) - ",strToNum2);
console.log("typeof String to Number - ",typeof strToNum2);

// -------------------------------------------------------------

// another way to convert string into number -
let anotherStrToNum = +strToNum1;
console.log("String to Number (using + operator) - ",anotherStrToNum);
console.log("typeof String to Number - ",typeof anotherStrToNum);

// -------------------------------------------------------------

let strToNum3 = "ten"; //string in string
let strToNum4 = Number(strToNum3);

console.log("String to Number (char in string) - ",strToNum4); 
// ==> This will convert NaN (Not a Number)
console.log("typeof String to Number - ",typeof strToNum4);

// -------------------------------------------------------------

let strToNum5 = ""; // blank string
let strToNum6 = Number(strToNum5);

console.log("String to Number (blank string) - ",strToNum6);
console.log("typeof String to Number - ",typeof strToNum6);

// -------------------------------------------------------------

// Boolean to Number -->
// true ==> 1
// false ==> 0
let boolToNum1 = true;
let boolToNum2 = Number(boolToNum1);

console.log("Boolean to Number - ", boolToNum2);
console.log("typeof Boolean to Number - ", typeof boolToNum2);

// -------------------------------------------------------------

// null to Number -->
let nullToNumber1 = null;
let nullToNumber2 = Number(nullToNumber1);

console.log("null to Number - ", nullToNumber2);
console.log("typeof null to Number - ", typeof nullToNumber2);

// -------------------------------------------------------------

// undefined to Number -->

let undefinedToNumber1 = undefined;
let undefinedToNumber2 = Number(undefinedToNumber1);

console.log("undefined to Number - ", undefinedToNumber2); 
// ==> This will convert NaN (Not a Number)
console.log("typeof undefined to Number - ", typeof undefinedToNumber2);

console.log("-------------------------------------------------------------");
console.log("Conversion to String -->")

// Number to String -->
let numToString1 = 10;
let numToString2 = String(numToString1);

console.log("Number to String - ",numToString2);
console.log("typeof Number to String - ",typeof numToString2);

// -------------------------------------------------------------
// Boolean to String -->
// true ==> "true"
// false ==> "false"
let boolToString1 = false;
let boolToString2 = String(boolToString1);

console.log("Boolean to String - ",boolToString2);
console.log("typeof Boolean to String - ",typeof boolToString2);


// -------------------------------------------------------------

// null to String -->
let nullToString1 = null;
let nullToString2 = String(nullToString1);

console.log("null to String - ",nullToString2);
console.log("typeof null to String - ",typeof nullToString2);

// -------------------------------------------------------------

// undefined to String -->
let undefinedToString1 = undefined;
let undefinedToString2 = String(undefinedToString1);

console.log("undefined to String - ",undefinedToString2);
console.log("typeof undefined to String - ",typeof undefinedToString2);

console.log("-------------------------------------------------------------");
console.log("Conversion to Boolean -->")

// Number to Boolean -->
// 0 ==> false
// 1 ==> true
let numToBoolean1 = 10;
let numToBoolean2 = Boolean(numToBoolean1);

console.log("Number to Boolean - ",numToBoolean2);
console.log("typeof Number to Boolean - ",typeof numToBoolean2);

// -------------------------------------------------------------
// String to Boolean -->

let strToBoolean1 = "10";
let strToBoolean2 = Boolean(strToBoolean1);

console.log("String to Boolean (number in string) - ",strToBoolean2);
console.log("typeof String t Boolean - ",typeof strToBoolean2);

// -------------------------------------------------------------

let strToBoolean3 = "tinesh";
let strToBoolean4 = Boolean(strToBoolean3);

console.log("String to Boolean (char in string) - ",strToBoolean4);
console.log("typeof String t Boolean - ",typeof strToBoolean4);

// -------------------------------------------------------------

let strToBoolean5 = "";
let strToBoolean6 = Boolean(strToBoolean5);

console.log("String to Boolean (blank string) - ",strToBoolean6);
console.log("typeof String t Boolean - ",typeof strToBoolean6);

// -------------------------------------------------------------

// null to Boolean -->
let nullToBoolean1 = null;
let nullToBoolean2 = Boolean(nullToBoolean1);

console.log("null to Boolean - ",nullToBoolean2);
console.log("typeof null to Boolean - ",typeof nullToBoolean2);

// -------------------------------------------------------------

// undefined to Boolean -->
let undefinedToBoolean1 = undefined;
let undefinedToBoolean2 = Boolean(undefinedToBoolean1);

console.log("undefined to Boolean - ",undefinedToBoolean2);
console.log("typeof undefined to Boolean - ",typeof undefinedToBoolean2);

