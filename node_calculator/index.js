const readline = require("readline-sync")

//ask the user to enter two numbers for a sum result
//each number will be logged in a variable
//paseInt will convert user input from a string to a number

console.log(' ');
console.log('Hello! We will be performing basic calculator tasks.');
console.log('Please answer the following...');
console.log(' ');

const num1Sum = parseInt(readline.question('Choose a number: '));

//log the number that the user has chosen

console.log('Okay, you have chosen number ' + num1Sum);

//do the same for the second number
//then console log the sum of both

const num2Sum = parseInt(readline.question('Choose another number: '));

//add a variable that equals the sum of both numbers

const sum = num1Sum + num2Sum;

console.log(num1Sum + ' + ' + num2Sum + ' = ' + sum);

//let the user know we are moving on

console.log('Great. On to the next one...');
console.log(' ');

//now, make another function that MULTIPLIES two numbers

const num1Mult = parseInt(readline.question('Choose a number: '));
console.log('Okay, you have chosen number ' + num1Mult + '. We will be multiplying this time.');

const num2Mult = parseInt(readline.question('Choose another number: '));

const multiplication = num1Mult * num2Mult;

console.log(num1Mult + ' x ' + num2Mult + ' = ' + multiplication + '. Well done!');
console.log(' ');

//make another function that DIVIDES two numbers

const num1Div = parseInt(readline.question('This time, we will be performing a division. Choose a number: '));
console.log('Okay, you have chosen number ' + num1Div);

const num2Div = parseInt(readline.question('Choose another number: '));

const division = num1Div / num2Div;

console.log(num1Div + ' / ' + num2Div + ' = ' + division + '. AMAZING!');
console.log(' ');

//and ... another one that SUBSTRACTS

const num1Sub = parseInt(readline.question('This time we will substract. Choose a number: '));
console.log('You have chosen number ' + num1Sub);

const num2Sub = parseInt(readline.question('Choose another number: '));

const substraction = num1Sub - num2Sub;

console.log(num1Sub + ' - ' + num2Sub + ' = ' + substraction + '. Moving on...');
console.log(' ');