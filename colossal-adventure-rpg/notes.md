 **Project Requirements:**

1. Console must greet player with a fun message
2. Console must ask for the player's name and store it
3. Walking:
- The console will ask the user to enter a "w" to walk
- Every time the player walks, a random algorithm will be run that determines if a wild enemy has appeared (A 1/3 or 1/4 chance of being attacked)
- Use a while loop to control this flow.
4. If a wild enemy appears:
- The enemy is random (can be chosen out of a minimum of 3 different enemy names)
- The user can decide to attack or run
- If attacking, a random amount of damage will be dealt between a min and max
- If running, there will be a 50% chance of escaping
- After the player attacks or runs the enemy attacks back for a random damage amount
- The player and enemy will attack each other in a loop until one of them passes out or dies.
- If the player kills the enemy you can give the Player some HP and special item that is stored in the inventory . After this, the player will continue walking.
- If the enemy kills the player the console prints a cool death message and the game ends
5. Inventory
- When the player kills enemies, they are awarded with items (optional)
- If the user enters 'Print' or 'p' in the console, the console will print the players name, HP, and each item in their inventory




Colossal Adventure RPG

You're a young Athenian hoplite, named *placeholder*, living in the year 338 B.C.
Your army has been defeated by the Macedonians, in the battle of Chaeronea.

*Your stats:*
*hitpoints: 10/30*
*strength: 10/15*
*defense: 20/25*

*Keys:*
*Walk:             W*
*Eat:              E*
*Stop and drink:   S*
*Go right:         R*
*Go left:          L*
*Fight:            F*
*Evade:            X*
*(Evading (when possible) has a 33 % chance of losing 15 hitpoints)*
*(A 33% chance of losing 5 hitpoints)*
*(And 34 % chance of success)*


You're waking up. Your head is in pain, your vision, blurred.
As you regain conciousness, you feel lifeless bodies all around you.
You see soldiers in the distance, you try to focus...

You manage to tell their alliegance... They're Macedonians.
Without much thought, your instinct forces you to run into the woods.
But you do so stealthily... 
Thankfully, you're right next to the tree line.

Still flustered, you're not aware of the direction you're running towards.
You're not thinking, you're trying to survive.
As exhausted as you are, you cover half a mile before noticing something...

You see a water source!
Mindlessly, you run to it and drink. Never have you felt more dehydrated.
Your throat's dryness almost makes it painful to drink. But you still do, and it gets better.
You sit to rest. Your eyes are heavy. You cannot help but fall asleep...

You wake up, now able to think.
You wonder what just happened, and where you are.
You're lost in the woods. You're hungry (hitpoints 10/30).
You realize you've lost your helmet and shield, but you still have your linen armor equipped.
You think to yourself... It's sufficient protection. You've fled the battlefield, so it's not much worry.
You are lucky to still be armed with your iron Xiphos (short sword).
You've lost your spear, but it's no problem. You have your sword.
You must be light to move efficiently.
You remember to check for your canteen.
It's there, still attached to your hip. You find out it was already half full...
You fill it up. *Results in 10/10 drinks of water* 

It's time you continue walking. You need to find food, your people.
You know this is your home, not Phillip's invaders.
You're exhausted... you hear nothing but silence.
As you walk away from the water you see a tree that stands out. It's glowing with what seems to be red fruit.
Could you be this lucky?
As you walk to it, you realize it's an apple tree. The Gods have blessed you...
You eat two apples (+3 hitpoints each, total of 12/30), and take another two for the journey.
You feel energized.
You thank the God: *(player-chosen)* 
    Zeus: Protector of all Gods and Humans. *Replenishes defense (25/25)*
    Athena: Goddess of reason, wisdom, and war. *Replenishes strength (15/15)*
    Apollo: God of light and healing. *Heals 5 hitpoints (17/30)*
    Hestia: Goddess of home and hearth. *Evades an encounter of your choice*

Ready for the journey, you begin to walk. As you do, you remember your basic teachings.
You pause every few steps... *player chooses when to pause. Every step adds 5% chance of a dangerous encounter, but results in -1 water*
You look out for potential enemies; smoke in the air.
You listen for movement.
And you smell, staying away from the deathly smells of battle, and going towards the civilized smell of burning wood.
You take a drink of water.

You keep walking...



