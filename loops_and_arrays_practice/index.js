



//#1 Loop through the following array and count how many "computers" there are. 
//Log the final count:

var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"];

let count = 0

for (var i = 0; i < officeItems.length; i++) {
    if (officeItems[i] === 'computer'){
        count++
    }
}

console.log('There are ' + count + ' computers.')




//#2 Loop through the following array and log to the console 
//"old enough" if they are 18 or older, 
//and "not old enough" if they aren't 18.

var people = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ]


  for (var i = 0; i < people.length; i++) {
    if (people[i].age < 18) {
        console.log('Not old enough')
    }
    if (people[i].age >= 18) {
        console.log('Old enough')
    }
  }