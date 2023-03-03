// Write a function that takes two arrays as parameters.
// The first array will be an array of people's names, 
// and the second array will be the alphabet. 

// Using a for loop within a for loop, 
// create and return array that looks like this:

/* Output:
["Jon:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
"M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", 
"Jacob:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
"M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
"Jingle:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
"M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
"Heimer:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K",
"L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X",
"Y", "Z", "Schmidt:", "A", "B", "C", "D", "E", "F", "G", "H",
"I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U",
 "V", "W", "X", "Y", "Z"]
 */


// Here's the array of names and the alphabet to get you started:

var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"


function forception(array, string) {
    var split = string.toUpperCase().split("")
    var solution = []
    for (var i = 0; i < array.length; i++) {
        array[i] = array[i].concat(":")
        solution.push(array[i])
        for (var j = 0; j < split.length; j++) {
            solution.push(split[j])
        }
    }
    return solution
}

console.log(forception(people, alphabet))
//console.log(forception(animals, letters))