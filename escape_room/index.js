//Intro and require readline-sync.
const readline = require("readline-sync");
const name = readline.question("What is your name? ");
console.log(' ')
console.log('You hear a screeching, gargling voice...')
console.log('"' + `Hello, ${name}. I see you are finally wak... *cough* ...wu-waking up. Care to know where you are?` + '"');

//Boolean flags tells when the player is dead, has found keys, and has pressed 1 to start. Variable for the room #.

let isAlive = true;
let pressStart = false;

const start = readline.keyIn("Press 1 to find out... ", {limit: '$<1>'});
if (start == 1) {
    console.log(' ')
    console.log(' ')
    console.log(' ')
    console.log("Your vision is hazy, and you feel drowsy...");
    pressStart = true;
}
//While loop for Room #1.
while (isAlive == true && pressStart == true) {
    console.log('As you recover, you begin to look around.')
    console.log(' ')
    console.log('In front of you, you see a door. Next to it, a dark, deep hole. You cannot see inside of it.')
    console.log('Behind you, there is a safe.')
    console.log('To your right, you see a glass box with two keys inside.')
    console.log(' ')
    console.log('You hear the voice again... It produces a sense of absolute disgust to simply listen to.')
    console.log(' ')
    console.log('"' + name + ', you must *gargling and coughing* trus...t ...me. There is a lever inside that RGGGHHho.. HOLE.')
    console.log('If you p-PH-Pull it, the doOOOghor will UNLOCK."')
    console.log(' ')
    const optionID = readline.keyIn("Press 1 if you trust the voice. \nPress 2 to attempt to crack the safe. \nPress 3 to break the glass box ", {limit: '$<1-3>'});
    if (optionID == 1) {
        console.log(' ')
        console.log(' ')
        console.log(' ')
        console.log("MWUUhh-MWAAhaHGgGHAGHA *cough* ...HAa..");
        console.log('Oh dear... You are dead!')
        console.log(' ')
        isAlive = false;
    }
    else if (optionID == 2) {
            console.log(' ')
            console.log(' ')
            console.log(' ')
            console.log("You approach the safe");
            console.log('You place your right ear against the safe, and you begin to spin the combination wheel.')
            console.log('You listen...')
            console.log(' ')
            let safe = readline.keyIn("Press 1 to continue... ", {limit: '$<1>'});
            if (safe == 1) {
                console.log(' ')
                console.log('You begin to doubt yourself, and you think... ')
                console.log('"Why on EARTH would I think I could crack a safe?')
                console.log('I NEVER EVEN OWNED A SAFE!"')
                console.log(' ')
                console.log('The voice speaks to you... "HAH! You are a DHD-dDD-DUMBASS, ' + name + '!"')
                console.log(' ')
                console.log('Suddenly, the safe SHOCKS YOU AND KILLS YOU!')
            }
    }
    else if (optionID == 3) {
        console.log(' ')
        console.log(' ')
        console.log(' ')
        const glassBox = readline.keyIn("Press 1 to grab the silver key. \nPress 2 to grab the golden key. ", {limit: '$<1-2>'});
        console.log(' ')
        if (glassBox == 1) {
            console.log(' ')
            console.log("You grab the silver key");
            console.log("You try it on the door, but it doesn't work")
            console.log(' ')
            console.log('The voice speaks to you... "HAH! You FuGHG-F-FOOL!"')
            console.log(' ')
            console.log('Suddenly, the key fob SHOCKS YOU AND KILLS YOU!')
        }
        if (glassBox == 2) {
            console.log(' ')
            console.log('You grab the golden key... ')
            console.log(' ')
            console.log('You insert it into the key fob')
            console.log(' ')
            console.log('You turn the key...')
            console.log('CONGRATULATIONS! YOU HAVE SOLVED THE PUZZLE!')
            console.log('As you attempt to leave, you hear the voice once again...')
            console.log('')
            console.log('"NOOOOOO!!!!!')
            console.log('"I WILL GET YOU NEXT TIME, ' + name +'!!!"')
            console.log(' ')
            console.log('You think to yourself... "Well, that was easy"')
            console.log(' ')
            console.log('But it was not! YOU COULD HAVE DIEDED!')
        }
}
    break;
}

