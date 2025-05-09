
This project will be about a website in nextjs/react in the folder @limbus 

Always consider me as a senior developer.

# Context
- The website is an interface where the user can select owned characters.
- selecting and deselecting will save data in the browser's local storage


## Game mechanics
- the game contains the following list of "sins" characteristics:
    - wrath
    - lust
    - sloth
    - gluttony
    - gloom
    - envy
    - pride

the game contains the following list of "damage types":
    - slash
    - pierce
    - blunt

## Characters
- Each character will have name.
- each character may have different "identities" (or IDS)

## Identities
- each identity will inherit the character's name
- each ID will have an image, and a set of exactly 3 skills
- each ID will have, for each sin, an affinity level (normal, weak, strong)

## Skills
- each skill will have a name, exactly one associated damage type, exactly one associated sin, an amount of coins and a base_power stat.
- each skill will have a single associated sin

