// for Loop -->

// Example-1 -->

for (let i = 1; i <= 10; i++) {
    const element = i;
    // console.log(element);    
}

// console.log(element); 
// element is declared inside the for loop hence will not be display any value. 
// and it will throw "Reference Error".



// Example-2 -->

for (let i = 1; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is the best number");
    }
    // console.log(element);    
}



// Example-3 -->

for (let i = 1; i <= 10; i++) {
    console.log(`It is a table of ${i}`)
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i*j}`)        
    }   
}



// Example-4 -->

let myFriends = ['Vivek', 'Shivam', 'Sanjana'];

for (let index = 0; index < myFriends.length; index++) {
    const element = myFriends[index];
    console.log(element);    
}




// "break" and "continue" keywords -->

// break -->
// The break statement "jumps out" of a loop.

for (let index = 1; index <= 10; index++) {
    if(index == 5) {
        console.log("Detected 5");
        break;
    }
    console.log(`vlaue of index is ${index}`)
}


// continue -->
// The continue statement "jumps over" one iteration in the loop.

for (let index = 1; index <= 10; index++) {
    if(index == 5) {
        console.log("Detected 5");
        continue;
    }
    console.log(`vlaue of index is ${index}`)
}