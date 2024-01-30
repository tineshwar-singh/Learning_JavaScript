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


// ----------------------------------------------------------------


// String Methods -->
// Extracting String Characters -

// 1. String.charAt(position);
// The charAt() method returns the character at a specified index (position) in a string.
// If will not give position... it will display the value of 0th index
let index = 0;

console.log(`String.charAt(position) --> In "${newString}" at index of "${index}", it returns the char "${newString.charAt(index)}"`)
// Expected Result - 
// String.charAt(position) --> In "Tinesh Singh" at index of "0", it returns the char "T"

// ----------------------------------------------------------------

// 2. String.charCodeAt(position);
// The charCodeAt() method returns the code of the character at a specified index in a string:
// The method returns a UTF-16 code (an integer between 0 and 65535).

console.log(`String.charCodeAt(position) --> In "${newString}" at index of "${index}", it returns the unicode of index character which is "${newString.charCodeAt(index)}"`)
// Expected Result -
// String.charCodeAt(position) --> In "Tinesh Singh" at index of "0", it returns the unicode of index character which is "84"

// ----------------------------------------------------------------

// 3. String.at(position)
// The at() method returns the character at a specified index (position) in a string.
// If will not give position... it will display the value of 0th index

console.log(`String.at(position) --> In "${newString}" at index of "${index}", it returns the char "${newString.at(index)}"`)
// Expected Result - 
// String.charAt(position) --> In "Tinesh Singh" at index of "0", it returns the char "T"

let anoherIndex = -1;
// it returns the last character of the string.
console.log(`String.at(position) --> In "${newString}" at index of "${anoherIndex}", it returns the char "${newString.at(index)}"`)
// Expected Result - 
// String.at(position) --> In "Tinesh Singh" at index of "-1", it returns the char "h"

// ----------------------------------------------------------------

// 4. String[position]
console.log(`String[position] --> In "${newString}" at index of "${index}", it returns the char "${newString[index]}"`)
// Expected Result - 
// String[position] --> In "Tinesh Singh" at index of "0", it returns the char "T"

// ----------------------------------------------------------------

// Extracting String Parts -
// 5. String.slice(start, end)
// slice() extracts a part of a string and returns the extracted part in a new string.
// The method takes 2 parameters: start position, and end position (end not included).

// newString = "Tinesh Singh"

console.log(`newString.slice(7) --> In "${newString}", value of "newString.slice(7)" is ${newString.slice(7)}`);
// Expected output: "Singh."

console.log(`newString.slice(0, 6) --> In "${newString}", value of "newString.slice(0, 6)" is ${newString.slice(0, 6)}`);
// Expected output: "Tinesh"

console.log(`newString.slice(-5) --> In "${newString}", value of "newString.slice(-5)" is ${newString.slice(-5)}`);
// Expected output: "Singh."

console.log(`newString.slice(-5, -2) --> In "${newString}", value of "newString.slice(-5, -2)" is ${newString.slice(-5, -2)}`);
// Expected output: "Sin"

// ----------------------------------------------------------------

// 6. String.substring(start, end)
// slice() and substring() both are similar.
// The difference is that start and end values less than 0 are treated as 0 in substring().

console.log(`newString.substring(7) --> In "${newString}", value of "newString.substring(7)" is ${newString.substring(7)}`);
// Expected Output: "Singh"

console.log(`newString.substring(0,6) --> In "${newString}", value of "newString.substring(0,6)" is ${newString.substring(0,6)}`);
console.log(`newString.substring(6,0) --> In "${newString}", value of "newString.substring(6,0)" is ${newString.substring(6,0)}`);
// Expected Output: "Tinesh"

console.log(`newString.substring(7,12) --> In "${newString}", value of "newString.substring(7,12)" is ${newString.substring(7,12)}`);
console.log(`newString.substring(12,7) --> In "${newString}", value of "newString.substring(12,7)" is ${newString.substring(12,7)}`);
// Expected Output: "Singh"

// ----------------------------------------------------------------

// 7. String.substr(start, length)
// substr() is similar to slice().
// The difference is that the second parameter specifies the length of the extracted part.

console.log(`newString.substr(0,6) --> In "${newString}", value of "newString.substr(0,6)" is ${newString.substr(0,6)}`);
// Expected Output: "Tinesh"

