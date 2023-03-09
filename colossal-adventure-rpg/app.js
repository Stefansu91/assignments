const readlineSync = require('readline-sync');

console.log(" ")
console.log("Welcome. This game will take you on an odyssey with an in-depth story.")
console.log("You'll be able to pick from different endings, so choose wisely...")
console.log(" ")

// What is your name?
const name = readlineSync.question('What is your name?   ');
console.log(" ")

readlineSync.question("Hello, " + name + ". Press Enter to begin. ");

console.log(" ")
console.log(" ")
console.log(" ")
console.log("                                          ~ " + name + ", the Hero of Athens ~")
console.log(" ")
console.log(" ")
console.log("You're an Athenian Hoplite, a citizen soldier of Ancient Greece. The year is 338 B.C.");
console.log("Your army has been defeated by the Macedonians, in the battle of Chaeronea, not very far to the North West of Athens.")
console.log("During the battle, you fell unconcious due to a blow to the head...")
console.log(" ")

readlineSync.question('Press Enter to continue. ');

const attackOption = ['Powerful attack (Higher damage, but less chance to hit the enemy)',
                      'Accurate attack (Higher chance to hit the enemy, but lower damage)',
                      'Evade (50% success chance. If successful, the player will take enemy damage before getting away)']

//const attackOptionChoice = readlineSync.keyInSelect(attackOption)    <----What was this for?

const randomEvent = ['Macedonian Search Party',         //rewards player with random: iron spear / bronze helmet
                     'Injured Theban Soldier',          //rewards player with shield
                     'Wild Boar',                       //provides 2x meat
                     'Deer',                            //provides 1x meat - only able to hunt deer if spear in inv
                     'Smoke in the distance',           //somewhat close to civ
                     'Movement',                        //nothing happens
                     'Smell of burning wood',           //close to civ
                     'Nothing interesting happens',
                     'Nothing interesting happens',
                     'Nothing interesting happens']     //Nothing happens x3

let finalBattle = ['Strange Woman']                     //final fight

let playerHP = 30;
let playerStr = 15;
let playerDef = 25;
let canteen = 10;

//let eatApple = ;  +5 playerHP
//let eatMeat = ;  +8 playerHP

//macedonians stats
let macedoniansHP = 40;
let macedoniansStr = 10;
let macedoniansDef = 15;

//boar stats
let boarHP = 20
let boarStr = 8
let boarDef = 5

//deer stats
let deerHP = 10
let deerDef = 10

//Theban stats - player must give 3 water to be rewarded. 
//If player decides to keep water, he must kill him, resulting in the Theban attacking once before dying.
let thebanHP = 5
let thebanStr = 10
let thebanDef = 1


/*  Work on this...

const walk = readlineSync.question("Press 'w' to walk ");

function walking() {
    if (walk === 'w') {
        return slls
    }
}

*/

//Every five 'w's, the player stops and listens
let slls = randomEvent[Math.floor(Math.random()*randomEvent.length)];

function fight() {
    if (attackOption[attackOptionsChoice] === 'Powerful attack (Higher damage, but less chance to hit the enemy)') {
        const powerAttack = Math.floor(Math.random() * (8 - 1) + 2);
    } else if (attackOption[attackOptionsChoice] === 'Accurate attack (Higher chance to hit the enemy, but lower damage)') {
        const accurateAttack = Math.floor(Math.random() * (8 - 3) + 4);   //check if it is more accurate
    } else {
        const evadeFight = Math.floor(Math.random() * (8 - 1) + 2); //how to deal damage to player
    }
}


// Story Chapter 1
console.log(" ")
console.log(" ")
console.log("-----------------------------------------------------------------------------------------------------")
console.log("--------------------------------------------- Chapter 1 ---------------------------------------------")
console.log("---------------------------------------------     1a    ---------------------------------------------")
console.log("-----------------------------------------------------------------------------------------------------")
console.log(" ")
console.log("You're slowly awaking. Your head is in pain and your vision is blurry.")
console.log("As you regain conciousness, all you see around you is death.")
console.log("Your vision might be blurred, but you still know what you see... Thousands dead.")
console.log("You hear a few soldiers in the distance and you immediately look...")
console.log(" ")

readlineSync.question('Press Enter to continue. ');

console.log(" ")
console.log(" ")
console.log("As you try to blink your eyes to clarity, you finally focus...")
console.log("You manage to make out their allegiance... Macedonians!")
console.log("They must be looking for survivors.")
console.log("Without much contemplation, instinct forces you to run into the woods.")

