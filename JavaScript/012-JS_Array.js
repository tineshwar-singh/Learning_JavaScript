// JavaScript Array -->
// In JavaScript, arrays are non-primitives type or Reference Type.
// JavaScript arrays are resizable and can contain a mix of different data types.
// It is a common practice to declare arrays with the const keyword.
// The typeof of the array is "Object".

// Creating an Array -->
const bike = ["Activa", "Bullet", "Shine", "Delux"];
const car = ["Echo", "Dzire"];

// Creating an Array with the new keyword -->
const array = new Array(1, 2, 3, 4, 5);
console.log(array);
// Expected Result -->
// (5) [1, 2, 3, 4, 5]

// Accessing the value of an Array -->
let accessArrayElement = bike[0];
console.log(`Value of bike[0] is "${accessArrayElement}"`);
// Expected Result -->
// Value of bike[0] is "Activa"

console.log("----------------------------");
// ----------------------------------------------------------------

// Array Property -->
// 1. Array.length
// The length data property of an Array instance represents the number of elements in that array.
console.log(`length of the bike array is "${bike.length}"`);

// Expected Result -->
// length of the bike array is "4"

console.log("----------------------------");
// ----------------------------------------------------------------


// Array Methods -->
// Array.push();
// The push() method adds new items to the end of an array.
// The push() method changes the length of the array.
// The push() method returns the new length.

console.log(`value of array before push() method`,bike);
bike.push("GT650");

console.log(`value of array after push() method`,bike);

// Expected Result -->
// value of array before push() method (4) ['Activa', 'Bullet', 'Shine', 'Delux']
// value of array after push() method (5) ['Activa', 'Bullet', 'Shine', 'Delux', 'GT650']


console.log("----------------------------");
// ----------------------------------------------------------------

// Array.pop();
// The pop() method removes (pops) the last element of an array.
// The pop() method changes the original array.
// The pop() method returns the removed element.

console.log(`value of array before pop() method`,bike);
bike.pop();

console.log(`value of array after pop() method`,bike);

// Expected Result -->
// value of array before pop() method (5) ['Activa', 'Bullet', 'Shine', 'Delux', 'GT650']
// value of array after pop() method (4) ['Activa', 'Bullet', 'Shine', 'Delux']


console.log("----------------------------");
// ----------------------------------------------------------------

// Array.unshift();
// The unshift() method adds new elements to the beginning of an array.
// he unshift() method overwrites the original array.

console.log(`value of array before unshift() method`,bike);
bike.unshift("GT650");

console.log(`value of array after unshift() method`,bike);

// Expected Result -->
// value of array before unshift() method (4) ['Activa', 'Bullet', 'Shine', 'Delux']
// value of array after unshift() method (5) ['GT650', 'Activa', 'Bullet', 'Shine', 'Delux']

console.log("----------------------------");
// ----------------------------------------------------------------

// Array.shift();
// The shift() method removes the first item of an array.
// The shift() method changes the original array.
// The shift() method returns the shifted element.

console.log(`value of array before shift() method`,bike);
bike.shift();

console.log(`value of array after shift() method`,bike);

// Expected Result -->
// value of array before shift() method (5) ['GT650', 'Activa', 'Bullet', 'Shine', 'Delux']
// value of array after shift() method (4) ['Activa', 'Bullet', 'Shine', 'Delux']


console.log("----------------------------");
// ----------------------------------------------------------------

// Array.includes();
// The includes() method returns true if an array contains a specified value.
// The includes() method returns false if the value is not found.
// The includes() method is case sensitive.

let checkIncludes = "Activa";
let checkIncludesFrom = 2;

bike.includes(checkIncludes);
console.log(`value of "${checkIncludes}" checking with includes() method`,bike.includes(checkIncludes));

console.log(`value of "${checkIncludes}" with index from "${checkIncludesFrom}" checking with includes() method`,bike.includes(checkIncludes, checkIncludesFrom));

// Expected Result -->
// value of "Activa" checking with includes() method true
// value of "Activa" with index from "2" checking with includes() method false


console.log("----------------------------");
// ----------------------------------------------------------------

// Array.indexOf();
// The indexOf() method returns the first index (position) of a specified value.
// The indexOf() method returns -1 if the value is not found.
// The indexOf() method starts at a specified index and searches from left to right (from he given start postion to the end of the array).
// By default the search starts at the first element and ends at the last.

let checkIndexOf = "Activa";
let checkIndexOfFrom = 2;

bike.indexOf(checkIndexOf);
console.log(`value of "${checkIndexOf}" checking with indexOf() method`,bike.indexOf(checkIndexOf));

console.log(`value of "${checkIndexOf}" with index from "${checkIndexOfFrom}" checking witebike.indexOf() method`,bike.indexOf(checkIndexOf, checkIndexOfFrom));

// Expected Result -->
// value of "Activa" checking with indexOf() method 0
// value of "Activa" with index from "2" checking witebike.indexOf() method -1


console.log("----------------------------");
// ----------------------------------------------------------------

// Array.lastIndexOf();
// The lastIndexOf() method returns the last index (position) of a specified value.
// The lastIndexOf() method returns -1 if the value is not found.
// The lastIndexOf() starts at a specified index and searches from right to left (from the given postion to the beginning of the array).
// By defalt the search starts at the last element and ends at the first.

let checkLastIndexOf = "Delux";
let checkLastIndexOfFrom = 0;

bike.lastIndexOf(checkLastIndexOf);
console.log(`value of "${checkLastIndexOf}" checking with lastIndexOf() method`,bike.lastIndexOf(checkLastIndexOf));

