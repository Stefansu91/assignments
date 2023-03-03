
// Write a function that takes a string as a parameter and returns the same string 
// in all capital letters followed by all lowercase letters.

var capilizeAndLowercase = "HelLo" // => "HELLOhello" 
var welcome = "Welcome"

function capPlusLower (string) {
    var upperCase = string.toUpperCase()
    var lowerCase = string.toLowerCase()
    var solution = upperCase + lowerCase
    return solution
}

// console.log(capPlusLower(welcome))
console.log(capPlusLower(capilizeAndLowercase))


// Write a function that takes a string as a parameter and returns a number that 
// is half the string's length, rounded down.
//    Hint: You'll need to use Math.floor().

function halfLength (string) {
    var length = string.length
    var half = Math.floor(length / 2)
    return half 
}

console.log(halfLength(welcome))


// Write a function that uses slice() and the other functions you've written 
// to return the first half of the given string.

function firstHalf (string){
    var half = halfLength(string)
    return string.slice(0, half)
}

console.log(firstHalf(welcome))

// Write a function that takes a string as a parameter and returns that string
// where the first half is capitalized, and the second half is lowercase.
//    Hint: If your string length is odd, use Math.floor() to round down.

function four (string) {
    var firstH = firstHalf(string).toUpperCase()
    var half = halfLength(string)
    var secondH = string.slice(half)
    return firstH + secondH
}

console.log(four(welcome))