
// ? JavaScript Introduction -->
// * --> JavaScript is the world's most popular programming language.
// * --> JavaScript is the programming language of the Web.
// * --> JavaScript is easy to learn.
// * --> This tutorial will teach you JavaScript from basic to advanced.


// ? Why Study JavaScript -->
// * JavaScript is one of the 3 languages all web developers must learn :-
// * --> HTML to define the content of web pages.
// * --> CSS to specify the layout of web pages.
// * --> JavaScript to program the behavior of web pages.


// !  Commonly Asked Questions -->
// ? How do I get JavaScript?
// * --> You don't have to get or download JavaScript.
// ? Where can I download JavaScript?
// * --> JavaScript is already running in your browser on your computer, on your tablet, and on your smart-phone.
// ? Is JavaScript Free?
// * --> JavaScript is free to use for everyone.


// ? JavaScript Features -->
// * --> JavaScript can change HTML Content.
// * --> JavaScript can change HTML Attribute Values.
// * --> JavaScript can change HTML Styles (CSS).
// * --> JavaScript can hide HTML Elements.
// * --> JavaScript can show HTML Elements.


// ? JavaScript History  -->
// * --> JavaScript was invented by Brendan Eich in 1995.
// * --> It was developed for Netscape (Organization), and became the ECMA-262 standard in 1997.
// * --> ECMAScript is the official name of the language.
// * --> JavaScript Versions :-
// ?       1997 ==> ES1
// ?       2009 ==> ES5
// ?       2015 ==> ES6 (Modern JavaScript)
// ?       2022 ==> ES2022 (Current Version)


// !  Note :-
// ? JavaScript is backward compatible -->
// * --> means old features will work properly which are actually introduced in 10-15 years back.
// ? JavaScript is not forwad compatible -->
// * --> means newly introduced features will not work with old version browsers.


// ? JavaScript Where To Add in HTML -->
// ? Internal Way :-
// * -->  JavaScript in <head>
// *       <html>
// !          <head>
// !             <script>
// !                console.log("JavaScript in Head Tag");
// !             </script>
// !          </head>
// *          <body>
// *          </body>
// *       </html>

// * -->  JavaScript in <body>
// *       <html>
// *         <head>
// *         </head>
// !         <body>
// !            <script>
// !               console.log("JavaScript in Body Tag");
// !            </script>
// !         </body>
// *      </html>

// ? External Way :-
// * --> External file: myScript.js
// *      code in myScript.js file -->
// *      =>> console.log("JavaScript External Way");
// * --> JavaScript files have the file extension ".js".
// * --> To use an external script, put the name of the script file in the src (source) attribute of a <script> tag:
// *      Example :-
// *      <html>
// *        <head>
// *        </head>
// !          <body>
// !             <script src="myScript.js"></script>
// !          </body>
// *      </html>

// ? External JavaScript Advantages -->
// * --> It separates HTML and code.
// * --> It makes HTML and JavaScript easier to read and maintain.
// * --> To add several script files to one page -- use several script tags.
// !     - <script src="myScript1.js"></script>
// !     - <script src="myScript2.js"></script>


// ? Javascript Output -->
// * --> Writing into an HTML element, using innerHTML.
// * --> Writing into the HTML output using document.write().
// * --> Writing into an alert box, using window.alert().
// * --> Writing into the browser console, using console.log().


console.log("--- 001-JS_Intoroduction.js ---");
// TODO : Hello World program in JavaScript -
   console.log("Hello World");

// ! Note :-
// ! For debugging purposes, we can use the "console.log()" method in the browser to display data.


// ? JavaScript Keywords -->
// * --> JavaScript statements start with a keyword to identify the JavaScript action to be performed.
// * --> Keyword    --> Description
// *     -------       -----------
// *     var        --> Declares a variable
// *     let	    --> Declares a block variable
// *     const      --> Declares a block constant
// *     if         --> Marks a block of statements to be executed on a condition
// *     switch     --> Marks a block of statements to be executed in different cases
// *     for        --> Marks a block of statements to be executed in a loop
// *     function	--> Declares a function
// *     return	    --> Exits a function
// *     try        -->	Implements error handling to a block of statements

// ! Note :- 
// !JavaScript keywords are reserved words. Reserved words cannot be used as names for variables.


// ? Javascript Comments -->
// * --> Single Line Comments
// * --> Single line comments start with //.
// * --> Example :- 
// !     // console.log("single line comment");

// * --> Multi-line Comments
// * --> Multi-line comments start with /* and end with */.
// * --> Example :-
// !     /* console.log("Multi line comment") */

// ! Any text between // and /* */ line will be ignored by JavaScript and will not be executed.
// ! It is most common to use single line comments.
// ! Block comments are often used for formal documentation.

