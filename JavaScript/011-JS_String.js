// JavaScript String -->
// Javascript strings are primitive and immutable
// All string methods produces a new string without altering the original string.


let firstName = "Tineshwar";
let lastName = "Singh";

// old way -
let fullName = firstName + " " + lastName;
console.log(fullName);

// new way - recommended (Template String)
let fullNameNew = `my first name is ${firstName} and last name is ${lastName}`;
console.log(fullNameNew);

// ----------------------------------------------------------------
// Note -->
// Normally, JavaScript strings are primitive values, created from literals:
let x = "Tinesh";

// But strings can also be defined as objects with the keyword new:
let y = new String("Tinesh");


// ----------------------------------------------------------------


// String Property -->
// 1. String.length -
let stringLength = "Tineshwar Singh";
console.log(`stringLength of "${stringLength}" - ${stringLength.length}`);

let newString = "Tinesh Singh";

// String Methods -->
// Extracting String Characters -

// 1. String.charAt(position);
// The charAt() method returns the character at a specified index (position) in a string.
// If will not give position... it will display the value of 0th index
let stringCharAt = newString.charAt(0);
console.log(stringCharAt);      // T


// 2. String.charCodeAt(position);
// The charCodeAt() method returns the code of the character at a specified index in a string:
// The method returns a UTF-16 code (an integer between 0 and 65535).
// If will not give position... it will display the value of 0th index
let stringCharCodeAt = newString.charCodeAt(0);
console.log(stringCharCodeAt);  // 84 - Unicode of character "T"


// 3. String.at(position)
// The at() method returns the character at a specified index (position) in a string.
// If will not give position... it will display the value of 0th index
let stringAt = newString.at(0);
console.log(stringAt);          // T


// 4. String[position];
let stringArray = newString[0];
console.log(stringArray);       // T