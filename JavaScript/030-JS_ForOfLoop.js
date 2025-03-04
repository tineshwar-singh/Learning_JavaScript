// for...of loop -->
// The JavaScript for of statement loops through the values of an iterable object.

// Array -->
const fruits = ['apple', 'mango', 'banana', 'grapes', 'orange'];

for (const fruit of fruits) {
    console.log(fruit);
}



// String -->
const myName = 'tineshwar singh';

for (const eachWord of myName) {
    console.log(eachWord);
}



// Object -->
const empDetails = {
    emp1 : 'tineshwar',
    emp2 : 'bhatia',
    emp3 : 'mishra'
}

for (const empDetail of empDetails) {
    console.log(empDetails[empDetail]); // error - Uncaught TypeError
}
// for...of loop will throw error because Object is not iterable.



