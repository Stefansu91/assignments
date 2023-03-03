// Array of numbers
var dmgPerSecond = [1, 2, 3, 4, 5]
/////////



// Array of strings
//                0          1           2         3         4      
var weapons = ["Katana", "Tetsubo", "Naginata", "Yari", "Wakizashi"]
console.log(weapons[3]) // "Yari"
console.log(weapons[2]) // "Naginata"
//////////



// String
//                  01234567
var combatSkills = "Strength"
console.log(combatSkills[5]) // "g"
//////////



// Objects
var charStefan = {
    name: "Stefan",
    age: 31,
    height: "69 inches",
    hairColor: "brown",
    isAlive: true
}

var charJohana = {
    name: "Johana",
    age: 31,
    height: "54 inches",
    hairColor: "brown",
    isAlive: true
}
//////////



// Booleans
if(charStefan.isAlive === false){
    console.log("IT is true!")
} else {
    console.log("IT is false!")
}

if(5 + 2 === 9){
    console.log("Five plus two does not equal nine.")
} else if(5 + 3 === 8){
    console.log("Five plus three equals eight.")
} else {
    console.log("No answer.")
}

/* 
Comparison Operator
   >, <, <=, >=, ===, !==
   do not use yet: ==, !=

Logic Operators
    && - and
    || - or
    !  - not
*/

if(2 === 2 && 3 !== 7){
    console.log("Correct!")
} else {
    console.log("Incorrect.")
}

// Order of operations   + - * /
//////////



// Loops
for(var i = 0; i <= 10; i++){
    console.log(i)
}

for(var i = 0; i < 4; i++){
    console.log("I'm getting GOOD at LOOPS!")
}

// Using "var weapons"
for(var i = 0; i < weapons.length; i++){
    console.log(weapons[i])
}

// Using "var dmgPerSecond"
for(var i = 0; i < dmgPerSecond.length; i++){
    if(dmgPerSecond[i] % 2 === 0){
        console.log(dmgPerSecond[i])
    }
}

var count = 0

while(count < 10){
    console.log("Hello")
    count++
}
//////////



// Functions
// DRY: Do Not Repeat Yourself
function sum(num1, num2){
    return num1 + num2
}
var result = sum(10, 5)
console.log(result)

function fullName(firstName, lastName){
    return firstName + " " + lastName
}
var resultFullName = fullName("Stefan", "Speidel")
console.log(resultFullName)
//////////



// Objects
var charLeon = {
    name: "Leon Speidel",
    age: 2,
    parents: ["Celine", "Stefan"],
    address: {
        street: "1111 house",
        city: "San San"
    },
    favoriteFood: function(){
        console.log("I LOVE GNOCCHI!")
    },
    burpSound: "BLLUURRP",
    burp: function(){
        console.log(this.burpSound)
    }
}

// Two ways of accessing an object's data:
// 1. Dot "."
console.log(charLeon.name)
console.log(charLeon.address.street)

// 2. Bracket notation
console.log(charLeon["age"])
console.log(charLeon["address"]["city"])

// Adding properties
charLeon.hasWalked = true

console.log(charLeon)

// Objects can hold functions called METHODS
charLeon.favoriteFood()

// With 'this' keyword
charLeon.burp()

/* Objects and Arrays are passed by reference
The following does NOT create a new object, it only replaces Gnocchi with Napkins

var evilLeonTwin = charLeon
evilLeonTwin.favoriteFood = "Napkins"

console.log(charLeon)
*//////////



// Let and Const





/* DOM (Document Object Model)

1. What does interacting with the DOM in JavaScript help us do?

A: It allows us to control the elements and styles on a page. 
Could mean removing, adding, or changing things on screen.

2. Why would we need to use JS to manipulate the DOM 
when we could just type it into the HTML/CSS files in the first place?

A: We can't know how the user is going to interact with our site.
It's the only way we can react to a user's interaction with our page.

Quiz

1. What does DOM stand for?

A: Document Object Model

2. In your own words, what is the DOM?

A: Interactive buttons on the webpage that allows users 
to change things within it.

*//////////


/*
red.addEventListener("click", function() {
    document.body.style.backgroundColor = "firebrick"
})

white.addEventListener("click", function() {
    document.body.style.backgroundColor = "white"
})

// Count controls
var count = 0;
var substractBtn = document.getElementById("substract")
var addBtn = document.getElementById("add")

substractBtn.addEventListener("click", function() {
    count--
    document.getElementById("counter").innerText = count;
})

addBtn.addEventListener("click", function() {
    count++
    document.getElementById("counter").innerText = count;
})
*/


var clanSearch = document.getElementById("clanSearch")
clanSearch.addEventListener("click", function() {
    console.log("A Clan was searched!")
})

clanSearch.addEventListener("dblclick", function() {
    alert("You only need to click once!")
})


console.log(clanSearch)
console.dir(clanSearch)


// var newButton = document.getElementById("button-one")
// newButton.addEventListener( "click", greeting )