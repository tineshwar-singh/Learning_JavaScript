// if

// Example-1 -->

let personName = 'Tineshwar Singh';
let age = 18;

if(age>=18) {
    console.log(`${personName} can vote because your age is ${age}`);
}


// Example-2 -->
// && operator

let userLoggedIn = true;
let debitCard = true;

if(userLoggedIn && debitCard) {
    console.log('Allow to buy course');
}


// Example-3 -->
// || operator

let loggedInFromGoogle = true;
let loggedInFromEmail = false;

if(loggedInFromGoogle || loggedInFromEmail) {
    console.log('User logged in');
}

// -----------------------------------------

// if-else 

let eligibleForVote = false;

if(eligibleForVote) {
    console.log('You are eligible for vote...!!!');
} else {
    console.log('You are not eligible for vote...!!!');
}

// -----------------------------------------

// if-else if-else

let temperature = 50;

if(temperature>=50) {
    console.log(`Weather is too hot, temperature is ${temperature}`);
} else if (temperature<50 && temperature>=35) {
    console.log(`Weather is hot, temperature is ${temperature}`);
} else if (temperature<35 && temperature>=25) {
    console.log(`Weather is sunny, temperature is ${temperature}`);
} else if (temperature<25 && temperature>=15) {
    console.log(`Weather is cold, temperature is ${temperature}`);
} else {
    console.log(`Weather is too cold, temperature is ${temperature}`);
}

// -----------------------------------------


// switch case

// Example-1 -->

let day = 1;

switch (day) {
    case 1:
        console.log('Sunday...!!!');
        break;
    case 2:
        console.log('Monday...!!!');
        break;
    case 3:
        console.log('Tuesday...!!!');
        break;
    case 4:
        console.log('Wednesday...!!!');
        break;
    case 5:
        console.log('Thursday...!!!');
        break;
    case 6:
        console.log('Friday...!!!');
        break;
    case 7:
        console.log('Saturday...!!!');
        break;
    default:
        console.log('Please check the day number...!!!');
        break;
}


// Example-2 -->

let vowel = "e";

switch(vowel) {
    case 'a' :
        console.log(`${vowel} is a vowel.`);
        break;
    case 'e' :
        console.log(`${vowel} is a vowel.`);
        break;
    case 'i' :
        console.log(`${vowel} is a vowel.`);
        break;
    case 'o' :
        console.log(`${vowel} is a vowel.`);
        break;
    case 'u' :
        console.log(`${vowel} is a vowel.`);
        break;
    default:
        console.log(`${vowel} is not a vowel.`);
        break;
}
// -----------------------------------------

const username = 'tineshwar_singh';

if(username) {
    console.log("Got the username");
} else {
    console.log("Don't have username");
}


// Truthy Values -->
// true, 1, "0", "False", " ", [], {}, fucntion(){}


// Falsy Values -->
// false, 0, -0, BigInt 0n, "", null, undefined, NaN


// Example-1 -->
// check array is empty...

const arr = [];

if(arr.length == 0) {
    console.log("Array is empty");
}

// Example-2 -->
// check object is empty...
const obj = {};

if(Object.keys(obj).length == 0 ) {
    console.log("Object is empty");    
}