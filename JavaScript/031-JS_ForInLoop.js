// for...in loop -->
// The JavaScript for in statement loops through the properties of an Object.
// It will return key only.

// Array -->
const superHeros = ['batman', 'spiderman', 'ironman', 'thor', 'deadpool'];

for (const superHero in superHeros) {
    console.log(superHero); // it will return index only
}



// String -->
const myName = 'vivek';

for (const eachWord in myName) {
    console.log(eachWord); // it will return index only
}



// Object -->
const languages = {
    js : 'JavaScript',
    rb : 'Ruby',
    py : 'Python'
}

for (const lang in languages) {
    console.log(lang); // it will return keys    
    console.log(languages[lang]); // it will return values
}

