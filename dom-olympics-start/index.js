//     DOM

//    Part 1

var header1 = document.getElementById("header");
header1.textContent = "JavaScript Made This!!";
header1.style.textAlign = 'center';
header1.style.fontSize = '25px';
header1.style.fontWeight = "bold";

var header2 = document.createElement("p");
header2.innerText = "Stefan"
document.body.append(header2)
header2.style.textAlign = 'center';
header2.style.fontSize = '15px';
header2.style.color = "orange"

var header3 = document.createElement("span");
header3.innerText = " wrote the JavaScript"
document.body.append(header3)
header3.style.color = "black"


header1.appendChild(header2)
header2.appendChild(header3)

var name = "Stefan"



//     BRONZE

var main = document.getElementById("main")

var msgRight = document.getElementById("message right 2")
msgRight.textContent = "No, YOU'RE the police. I'm just a simple farmer!"
var msgLeft = document.getElementById("message left 2")
msgLeft.textContent = "You have to, you're the police"

var messages = document.getElementsByClassName("messages")
messages.append(main)
console.log(messages)


console.log(msgRight)

/* 
var msgChange = document.querySelector("#message right").classList;
msgChange.textContent = "No, YOU'RE the police. I'm just a simple farmer!"
 */


/*        <div class="messages">
            <div class="message left">
                I have something serious to talk about
            </div>
            <div class="message right">
                I don't want to talk
            </div>
            <div class="message left">
                You have to, you're the police
            </div>
            <div class="message right">
                I'm just a simple farmer
            </div>
        </div>
*/