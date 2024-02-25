// JavaScript Object -->
// JavaScript Object is non-primitive data type (Reference Type)
// Arrays are good but not sufficient for real world data.
// Object stores the data in key:value pairs
// Objects don't have index.
// It is a common practice to declare objects with the const keyword.

// Object Literals creation -->

const myDetails = {
    name: "Tineshwar",
    email: "tineshwar.singh@gmail.com",
    isMarried: true,
    hobbies: ["travelling", "web development"],
    "full name": "Tineshwar Singh"

    // keys are always in string format
}

console.log(myDetails);
console.log(typeof myDetails);  // object


// -------------------------------------------------------------------------

// Accesing the data of object -->
// using dot (.) notations...
console.log(`myDetails name --> `, myDetails.name);     // Tineshwar 
console.log(`myDetails email --> `, myDetails.email);   // tineshwar.singh@gmail.com

// using square bracket [] notations...
// console.log(`myDetails "full name" --> `, myDetails.full name);  // error
console.log(`myDetails "full name" --> `, myDetails["full name"]);  // Tineshwar Singh


// -------------------------------------------------------------------------

// Adding the new data in object -->
// using dot (.) notations...
myDetails.age = 22;
console.log(myDetails);

// using square bracket [] notations...
myDetails["gender"] = "male";
console.log(myDetails);


// addding symbol in the object...
let addNewVal = Symbol("DOB");
myDetails[addNewVal] = "18-03-1998";
console.log(myDetails);


// adding function...
myDetails.greetings = function() {
    console.log(`Hi, my name is ${this.name}`);
}

console.log(myDetails);
console.log(myDetails.greetings);    // this is displayed the function() return (reference of the function)
console.log(myDetails.greetings());  // this is displayed the details


// -------------------------------------------------------------------------

// singleton object -->

const myDetailsOne = new Object();  // using constructor 

myDetailsOne.id = "123ABC";
myDetailsOne.name = "Aamrapali";
myDetailsOne.isLoggedIn = false;

console.log(myDetailsOne);


// -------------------------------------------------------------------------

// nested object -->

const regularUser = {
    email: "regular@gmail.com",
    fullname: {
        userFullName: {
            firstName: "Tineshwar",
            lastName: "Singh" 
        }
    }
}

console.log(regularUser.fullname.userFullName.firstName);    // Tineshwar


// -------------------------------------------------------------------------

// Adding two objects in a new object -->
const obj1 = {
    name: "Aamrapali",
    age: 18,
}

const obj2 = {
    email: "aamrapali.singh@gmail.com",
    isMarried: false,
    name: "Deepali Singh",
}

const obj3 = {...obj1, ...obj2};

console.log(obj3);

// {name: 'Deepali Singh', age: 18, email: 'aamrapali.singh@gmail.com', isMarried: false}
// updated value of "name" to "Deepali Singh" from "Aamrapali" becuase this is overriden with latest value.

// -------------------------------------------------------------------------

// Updating the value of the 

const key1 = "1";
const key2 = "2";

const value1 = "a";
const value2 = "b";

const updatedObj = {
    [key1] : value1,
    [key2] : value2,
}

console.log(updatedObj);

// -------------------------------------------------------------------------


// Object Methods -->

// Object.create() -->
// The Object.create() is a built-in JavaScript method that allows you to create an object from a given prototype object.
// It returns a new object with the prototype set to the given object.
// This means that any properties or methods defined in the prototype will be available on the new object.

const objCreate1 = {
    username : "tineshwar_singh",
    hasInstaAccount : true
}

const objCreate2 = Object.create(objCreate1);
objCreate2.username = "tinesh";
objCreate2.hasInstaAccount = false;
objCreate2["insta bio"] = "Hi, This is Tinesh 🤞";

console.log(`objCreate1 --> `,objCreate1);
console.log(`objCreate2 --> `,objCreate2);

// -------------------------------------------------------------------------


// Object.assign() -->
// The Object.assign() method is used to copy the values of all enumerable own properties from one or more source objects to a target object.
// It returns a new object with copied data.

const objAssign1 = {
    usernameForInsta : "tineshwar_singh",
    hasInstaAccount : true
}

const objAssign2 = {
    usernameForTwitter : "tineshwar",
    hasTwitterAccount : false
}

const targetObj = {};

const objAssign3 = Object.assign(targetObj, objAssign1, objAssign2);

console.log(`objAssign3 --> `, objAssign3);

// -------------------------------------------------------------------------


// Object.freeze() -->
// The Object.freeze() method is used to freeze an object.
// Freezing an object does not allow new properties to be added to the object and prevents removing or altering the existing properties.
// Object.freeze() preserves the enumerability, configurability, writability, and prototype of the object. 
// It returns the passed object and does not create a frozen copy.

const objFreeze = {
    isFreezed : false
}

objFreeze.isFreezed = true;
console.log(`objFreeze --> `, objFreeze); // true

Object.freeze(objFreeze); // freezed the object

objFreeze.isFreezed = false;
objFreeze.isUpdated = "Yes"; // it will not update because we freezed the object
console.log(`objFreeze --> `, objFreeze); // true because we freezed the object

// -------------------------------------------------------------------------


// Object.seal() -->
// JavaScript Object.seal() method is used to seal an object. 
// Sealing an object does not allow new properties to be added and marks all existing properties as non-configurable.
// Although values of present properties can be changed as long as they are writable.

const objSeal = {
    isSealed : false
}

objSeal.isSealed = true;
console.log(`objSeal --> `, objSeal); // true

Object.seal(objSeal);

objSeal.isSealed = false;
objSeal.isUpdated = "Yes"; // it will not allow to add new property
console.log(`objSeal --> `, objSeal); // false


// -------------------------------------------------------------------------

// Note -->
// Feature                                - Object.seal()  - Object.freeze()
// Prevents adding new properties         - Yes            - Yes
// Prevents deleting existing properties  - Yes            - Yes
// Prevents modifying existing properties - No             - Yes
// Makes the object immutable             - No             - Yes

// -------------------------------------------------------------------------


const commonObj = {
    name : "tineshwar singh",
    email : "tineshwar.singh@gmail.com",
    hasGithubAccount : true
}

// Object.keys() -->
// The Object.keys() method is used to retrieve an array of the enumerable property names of an object. 
// It returns an array containing the keys of the object.

const objKeys = Object.keys(commonObj);
console.log(`commonObj keys --> `, objKeys);

// -------------------------------------------------------------------------

// Object.values() -->
// JavaScript object.values() method is used to return an array whose elements are the enumerable property values found on the object. 
// It returns an array containing the key's values of the object.

const objValues = Object.values(commonObj);
console.log(`commonObj values --> `, objValues);

// -------------------------------------------------------------------------

// Object.entries() -->
// The Object.entries() static method returns an array of a given object's own enumerable string-keyed property key-value pairs.

const objEntries = Object.entries(commonObj);
console.log(`commonObj entries --> `, objEntries);

// Note --> to show the object data in key-value pair
for(let [key, val] of objEntries) {
    console.log(`${key} : ${val}`)
}


// -------------------------------------------------------------------------


// Object.hasOwnProperty() -->
// The Object.hasOwnProperty() method is used to check the property is present in the object or not.

const checkNameProp = commonObj.hasOwnProperty("name");
console.log(`"name" property in commonObj is present --> `,checkNameProp); // true

const checkUsernameProp = commonObj.hasOwnProperty("username");
console.log(`"username" property in commonObj is present --> `,checkUsernameProp); // false
