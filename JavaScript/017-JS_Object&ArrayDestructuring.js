// Object Destructuring -->
// It is just a syntactic sugar...


const personalObject = {
    username : "tineshwar_singh",
    hasGithubAccount : true,
    age: 25,
    userFullName : {
        FullName : {
            firstName : "Tineshwar",
            lastName : "Singh"
        }
    }
}

// to get the value from object without object destructuring...

// to get username -->
console.log(`username --> `,personalObject.username);

// to get firstName -->
console.log(`firstName --> `,personalObject.userFullName.FullName.firstName);

// -----------------------------------------------------

// to get the value from object with object destructuring...
const {username : uName, hasGithubAccount : githubAcc} = personalObject;

// to get the username -->
console.log(`username --> `,uName);

// -----------------------------------------------------

// to get the value from the nested object with object destructuring...
const { userFullName:{FullName:{firstName : fName, lastName : lName}}} = personalObject;

// to get the firstName -->
console.log(`firstName -->`, fName);


// -------------------------------------------------------------------------------------

// Array Destructuring -->

const myFriends = ["Sanjana", "Vivek", "Shivam"];

const [index0, index1, index2] = myFriends;

console.log(`index0 -->`, index0);
console.log(`index1 -->`, index1);
console.log(`index2 -->`, index2);

