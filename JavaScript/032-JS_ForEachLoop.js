// forEach loop -->
// The forEach() method calls a function for each element in an array.
// The forEach() method is not executed for empty elements.

const programming = ['HTML', 'CSS', 'JavaScript', 'ReactJS', 'Tailwind'];

// with annonymous function -
programming.forEach(function(item) {
    console.log(item);    
})

// with arrow function -
programming.forEach((item) => {
    console.log(item);    
})

// with delaring the function -
function displayItem(item) {
    console.log(item)
}
programming.forEach(displayItem);


// forEach function details -
programming.forEach( (item, index, arrayList) => {
    console.log(item, index, arrayList);
})

// item      --> items of an array
// index     --> index of an array
// arrayList --> complete array 



// Special Case -->
// [{}, {}, {}, {}, {}]

const tineshLearning = [
    {
        language : 'HTML',
        completeInDays : 7
    },
    {
        language : 'CSS',
        completeInDays : 10
    },
    {
        language : 'JavaScript',
        completeInDays : 30
    },
    {
        language : 'React',
        completeInDays : 20
    }
];

tineshLearning.forEach( (item) => {
    console.log(item.language);
    console.log(item.completeInDays);
});