console.log(`value of "${checkLastIndexOf}" with index from "${checkLastIndexOfFrom}" checking witebike.lastIndexOf() method`,bike.lastIndexOf(checkLastIndexOf, checkLastIndexOfFrom));

// Expected Result -->
// value of "Delux" checking with lastIndexOf() method 3
// value of "Delux" with index from "0" checking witebike.lastIndexOf() method -1


console.log("----------------------------");
// ----------------------------------------------------------------

// Array.join();
// The join() method returns an array as a string.
// The join() method does not change the original array.
// In join() method - Any separator can be specified. The default is comma (,).

let join = bike.join(" & ");

console.log(`value of array after join() method`,join);

// Expected Result -->
// value of array after join() method Activa & Bullet & Shine & Delux


console.log("----------------------------");
// ----------------------------------------------------------------

// Array.toString();
// The toString() method also returns an array as a string.
// The toString() method also does not change the original array.
// In toString() method - separator cannot be specified. The default is comma (,).

let toString = bike.toString();

console.log(`value of array after toString() method`,toString);

// Expected Result -->
// value of array after toString() method Activa,Bullet,Shine,Delux


console.log("----------------------------");
// ----------------------------------------------------------------

// Array.slice();
// The slice() method returns selected elements in an array, as a new array.
// The slice() method selects from a given start, up to a (not inclusive) given end.
// The slice() method does not change the original array.
// The slice() method will not include end value.

const bikes = ["Activa", "Bullet", "Shine", "Delux"];
const cars = ["Echo", "Dzire"];

console.log(`value of array before slice() method`,bikes);

let slice = bikes.slice(0,2);

console.log(`slice() method -->`,slice);
console.log(`value of array after slice() method`,bikes);

// Expected Result -->
// value of array before slice() method (4) ['Activa', 'Bullet', 'Shine', 'Delux']
// slice() method --> (2) ['Activa', 'Bullet']
// value of array after slice() method (4) ['Activa', 'Bullet', 'Shine', 'Delux']


console.log("----------------------------");
// ----------------------------------------------------------------

// Array.splice();
// The splice() method adds and/or removes array elements.
// The splice() method overwrites the original array.

console.log(`value of array before splice() method`,bikes);

let splice = bikes.splice(0,2);

console.log(`splice() method -->`,splice);
console.log(`value of array after splice() method`,bikes);

// Expected Result -->
// value of array before splice() method (4) ['Activa', 'Bullet', 'Shine', 'Delux']
// splice() method --> (2) ['Activa', 'Bullet']
// value of array after splice() method (2) ['Shine', 'Delux']


console.log("----------------------------");
// ----------------------------------------------------------------

// Array.concat();
// The concat() method concatenates (joins) two or more arrays.
// The concat() method returns a new array, containing the joined arrays.
// The concat() method does not change the existing arrays.

// Examples - 
// const bike = ["Activa", "Bullet", "Shine", "Delux"];
// const car = ["Echo", "Dzire"];

const concat = bike.concat(car);

console.log(`value of bike array`, bike);
console.log(`value of car array`, car);
console.log(`value of array after concat() method`, concat);

// Expected Result -->
// value of bike array (4) ['Activa', 'Bullet', 'Shine', 'Delux']
// value of car array (2) ['Echo', 'Dzire']
// value of array after concat() method (6) ['Activa', 'Bullet', 'Shine', 'Delux', 'Echo', 'Dzire']


console.log("----------------------------");
// ----------------------------------------------------------------

// Array.flat();
// The flat() method concatenates sub-array elements.
// The flat() method will return new array with all sub-array elements.
// The flat() mehtod does not change the existing array.
// We can provide depth also which is totally optional, default value is 1.

const vehical = [["Activa", ["Bullet", "Shine"], "Delux"], ["Echo", "Dzire"], "GT650"];

const flat = vehical.flat(Infinity);
// Given Infinity which will handle the depth of the sub-array elements automatically.

console.log(`value of array after flat() method`, flat);
console.log(`value of vehical array is`, vehical);

// Expected Result -->
// value of array after flat() method (7) ['Activa', 'Bullet', 'Shine', 'Delux', 'Echo', 'Dzire', 'GT650']
// value of vehical array is (3) [Array(3), Array(2), 'GT650']


console.log("----------------------------");
// ----------------------------------------------------------------

// Array.isArray();
// Array.isArray() is a static property of the JavaScript Array object.
// You can only use it as Array.isArray().

const checkIsArray = [1,2,3];
console.log(`Is checkIsArray array...??? using Array.isArray() method `, Array.isArray(checkIsArray));

// Expected Result -->
// Is checkIsArray array...??? using Array.isArray() method  true


console.log("----------------------------");
// ----------------------------------------------------------------

// Array.from();
// The Array.from() method returns an array from any object with a length property.
// The Array.from() is a static property of the JavaScript Array object.
// You can only use it as Array.from().
// note - It will return blank array if does not able to convert Example - Array.from({name: "Tinesh"})

let from = Array.from("Tinesh");

console.log(`value of from after Array.from() method `, from);

// Expected Result -->
// value of from after Array.from() method  (6) ['T', 'i', 'n', 'e', 's', 'h']

console.log("----------------------------");
// ----------------------------------------------------------------

// Array.of();
// The Array.of() method creates a new array from any number of arguments.
// The Array.of() method can take any type of arguments.

let fruits = Array.of("Banana", "Orange", "Apple", "Mango", 1, 2, 3);

console.log(`value of fruits after Array.of() method `, fruits);

// Expected Result -->
// value of fruits after Array.of() method  (7) ['Banana', 'Orange', 'Apple', 'Mango', 1, 2, 3]