console.log(" ")
console.log(name + ", you must make a choice. Quick!")


const options1a = ['Sprint into the woods', 'Use caution'];
const sprintORcaution = readlineSync.keyInSelect(options1a);

if (options1a[sprintORcaution] === 'Sprint into the woods') {
    console.log(" ")
    console.log(" ")
    console.log("One of the Macedonian soldiers spots you!")
    console.log("You hear him call on the others!")
    const options1b = ["Keep running, I'm not fit to fight right now!", "I'm standing my ground! Death before dishonor!"]
    const runORfight = readlineSync.keyInSelect(options1b);

    if (options1b[runORfight] === "Keep running, I'm not fit to fight right now!") {
        console.log(" ")
        console.log(" ")
        console.log("You're exhausted, but you run for your life!")
        console.log("You manage to get away.")
    } else {
        console.log(" ")
        console.log(" ")
        console.log("You're overwhelmed by the soldiers. They easily kill you, but, at least you died honorably... I guess.")
        console.log(" ")
        console.log("-----------------------------------------------------------------------------------------------------")
        console.log("--------------------------------------------- Game Over ---------------------------------------------")
        console.log("-----------------------------------------------------------------------------------------------------")
    }
} else if (options1a[sprintORcaution] === 'Use caution') {
    console.log(" ")
    console.log(" ")
    console.log("And you do so with caution...")
    console.log("Thankfully, you're close to the tree line.")
    console.log("As you pass the first few trees, you refuse to stop. You pickup the pace, and you run.")
    console.log("As you look back, no one follows you.")
} else {
    console.log(" ")
    console.log(" ")
    console.log("Thank you for playing...")
    console.log(" ")
    console.log("-----------------------------------------------------------------------------------------------------")
    console.log("--------------------------------------------- Game Over ---------------------------------------------")
    console.log("-----------------------------------------------------------------------------------------------------")
    // ends the game
}


console.log(" ")
readlineSync.question('Press Enter to continue. ');

console.log(" ")
console.log(" ")
console.log("-----------------------------------------------------------------------------------------------------")
console.log("---------------------------------------------     1b    ---------------------------------------------")
console.log("-----------------------------------------------------------------------------------------------------")
console.log(" ")
console.log("Still flustered, you're not aware of the direction you're running towards.")
console.log("You're not thinking, you're trying to survive.")
console.log("As exhausted as you are, you cover half a mile before noticing something...")
console.log(" ")

readlineSync.question('Press Enter to continue. ');

console.log(" ")
console.log(" ")
console.log("You see water! A draw, not too far.")
console.log("Mindlessly, you run to it and drink. Never have you felt more dehydrated.")
console.log("Your throat's dryness almost makes it painful to drink. But you still do, and it gets better.")
console.log("You sit to rest. Your eyes are heavy. You cannot help but falling asleep...")
console.log(" ")

readlineSync.question('Press Enter to continue. ');

// Story Chapter 1
console.log(" ")
console.log(" ")
console.log(" ")
console.log("-----------------------------------------------------------------------------------------------------")
console.log("--------------------------------------------- Chapter 2 ---------------------------------------------")
console.log("---------------------------------------------     2a    ---------------------------------------------")
console.log("-----------------------------------------------------------------------------------------------------")
console.log(" ")

console.log("You wake up, now able to think.")
console.log("You take a minute, trying to think about what just happened.")
console.log("Your army, all gone. Your brothers, dead or running.")
console.log("And now you're lost. You've forgotten where you ran from and you're hungry.")
console.log(" ")

readlineSync.question('Press Enter to continue. ');

console.log(" ")
console.log(" ")
console.log("-----------------------------------------------------------------------------------------------------")
console.log("----------------------------------------------- STATS -----------------------------------------------")
console.log("------------------------------------- Hitpoints           10/30 -------------------------------------")
console.log("------------------------------------- Strength            10/15 -------------------------------------")
console.log("------------------------------------- Defense             20/25 -------------------------------------")
console.log("-----------------------------------------------------------------------------------------------------")
console.log("--------------------------------------------- EQUIPMENT ---------------------------------------------")
console.log("------------------------------------- Head                  N/A -------------------------------------")
console.log("------------------------------------- Top             Linen Top -------------------------------------")
console.log("------------------------------------- Legs        Linen Bottoms -------------------------------------")
console.log("------------------------------------- Gloves     Leather Gloves -------------------------------------")
console.log("------------------------------------- Boots     Leather Sandals -------------------------------------")
console.log("------------------------------------- Shield                N/A -------------------------------------")
console.log("------------------------------------- Weapon        Iron Xiphos -------------------------------------")
console.log("-----------------------------------------------------------------------------------------------------")
console.log("------------------------------------------- Water     5/10 ------------------------------------------")
console.log("-----------------------------------------------------------------------------------------------------")
console.log(" ")
console.log("You realize you've lost your helmet and shield, but you still have your linen armor equipped.")
console.log("You feel like It's sufficient protection. You've fled the battlefield, so it's not much worry.")
console.log("You are lucky to still be armed with your iron Xiphos.")
console.log("You've lost your spear, but it's no problem. You have your sword.")
console.log("You must be light to move efficiently.")
console.log(" ")


