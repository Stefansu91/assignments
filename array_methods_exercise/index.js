var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

//1. Remove the last item from the vegetable array.
vegetables.pop()

//2. Remove the first item from the fruit array.
fruit.shift()

//3. Find the index of "orange."
var index = fruit.indexOf("orange")
console.log(index)

//4. Add that number to the end of the fruit array.
fruit.push(index)

//5. Use the length property to find the length of the vegetable array.
let length = vegetables.length;
console.log(length)

//6. Add that number to the end of the vegetable array.
vegetables.push(length)

//7. Put the two arrays together into one array. Fruit first. 
//   Call the new Array "food".
var food = fruit.concat(vegetables)

//8. Remove 2 elements from your new array starting at index 4 with one method.
food.splice(4, 2)

//9. Reverse your array.
food.reverse()

//10. Turn the array into a string and return it.
var intoString = food.toString();
console.log(intoString)

//  If you've done everything correctly, the last step should print the 
//  following string to the console:

//  3,pepper,1,watermelon,orange,apple

console.log("fruit: ", fruit);
console.log("vegetables: ", vegetables);