console.log(`newString.substr(2) --> In "${newString}", value of "newString.substr(2)" is ${newString.substr(2)}`);
// Expected Output: "nesh Singh"

console.log(`newString.substr(50,10) --> In "${newString}", value of "newString.substr(50,10)" is ${newString.substr(50,10)}`);
// Expected Output: "" (blank)

// ----------------------------------------------------------------

// Converting to Upper and Lower Case -->
// 8. String.toUpperCase()
// A string is converted to upper case with toUpperCase()
console.log(`newString.toUpperCase() --> In "${newString}", return new string in uppercase "${newString.toUpperCase()}"`);
// Expected Output: "TINESH SINGH"
// ----------------------------------------------------------------

// 9. String.toLowerCase()
// A string is converted to lower case with toLowerCase()
console.log(`newString.toLowerCase() --> In "${newString}", return new string in lowercase "${newString.toLowerCase()}"`);
// Expected Output: "tinesh singh"

// ----------------------------------------------------------------

// 10. String1.concat(String2)
// concat() joins two or more strings
let str1 = "Tineshwar";
let str2 = "Singh";
let str3 = str1.concat(" ",str2);

console.log(`str1.concat(str2) -->  str1=${str1} & str2=${str2} will be "${str3}" after concatination`);
// Expected Output: "Tineshwar Singh"

// ----------------------------------------------------------------

// 11. String.trim()
// The trim() method removes whitespace from both sides of a string
let stringTrim = "     Tineshwar Singh          ";

console.log(`String.trim() --> for "${stringTrim}", it displayed the value as "${stringTrim.trim()}"`);
// Expected Output: "Tineshwar Singh"

// ----------------------------------------------------------------

// 12. String.trimStart()
// The trimStart() method removes whitespace from start of a string

console.log(`String.trimStart() --> for "${stringTrim}", it displayed the value as "${stringTrim.trimStart()}"`);
// Expected Output: "Tineshwar Singh          "

// ----------------------------------------------------------------

// 13. String.trimEnd()
// The trimEnd() method removes whitespace from end of a string

console.log(`String.trimEnd() --> for "${stringTrim}", it displayed the value as "${stringTrim.trimEnd()}"`);
// Expected Output: "     Tineshwar Singh"

// ----------------------------------------------------------------

// 14. String.padStart(length, value) 
// The padStart() method pads a string from the start.
// It pads a string with another string (multiple times) until it reaches a given length.
let stringPad = "90";

console.log(`String.padStart() --> for "${stringPad}", it displayed the value as "${stringPad.padStart(6, "x")}"`);
// Expected Output: "xxxx90"

// ----------------------------------------------------------------

// 15. String.padEnd(length, value)
// The padEnd() method pads a string from the end.
// It pads a string with another string (multiple times) until it reaches a given length.

console.log(`String.padEnd() --> for "${stringPad}", it displayed the value as "${stringPad.padEnd(6, "x")}"`);
// Expected Output: "90xxxx"

// ----------------------------------------------------------------

// 16. String.repeat(value)
// The repeat() method returns a string with a number of copies of a string.
// The repeat() method returns a new string.

let stringRepeat = "Tinesh";

console.log(`String.repeat() --> for "${stringRepeat}", it displayed the value as "${stringRepeat.repeat(3)}"`);
// Expected Output: "TineshTineshTinesh"

// ----------------------------------------------------------------

// 17. String.replace(replace_from, replace_to)
// The replace() method replaces a specified value with another value in a string
// The replace() method replaces only the first match.

console.log(`String.replace() --> for "${newString}", replacing "Tinesh" with "Raja" and it is displayed as "${newString.replace("Tinesh" , "Raja")}"`);
// Expected Output: "Raja Singh"

// ----------------------------------------------------------------

// 18. String.replaceAll(replace_from, replace_to)
// The replaceAll() method allows you to specify a regular expression instead of a string to be replaced.
// If the parameter is a regular expression, the global flag (g) must be set, otherwise a TypeError is thrown.

let stringRelaceAll = "Tineshwar Singh , Tineshwar Singh";

console.log(`String.replaceAll() --> for "${stringRelaceAll}", replacing "Tineshwar" with "Raja" and it is displayed as "${stringRelaceAll.replaceAll("Tineshwar" , "Raja")}"`);
// Expected Output: "Raja Singh , Raja Singh"

// ----------------------------------------------------------------

