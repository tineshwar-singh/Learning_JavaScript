//? Operators in JavaScript 
//* In JavaScript, an operator is a special symbol 
//* Which is used to perform operations on operands (values and variables).

console.log("--- 006-JS_Operators.js ---");


let firstNumber = 5;
let secondNumber = 2;

//? Arithmetic Operators -

console.log("Arithmetic Operators -");
console.log("--------------------");
console.log("+ Addition - " + (firstNumber + secondNumber));
console.log("- Subtraction - " + (firstNumber - secondNumber));
console.log("* Multiplication - " + (firstNumber * secondNumber));
console.log("**	Exponentiation (Power) - " + (firstNumber ** secondNumber));
console.log("/ Division - " + (firstNumber / secondNumber));
console.log("% Modulus (Remainder) - " + (firstNumber % secondNumber));
firstNumber++;
console.log("++	Increment (increment by 1) - " + (firstNumber));
secondNumber--;
console.log("--	Decrement (decrement by 1) - " + (secondNumber));


//? Assignment Operators -
console.log("Assignment Operators -");
console.log("--------------------");
let numberAssignment = 10; 
console.log("= Assignment - " + numberAssignment);

let numberAddition = 10; 
numberAddition+=5; //! numberAddition = numberAddition + 5
console.log("+= Addition Assignment - " + numberAddition);

let numberSubtraction = 10; 
numberSubtraction-=2; //! numberSubtraction = numberSubtraction - 2
console.log("-= Subtraction Assignment - " + numberSubtraction);

let numberMultiplication = 10; 
numberMultiplication*=2; //! numberMultiplication = numberMultiplication * 2
console.log("*= Multiplication Assignment - " + numberMultiplication);

let numberExponentiation = 10; 
numberExponentiation**=2; //! numberExponentiation = numberMultiplication ** 2
console.log("*= Exponentiation Assignment - " + numberExponentiation);

let numberDivision = 10; 
numberDivision/=2; //! numberDivision = numberDivision / 2
console.log("/= Division Assignment - " + numberDivision);

let numberModulus = 10; 
numberModulus%=3; //! numberModulus = numberModulus % 3
console.log("%= Modulus Assignment - " + numberModulus);

//? Comparison Operators -
console.log("Comparison Operators -");
console.log("--------------------");
console.log("Returns 'true' if x==y, (==	equal to)");
console.log("Returns 'true' if x===y, (===	equal value and equal type)");
console.log("Returns 'true' if x!=y, (!=	not equal)");
console.log("Returns 'true' if x!==y, (!==	not equal value or not equal type)");
console.log("Returns 'true' if x>y, (>	greater than)");
console.log("Returns 'true' if x<y, (<	less than)");
console.log("Returns 'true' if x>=y, (>=	greater than or equal to)");
console.log("Returns 'true' if x<=y, (<=	less than or equal to)");

//? Logical Operators
console.log("Logical Operators -");
console.log("--------------------");
console.log("Returns 'true' if condition_1 and condition_2 both true, else returns 'false' (&& logical and)");
console.log("Returns 'true' if condition_1 or condition_2 anyone true, else returns 'false' (|| logical or)");
console.log("Returns 'true' if other condition is 'false' and vise-versa (!	logical not)");