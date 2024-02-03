// JavaScript Math -->
// The JavaScript Math object allows you to perform mathematical tasks on numbers.

// Math Methods -->

// Math.abs();
// The Math.abs() method returns the absolute value of a number.

let negNum = -100;
console.log(`Math.abs() --->`, Math.abs(negNum));

// -----------------------------

// Math.round();
// The Math.round() method rounds a number to the nearest integer.

let decimalNum = 4.51;
console.log(`Math.round() --->`, Math.round(decimalNum));

// -----------------------------

// Math.ceil();
// The Math.ceil() method rounds a number rounded UP to the nearest integer.

let ceilNum = 4.1;
console.log(`Math.ceil() --->`, Math.ceil(ceilNum));

// -----------------------------

// Math.floor();
// The Math.floor() method rounds a number DOWN to the nearest integer.

let floorNum = 4.9;
console.log(`Math.floor() --->`, Math.floor(floorNum));

// -----------------------------

// Math.min();
// The Math.min() method returns the number with the lowest value.

console.log(`Math.min() --->`, Math.min(5, 1, 9, 4, 2));

// -----------------------------

// Math.max();
// The Math.max() method returns the number with the highest value.

console.log(`Math.max() --->`, Math.max(5, 1, 9, 4, 2));

// -------------------------------------------------------------------------


// Math.random();
// The Math.random() method returns a random number from 0 (inclusive) up to but not including 1 (exclusive).
console.log(`Math.random(), return between 0-1 ---> `,Math.random());

// Return a random number between 0 and 10:
console.log(`Math.random(), return between 0-10 ---> `,Math.random()*10);

// Return a random number between 0 and 100:
console.log(`Math.random(), return between 0-100 ---> `,Math.random()*100);

// A random whole number between 1 and 10:
console.log(`Math.random(), return between 1-10 ---> `,(Math.random()*10)+1);
console.log(`Math.random(), return between 1-10 ---> `,Math.floor(Math.random()*10)+1);


// Trick to define min and max -->
const min = 10;
const max = 20;

let randomNum = Math.random() * (max - min + 1) + min;
console.log(`random number with decimal between ${min} - ${max} ---> `, randomNum);

let finalNum = Math.floor(randomNum);
console.log(`random number without decimal between ${min} - ${max} ---> `, finalNum);