Random events:

    Boar attack:
        Provides meat. Heals 10 hitpoints when eaten.

    Macedonian search party (Two enemy hoplites):
        Rewards the player with an item of his choice:
            - Bronze Helmet: Plus 5/5 defense (25/30, or 30/30 if Zeus chosen).
            - Iron Spear: Automatically wins one creature encounter at the cost of 5 hitpoints.
            - Water refill: Tops off water.

    Injured Theban allied soldier:
    Choose an option:
        Rewards the player with a Bronze shield, as a symbol of friendship:
            - Bronze Shield: Costs -3 drinks of water, gives 10/10 defense (30/35, 35/40 if Bronze Helmet chosen, 40/40 if Zeus and Bronze Helmet chosen).
        OR 
            Steal Bronze Shield, refill water, but lose 10 hitpoints in the process from a stab.

    Deer encounter:
        Provides meat. Heals 10 hitpoints when eaten.
        Only possible if player owns an Iron Spear.

    Strange Woman:
    (Option after every message: Press W to get closer, X to evade)
        
        - "Help! Please!" -A woman's voice cries outloud.
    
          Wait, what? A woman, out here?

             *You sense no danger and decide to come closer. Press 'W' to continue*
        

        - "Here! Please! We're Athenians!" -she says.
        
          She must be hiding behind that tree... Maybe I'm close to my people! And, out here..? she must really be Athenian!
            
             *Press 'W' to continue.*
        

        - As you get close, she peeks to look at you. 
          Her face... she's beautiful.

             *Press 'W' to continue.*
        

        - You get closer, but she runs away, behind another tree.
          You try to take a better look at her, but fail to do so. 
          She's too fast... She must be desperate!
            
          She cries out, "Please, help! Come with me, I'll show you!"

             *Press 'W' to continue, or 'X' to evade.* 

             (Evading will cause the player to see a Macedonian search party, causing him to follow the woman anyway.)

                Message: As you turn around, you see a Macedonian search party not too far away. This one is composed of five hoplites. You choose to follow the woman.


        - Hardly able to look at her, she's now dropped down a ledge, to what seems to be a cave entrance. 
            
             *Press 'W' to continue.*


        - You walk toward the entrance, but remain outside. 

          "It's my husband!" -She cries out from the dark. "He's injured!"
          "You can take his armor, I just want him to live! PLEASE!"

             *Press 'W' to continue, or 'X' to evade. It will be harder to evade once you're inside the cave.*

             (Evading will cause the player to see a Macedonian search party, causing him to follow the woman anyway.)

                 Message: As you turn around, you see a Macedonian search party not too far away. This one is composed of five hoplites. You choose to follow the woman.


        - As you enter the cave, she has gone deeper inside. You can barely make out her silhouette, but you want to help.

             *Press 'W' to continue.*


        - She speeds through a narrow section of the cave, into another room. You see an orangy, strobing light reflecting on the corridor's wall. The kind that would result from a lit torch.

             *Press 'W' to continue.*


        - As you enter the corridor, you smell the disgusting flavours of rot. You are familiar with the smell, it's reminiscent of the aftermath of a battle.

             *Press 'W' to continue.*


        - You're at the end of the corridor. By now, you are cautious, but you can't help but wonder if this was a mistake.

             *Press 'W' to continue, or 'X' to evade. Evading now results in a high chance of death.*

             (If the player chooses to evade, the Echidna takes a hold of him with a death-squeeze, causing 5 damage.)

                 Message: The Echidna wraps around your body. You take 5 damage.


        - Just before entering the room, you are finally able to see something. A shadow reflected on the wall... it looks like the woman's shadow. You make out her long hair, and you come closer. You now notice that, for some reason, she has stopped crying for help a while ago, and you hear nothing but the crackling sound of the torch. 
        
        It's too late to turn back now...

             *Press 'W' to continue.*


        - You decide it's time to enter the room. Just a few feet away, you see a giant pile of bones. A chill goes up your spine, as you squint your eyes to make out what you're looking at. 

             *Press 'W' to continue.*


        - It doesn't take long to see human skulls, and you finally you realize that you've made a terrible mistake. 

        A serpent-like, but extremely loud hissing sound pulls your attention to the other side of the room.

             *Press 'W' to continue.*


        - In front of you, the woman sits. As you look at her in detail, you become paralized. Your eyes open wide, as you look with terror. 
        
        Suddenly, the woman becomes tall. And taller, and taller, she becomes, seemingly with no end. As you look down her body, you immediately realize what you are looking at. 

        A sight you never thought you'd see. A story you've heard before. But nothing prepared you for the fear and disgust you'd feel...

             *Press 'W' to continue."


        - There is no doubt in your mind anymore... This was no woman. She was a monstrous creature. The mother of all monsters. The head and breast of a woman, but the tail of a coiling serpent. 
        
        Some call her "The Rotting One", a dragon born of the fetid slime left behind by the great flood. 
        
        Others name her the Tartarean lamprey, and place her in the dark, swampy pit of Tartaros beneath the earth.

        Hesiod, makes her a daughter of monstrous sea-gods, and associates her with rotting sea-scum and fetid salt-marshes.

        ...You have no doubt in your mind anymore. All the stories, they now matter little to you. You're facing the mother of all monsters, and paralized you still stand. 
        
        This creature is the Echidna.

        It's time to make a decision...

             *Press 'F' to fight, or 'X' to evade.*
             (If the player chooses to evade, the Echidna takes a hold of him with a death-squeeze, causing 5 damage.)



    Outcome: Treasure reward: The Eye of Argos + The Tongue of Echidna.

            The Eye of Argos: will guide the player to the place he most desires to go.
        
            Using the Eye of Argos (options):
                1. Go to Macedonia, find Philip II to kill him and end the War.
                    This results in the player killing Philip II of Macedon, restoring peace and is now the Hero of Greece.
                2. Go to Athens, find Chares and show him the tongue of Echidna.
                    This results in the player becoming a General for slaying the Echidna and surviving the battle of Chaeronea.
                3. Go home to his wife and son. 
                    This option will result in the player continuing his life peacefully.

        Dialogues:

            Athenian General:

                - You use the eye to guide you to Chares of Athens. After many months under his command, you've longed to meet this great man in person. You tell him about your role in the battle of Charonea and show him the tongue of the Echidna.

                 *Press 'W' to continue*

                Vastly impressed by your story, Chares names you his new General, incharge of the slaying of all monsters who pose a threat to Athens.

                You are presented to the Athenian crowd, who praise you and give you the name of General *player-name*, Slayer of Athens!


            Husband and Father:

                - You use the eye to guide you home. After many months under the command of Chares, you're drained and want nothing else to do with battle. You've longed to see your wife, Hypathia, and your son, Antipater once again...

                 *Press 'W' to continue*

                - As you near your home, you see your wife, Hypathia, hanging clothes out to dry. Your eyes become heavy, but no tears follow. Your oddysey has undoubtedly hardened you.

                Your wife finally looks toward you in disbelief. Her legs are shaky, causing her to fall on her knees for a moment. But she's also tough. She has patiently waited for her husband's return.

                She recovers her strength and runs toward you. However, she's unable to hold back her tears. You hug and kiss her, and you bring her inside, where Antipater screams with joy...

                 *Press 'W' to continue*

                - Player choice:

                    1. Tell your wife and son what happened:

                        As time goes by, you tell your family about your struggles that day. You show them the tongue, but without necessity. They already believed you...

                    THE END.


                    2. Tell your son what happened:

                        As time goes by, you show Antipater the tongue of the Echidna and share your story with him. He grows to be smarter and stronger than his father...

                    THE END.


                    3. Keep your story to yourself:

                        As time goes by, you fail to find a way to tell your family what you went through in that cave. You figure it's better if it stays that way...

                    THE END.




            Hero of Greece:

                - You are now in Macedonia, at Philip's son's marriage celebration, where he will be present. You patiently await his arrival...

                 *Press 'W' to continue*

                - You mix with the crowd, cheering along them for the great king's arrival. Within your robe, you hold your dagger close, waiting for the right time.

                As Philip walks next to his son, you question your decision, but you quickly remember the countless lives that will be saved.

                 *Press 'W' to continue*

                - Finally, he's within reach!

                    1. Stab him in the neck: (results in counter attack from Philip's son, Alexander, resulting in the death of the player. Big failure.)

                    2. Stab him in the stomach: (results in the death of Philip. Those who have watched the movie, should pick this option.)

                - If successful: 
                
                Dozens of guards run at you, making it impossible for you to escape. You know death is imminent, but you know what you've done, and you're proud. 
                
                 *Press 'W' to continue*

                You are remembered for years to come as *player-name*, the great peacemaker of Athens!