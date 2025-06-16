let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterNameText = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");

//array of location data
const locations = [
    {
        name: "Town square",
        "button text": [ "Go to store", "Go to cave", "Fight dragon"],
        "button functions": [goStore, goCave, fightDragon],
        text: "You are now back in the town square, bask in the warmth of the sunlight that shines into the square and decide your next move."
    },
    {
        name: "Store",
        "button text": [ "Buy 10 health (10 gold)", "Buy weapon (30 gold)", "Go back to town square"],
        "button functions": [buyHealth, buyWeapon, goTown],
        text: "You have entered the store. Gander at the wares the vendor intends to sell and see what takes your fancy!"
    },
];

//array of weapon data
const weapons = [
    {
        name: "stick",
        power: 5
    },
    {
        name: "dagger",
        power: 15
    },
    {
        name: "wooden sword",
        power: 10
    },
    {
        name: "iron sword",
        power: 20
    },
    {
        name: "steel sword",
        power: 27
    },
    {
        name: "adamantine sword",
        power: 45
    },
    {
        name: "wooden staff",
        power: 12
    },
    {
        name: "club",
        power: 13
    },
    {
        name: "spiked club",
        power: 18
    },
]

// initialise buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

function update(location) {
    button1.innerText = location["button text"][0];
    button2.innerText = location["button text"][1];
    button3.innerText = location["button text"][2];

    button1.onclick = location["button functions"][0];
    button2.onclick = location["button functions"][1];
    button3.onclick = location["button functions"][2];

    text.innerText = location.text;
}

function goStore() {
    update(locations[1]);
}

function goCave() {
    console.log("Going to cave. ")
}

function fightDragon() {
    console.log("Fighting dragon. ")
}

function buyHealth() {
    if (gold >= 10) {
        gold -= 10;
        health += 10;
        goldText.innerText = gold;
        healthText.innerText = health;
    }
    else {
        text.innerText = "You do not have enough gold to buy more health."
    }
    
}

function buyWeapon() {
    if (gold >= 30) {
        gold -= 30;
    
        goldText.innerText = gold;
    }
    else {
        text.innerText = "You do not have enough gold to buy a weapon."
    }
}

function goTown() {
    update(locations[0]);
}