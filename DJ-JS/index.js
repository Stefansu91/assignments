
/* 
var evListener = document.getElementById("myButton");
document.querySelector("div.work-please").addEventListener("submit", function (e) {
    console.log(evListener.value);    
});
 */

var username;

document.getElementById("myButton").onclick = function(){
    username = document.getElementById("userInput").value;
    console.log(username);
    document.getElementById("greetMessage").innerHTML = "Hello, " + username;
}


var square = document.getElementById("square")

document.getElementById("square").addEventListener('mouseover', function(){
    document.getElementById("square").style.backgroundColor = "blue";
})

document.getElementById("square").addEventListener('mouseout', function(){
    document.getElementById("square").style.backgroundColor = "white";
})

document.getElementById("square").addEventListener('mousedown', function(){
    document.getElementById("square").style.backgroundColor = "red";
})

document.getElementById("square").addEventListener('mouseup', function(){
    document.getElementById("square").style.backgroundColor = "yellow";
})

document.getElementById("square").addEventListener('dblclick', function(){
    document.getElementById("square").style.backgroundColor = "green";
})

document.addEventListener('wheel', function(){
    document.getElementById("square").style.backgroundColor = "orange";
})