// JavaScript Date & Time -->
// JavaScript Date objects represent a single moment in time in a platform-independent format.
// Date objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970, UTC.

let myDate = new Date();

console.log(`typeof Date object --> `,typeof myDate);   // Object

// Displaying the Date object value in different formats -->
console.log(`toString() method           --> `,myDate.toString());           // - Sun Feb 04 2024 22:34:24 GMT+0530 (India Standard Time)
console.log(`toDateString() method       --> `,myDate.toDateString());       // - Sun Feb 04 2024
console.log(`toISOString() method        --> `,myDate.toISOString());        // - 2024-02-04T17:04:24.356Z
console.log(`toJSON() method             --> `,myDate.toJSON());             // - 2024-02-04T17:04:24.356Z
console.log(`toLocaleDateString() method --> `,myDate.toLocaleDateString()); // - 2/4/2024
console.log(`toLocaleString() method     --> `,myDate.toLocaleString());     // - 2/4/2024, 10:34:24 PM
console.log(`toTimeString() method       --> `,myDate.toTimeString());       // - 22:34:24 GMT+0530 (India Standard Time)
console.log(`toUTCString() method        --> `,myDate.toUTCString());        // - Sun, 04 Feb 2024 17:04:24 GMT


// Creating Date Objects -->
// Date objects are created with the new Date() constructor.
// There are 9 ways to create a new date object:

// 1. new Date()
// 2. new Date(date_string)
// 3. new Date(year,month)
// 4. new Date(year,month,day)
// 5. new Date(year,month,day,hours)
// 6. new Date(year,month,day,hours,minutes)
// 7. new Date(year,month,day,hours,minutes,seconds)
// 8. new Date(year,month,day,hours,minutes,seconds,ms)
// 9. new Date(milliseconds)

let myCreatedDate_One = new Date(2022, 1, 5);
console.log(myCreatedDate_One);
// Expected Result - Mon Feb 05 2024 00:00:00 GMT+0530 (India Standard Time)


let myCreatedDate_Two = new Date(2022, 1, 5, 9, 30);
console.log(myCreatedDate_Two);
// Expected Result - Sat Feb 05 2022 09:30:00 GMT+0530 (India Standard Time)

// Note - JavaScript counts months from 0 to 11  -->  January = 0 & December = 11.


let myCreatedDate_Three = new Date("2022-02-05"); // YYYY-MM-DD - US format
console.log(myCreatedDate_Three);
// Expected Result - Sat Feb 05 2022 05:30:00 GMT+0530 (India Standard Time)


let myCreatedDate_four = new Date("02-05-2022"); // MM-DD-YYYY - Indian format
console.log(myCreatedDate_four);
// Expected Result - Sat Feb 05 2022 05:30:00 GMT+0530 (India Standard Time)


// -----------------------------------------------------------------------------

// Date.now()
// The Date.now() static method returns the number of milliseconds elapsed since the epoch, 
// which is defined as the midnight at the beginning of January 1, 1970, UTC.

let myTimeStamp = Date.now();
console.log(myTimeStamp);

// Converting miliseconds into seconds -->
console.log(Math.floor(Date.now()/1000));
// Expected Result --> it will show the second 

// -----------------------------------------------------------------------------


// Date Get Methods -->
// In JavaScript, date objects are created with new Date().
// new Date() returns a date object with the current date and time.

// Method	            Description
// ------------------------------------------------------------------
// getFullYear()	    Get year as a four digit number (yyyy)
// getMonth()	        Get month as a number (0-11)
// getDate()	        Get day as a number (1-31)
// getDay()	            Get weekday as a number (0-6)
// getHours()	        Get hour (0-23)
// getMinutes()	        Get minute (0-59)
// getSeconds()	        Get second (0-59)
// getMilliseconds()	Get millisecond (0-999)
// getTime()	        Get time (milliseconds since January 1, 1970)


let currentDate = new Date();

console.log(`getFullYear()              --> `,currentDate.getFullYear());       // - 2024
console.log(`getMonth() method          --> `,currentDate.getMonth());          // - 1
console.log(`getDate() method           --> `,currentDate.getDate());           // - 4
console.log(`getDay() method            --> `,currentDate.getDay());            // - 0
console.log(`getHours() method          --> `,currentDate.getHours());          // - Get hours
console.log(`getMinutes() method        --> `,currentDate.getMinutes());        // - Get minutes
console.log(`getSeconds() method        --> `,currentDate.getSeconds());        // - Get seconds
console.log(`getMilliseconds() method   --> `,currentDate.getMilliseconds());   // - Get miliseconds
console.log(`getTime() method           --> `,currentDate.getTime());           // - Get time (milliseconds since January 1, 1970)


// Note -->
// Months --> 
// In JavaScript, January is month number 0, February is number 1, ... December is month number 11.
// You can use an array of names to return the month as a name:
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const showMonth = new Date();
let month = months[showMonth.getMonth()];
console.log(month);


// Days -->
// In JavaScript, the first day of the week (day 0) is Sunday.
// You can use an array of names, and getDay() to return weekday as a name:
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const showDay = new Date();
let day = days[showDay.getDay()];
console.log(day);

// -----------------------------------------------------------------------------

// International Standard -->

let newDate = new Date();

console.log(newDate.toLocaleDateString("en-US")); // In US Format -- month-day-year
console.log(newDate.toLocaleDateString("en-IN")); // In Indian Format -- day-month-year
console.log(newDate.toLocaleDateString("ko-KR")); // In Korean Format -- year-month-day