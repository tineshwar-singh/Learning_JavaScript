// while loop -->

// Example-1 -->

let index = 0;
while (index <= 10) {
    console.log(`value of index is ${index}`);
    index = index+2;
}


// Example-2 -->

let myFriends = ['Sanjana','Vivek', 'Shivam'];

let i = 0;
while (i < myFriends.length) {
    console.log(myFriends[i]);
    i++;
}


// -------------------------------------------------------

// do-while loop -->

// Example-1 -->

let score = 0;

do {
    console.log(`Score is ${score}`);
    score++;
} while (score <= 10);



// Example-2 -->

let superHeros = ['Ironman','Batman', 'Spiderman'];

let num = 0;
do {
    console.log(superHeros[num]);
    num++;
} while (num < superHeros.length);



// Special case -->

let printName = 'tineshwar_singh_';

let n = 6;
do {
    console.log(`${printName}${n}`);
    n++;
} while (n <= 5)

// output --> tineshwar_singh_6 
// because in do-while loop code runs first and condition checks later.