// Converting a String to an Array -->
// 19. String.split()
// A string can be converted to an array with the split() method.

let stringSplit = "Tineshwar";
let anotherSplittedString = stringSplit.split("");

console.log(`String.split("") --> ` ,  anotherSplittedString);
// Expected Output: (9) ['T', 'i', 'n', 'e', 's', 'h', 'w', 'a', 'r']

// ----------------------------------------------------------------
// ----------------------------------------------------------------


// JavaScript String Search -->
let searchString = "My name is Tineshwar Singh and Tineshwar Singh is a software dev. My";
let searchTerm = "Tineshwar";

// 20. String.indexOf()
// The indexOf() method returns the index (position) of the first occurrence of a string in a string, 
// it returns -1 if the string is not found

console.log(`String.indexOf(searchTerm) --> The index of the first "${searchTerm}" is ${searchString.indexOf(searchTerm)}`);
// Expected Output: 11

console.log(`String.indexOf(searchTerm, position) --> The index of the first "${searchTerm}" is ${searchString.indexOf(searchTerm, 25)}`);
// Expected Output: 31

// ----------------------------------------------------------------

// 21. String.indexOf()
// The lastIndexOf() method returns the index of the last occurrence of a specified text in a string, 
// it returns -1 if the string is not found

console.log(`String.lastIndexOf() --> The index of the last "${searchTerm}" is ${searchString.lastIndexOf(searchTerm)}`);
// Expected Output: 31

console.log(`String.lastIndexOf(searchTerm, position) --> The index of the last "${searchTerm}" is ${searchString.lastIndexOf(searchTerm, 25)}`);
// Expected Output: 11

// ----------------------------------------------------------------

// 22. String.search(searchTerm)
// The search() method searches a string for a string (or a regular expression) and returns the position of the match.

console.log(`String.search(searchTerm) --> The index of the first "${searchTerm}" is ${searchString.search(searchTerm)}`);
// Expected Output: 11

// Note -->
// The two methods, indexOf() and search(), are equal?
// They accept the same arguments (parameters), and return the same value?

// The two methods are NOT equal. These are the differences:
// --> The search() method cannot take a second start position argument.
// --> The indexOf() method cannot take powerful search values (regular expressions).

// ----------------------------------------------------------------

// 23. String.match()
// The match() method returns an array containing the results of matching a string against a string (or a regular expression).

let reg = /[A-Z]/g

console.log(`String.match() -->` , searchString.match(reg));
// Expected Output: ['M', 'T', 'S', 'T', 'S']

// ----------------------------------------------------------------

// 24. String.matchAll()
// The matchAll() method returns an iterator containing the results of matching a string against a string (or a regular expression).

console.log(`String.matchAll() -->` , searchString.matchAll("Tinesh"));
// Expected Output: It returns a iterator

// Note - we can check data with Array.from() method using this returned NodeIterator.

// ----------------------------------------------------------------

// 25. String.includes()
// The includes() method returns true if a string contains a specified value, otherwise it returns false.

let searchWord = "Tineshwar";
console.log(`String.includes() --> The word "${searchWord}" is present in `,searchString.includes(searchWord));
// Expected Output: true

console.log(`String.includes(searchWord, position) --> The word "${searchWord}" is present in `,searchString.includes(searchWord, 35));
// Expected Output: false

// ----------------------------------------------------------------

// 26. String.startsWith()
// The startsWith() method returns true if a string begins with a specified value, otherwise it returns false.

let startsWithWord = "My";
console.log(`String.startsWith() --> The word "${startsWithWord}" is present in `,searchString.startsWith(startsWithWord));
// Expected Output: true

console.log(`String.startsWith(searchWord, position) --> The word "${startsWithWord}" is present in `,searchString.startsWith(startsWithWord, 35));
// Expected Output: false

// ----------------------------------------------------------------

// 27. String.endsWith()
// The endsWith() method returns true if a string begins with a specified value, otherwise it returns false.

let endsWithWord = "My";
console.log(`String.endsWith() --> The word "${endsWithWord}" is present in `,searchString.endsWith(endsWithWord));
// Expected Output: true

console.log(`String.endsWith(searchWord, position) --> The word "${endsWithWord}" is present in `,searchString.endsWith(endsWithWord, 0));
// Expected Output: false

// ----------------------------------------------------------------