readlineSync.question('Press Enter to continue. ');

console.log(" ")
console.log(" ")
console.log("You remember to check for your canteen.")
console.log("It's there, still attached to your hip. You find out it was already half full...")
console.log("You fill it up.")
console.log(" ")
console.log("-----------------------------------------------------------------------------------------------------")
console.log("------------------------------------------- Water    10/10 ------------------------------------------")
console.log("-----------------------------------------------------------------------------------------------------")
console.log(" ")

readlineSync.question('Press Enter to continue. ');

console.log(" ")
console.log(" ")
console.log("It's time you continue walking. You need to find food, your people.")
console.log("You know this is your home, not Phillip's.")
console.log("You're exhausted, but you must start moving...")

const directions = ['Face North', 'Face West', 'Face East', 'Face South']
const whereTo = readlineSync.keyInSelect(directions);

if (directions[whereTo] === 'Face West') {
    console.log(" ")
    console.log(" ")
    console.log("A faint memory rushes to your head...")
    console.log("You're sure that's where you ran from, and you decide to face a different direction.")
    console.log("You remember Athens is somewhere to the South-East.")
} else if (directions[whereTo] === 'Face East') {
    console.log(" ")
    console.log(" ")
    console.log("East seems right. You remember Athens is somewhere to the South-East.")
    // to-do - press w to walk
} else if (directions[whereTo] === 'Face South') {
    console.log(" ")
    console.log(" ")
    console.log("South seems right. You remember Athens is somewhere to the South-East.")
    // to-do - press w to walk
} else if (directions[whereTo] === 'Face North') {
    console.log(" ")
    console.log(" ")
    console.log("You remember Athens is somewhere to the South-East.")
    console.log("North would just take you farther from home.")
    // to-do - press w to walk
}

console.log("You decide to travel East and slightly South.")
console.log(" ")

//change 216 for 'w' to walk
readlineSync.question('Press Enter to continue. ');

console.log(" ")
console.log(" ")
console.log("As you walk away from the water you see a tree that stands out. It's glowing with what seems to be red fruit.")
console.log("Could you be this lucky?")
console.log(" ")

readlineSync.question('Press Enter to continue. ');
//walk closer or evade, it must be an illusion

console.log(" ")
console.log(" ")
console.log("As you walk to it, you realize it's an apple tree. The Gods have blessed you...")
console.log("You take four apples (+5 hitpoints each when eaten).")
console.log("You take a knee to thank the Gods...")

const gods = ['Zeus: Protector of all Gods and Humans. *Replenishes defense (25/25)*', 
              'Athena: Goddess of reason, wisdom, and war. *Replenishes strength (15/15)*', 
              'Apollo: God of light and healing. *Heals 10 hitpoints (20/30)*', 
              'Hestia: Goddess of home and hearth. *Evades an encounter of your choice (Except for the Boss Fight*']
const whichGod = readlineSync.keyInSelect(gods);

if (gods[whichGod] === 'Face West') {
    console.log(" ")
    console.log(" ")
    console.log("A faint memory rushes to your head...")
    console.log("You're sure that's where you ran from, and you decide to face a different direction.")
} else if (gods[whichGod] === 'Face East') {
    console.log(" ")
    console.log(" ")
    console.log("East seems right. You remember Athens is somewhere to the South-East.")
    // to-do - press w to walk
} else if (gods[whichGod] === 'Face South') {
    console.log(" ")
    console.log(" ")
    console.log("South seems right. You remember Athens is somewhere to the South-East.")
    // to-do - press w to walk
} else if (gods[whichGod] === 'Face North') {
    console.log(" ")
    console.log(" ")
    console.log("You remember Athens is somewhere to the South-East.")
    console.log("North would just take you farther from home.")
    // to-do - press w to walk
}