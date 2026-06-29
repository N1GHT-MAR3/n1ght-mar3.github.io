function Weapon(name, attachments) {
    this.name = name;
    this.attachments = attachments;
}

const mp5k = new Weapon("MP5K", [4, 1, 13, 14, 17, 12]);
const skorpion = new Weapon("Skorpion", [4, 8, 3, 17, 12]);
const mac11 = new Weapon("MAC11", [4, 13, 14, 8, 3, 17, 12]);
const ak74u = new Weapon("AK74u", [4, 2, 1, 13, 14, 8, 17, 7, 12]);
const uzi = new Weapon("Uzi", [4, 1, 13, 14, 8, 17, 12]);
const pm63 = new Weapon("PM63", [4, 8, 3, 12]);
const mpl = new Weapon("MPL", [2, 1, 13, 14, 8, 17, 12]);
const spectre = new Weapon("Spectre", [4, 1, 13, 14, 8, 17, 12]);
const kiparis = new Weapon("Kiparis", [4, 1, 13, 14, 8, 3, 17, 12]);

const m16 = new Weapon("M16", [4, 2, 1, 13, 14, 11, 5, 9, 17, 7]);
const enfield = new Weapon("Enfield", [4, 2, 1, 13, 14, 11, 5, 9, 17, 7]);
const m14 = new Weapon("M14", [4, 1, 13, 14, 8, 11, 5, 9, 17, 7]);
const famas = new Weapon("Famas", [4, 2, 1, 13, 14, 11, 5, 9, 17, 7]);
const galil = new Weapon("Galil", [4, 2, 1, 13, 14, 11, 5, 9, 17, 7]);
const aug = new Weapon("AUG", [4, 2, 1, 13, 14, 11, 5, 9, 17, 7]);
const fal = new Weapon("FN FAL", [4, 2, 1, 13, 14, 11, 5, 9, 17, 7]);
const ak47 = new Weapon("AK47", [4, 2, 1, 13, 14, 11, 9, 17, 7]);
const commando = new Weapon("Commando", [4, 2, 1, 13, 14, 11, 5, 9, 17, 7]);
const g11 = new Weapon("G11", [10, 19]);

const olympia = new Weapon("Olympia", []);
const stakeout = new Weapon("Stakeout", [8]);
const spas12 = new Weapon("SPAS-12", [17]);
const hs10 = new Weapon("HS10", [3]);

const hk21 = new Weapon("HK21", [4, 1, 13, 14, 9]);
const rpk = new Weapon("RPK", [4, 2, 1, 13, 14, 9]);
const m60 = new Weapon("M60", [4, 1, 13, 14, 8, 9]);
const stoner63 = new Weapon("Stoner63", [1, 13, 4, 9, 14]);

const dragunov = new Weapon("Dragunov", [4, 1, 9, 17, 19]);
const wa2k = new Weapon("WA2000", [4, 1, 9, 17, 19]);
const l96a1 = new Weapon("L96A1", [4, 1, 9, 17, 19]);
const psg1 = new Weapon("PSG1", [4, 1, 9, 17, 19]);

const asp = new Weapon("ASP", [3]);
const m1911 = new Weapon("M1911", [18, 4, 3, 17]);
const makarov = new Weapon("Makarov", [18, 4, 3, 17]);
const python = new Weapon("Python", [1, 15, 16, 3]);
const cz75 = new Weapon("CZ75", [18, 4, 3, 17, 6]);

const m72 = new Weapon("M72 LAW", []);
const rpg = new Weapon("RPG", []);
const strela = new Weapon("Strela-3", []);
const chinalake = new Weapon("China Lake", []);

const bknife = new Weapon("Ballistic Knife", []);
const xbow = new Weapon("Crossbow", []);

const primaries = [];
primaries[0] = mp5k;
primaries[1] = skorpion;
primaries[2] = mac11;
primaries[3] = ak74u;
primaries[4] = uzi;
primaries[5] = pm63;
primaries[6] = mpl;
primaries[7] = spectre;
primaries[8] = kiparis;
primaries[9] = m16;
primaries[10] = enfield;
primaries[11] = m14;
primaries[12] = famas;
primaries[13] = galil;
primaries[14] = aug;
primaries[15] = fal;
primaries[16] = ak47;
primaries[17] = commando;
primaries[18] = g11;
primaries[19] = olympia;
primaries[20] = stakeout;
primaries[21] = spas12;
primaries[22] = hs10;
primaries[23] = hk21;
primaries[24] = rpk;
primaries[25] = m60;
primaries[26] = stoner63;
primaries[27] = dragunov;
primaries[28] = wa2k;
primaries[29] = l96a1;
primaries[30] = psg1;

const secondaries = [];
secondaries[0] = asp;
secondaries[1] = m1911;
secondaries[2] = makarov;
secondaries[3] = python;
secondaries[4] = cz75;
secondaries[5] = m72;
secondaries[6] = rpg;
secondaries[7] = strela;
secondaries[8] = chinalake;
secondaries[9] = bknife;
secondaries[10] = xbow;

const attachments = [];
attachments[0] = "No attachment";
attachments[1] = "ACOG Sight";
attachments[2] = "Dual Mag";
attachments[3] = "Dual Wield";
attachments[4] = "Extended Mag";
attachments[5] = "Flamethrower";
attachments[6] = "Full Auto Upgrade";
attachments[7] = "Grenade Launcher";
attachments[8] = "Grip";
attachments[9] = "Infrared Scope";
attachments[10] = "Low Power Scope";
attachments[11] = "Masterkey";
attachments[12] = "Rapid Fire";
attachments[13] = "Red Dot Sight";
attachments[14] = "Reflex Sight";
attachments[15] = "Snub Nose";
attachments[16] = "Speed Reloader";
attachments[17] = "Suppressor";
attachments[18] = "Upgraded Iron Sights";
attachments[19] = "Variable Zoom";

// Red Dot Sight and Reflex Sight are customizable. Used to detect whether to include reticles in randomization.
const customizableOptics = [13, 14];

/*
These arrays are used to group attachments based on their incompatibility to each other.
This is used for Warlord logic to prevent invalid combinations.
*/

// Dual Wield, Flamethrower, Grenade Launcher, and Masterkey cannot be paired with any other attachment no matter what.
// No attachment is also included here since, logically, if no primary attachment rolls, don't generate a second one either.
const exclusiveAttachments = [0, 3, 5, 7, 11];

// Dual Mag, Extended Mag, and Rapid Fire are incompatible with one another.
const magAttachments = [2, 4, 12];

// ACOG Sight, Infrared Scope, Low Power Scope, Red Dot Sight, Reflex Sight, and Variable Zoom are all optics, one per weapon.
const opticAttachments = [1, 9, 10, 13, 14, 19];

const camos = [];
camos[0] = "None";
camos[1] = "Dusty";
camos[2] = "Ice";
camos[3] = "Red";
camos[4] = "Olive";
camos[5] = "Nevada";
camos[6] = "Sahara";
camos[7] = "ERDL";
camos[8] = "Tiger";
camos[9] = "Berlin";
camos[10] = "Warsaw";
camos[11] = "Siberia";
camos[12] = "Yukon";
camos[13] = "Woodland";
camos[14] = "Flora";
camos[15] = "Gold";

const reticles = [];
reticles[0] = "Dot";
reticles[1] = "Semi-Circles";
reticles[2] = "Lines With Dot";
reticles[3] = "Hollow Circle";
reticles[4] = "Smiley Face";
reticles[5] = "Arrows Vertical";
reticles[6] = "Arrows Horizontal";
reticles[7] = "Arrows With Dot";
reticles[8] = "Bones";
reticles[9] = "Burst";
reticles[10] = "Circle Within A Circle";
reticles[11] = "Circle";
reticles[12] = "Circle Outline";
reticles[13] = "Circle Outline With Dot";
reticles[14] = "Circle With Crosshairs";
reticles[15] = "Circle With Outer Lines";
reticles[16] = "Circle With Inner Lines";
reticles[17] = "Circle With Arrows";
reticles[18] = "Circle With Triangles";
reticles[19] = "Outer Crosshairs";
reticles[20] = "Small Crosshairs";
reticles[21] = "Large Crosshairs";
reticles[22] = "Crosshairs";
reticles[23] = "Crosshairs With Dot";
reticles[24] = "Diamond";
reticles[25] = "Diamond Outline";
reticles[26] = "Heart";
reticles[27] = "Radiation";
reticles[28] = "Skull";
reticles[29] = "Square";
reticles[30] = "Square Outline";
reticles[31] = "Square With Crosshairs";
reticles[32] = "Star";
reticles[33] = "Three Dots";
reticles[34] = "Treyarch";
reticles[35] = "Triangle";
reticles[36] = "Outer Triangles";
reticles[37] = "X";
reticles[38] = "X With Dot";
reticles[39] = "Yin Yang";

const reticleColors = [];
reticleColors[0] = "Red";
reticleColors[1] = "Green";
reticleColors[2] = "Blue";
reticleColors[3] = "Purple";
reticleColors[4] = "Teal";
reticleColors[5] = "Yellow";
reticleColors[6] = "Orange";

const lens = [];
lens[0] = "Clear Lens";
lens[1] = "Red Lens";
lens[2] = "Blue Lens";
lens[3] = "Green Lens";
lens[4] = "Orange Lens";
lens[5] = "Yellow Lens";

const lethal = [];
lethal[0] = "Frag";
lethal[1] = "Semtex";
lethal[2] = "Tomahawk";

const tactical = [];
tactical[0] = "Willy Pete";
tactical[1] = "Nova Gas";
tactical[2] = "Flashbang";
tactical[3] = "Concussion";
tactical[4] = "Decoy";

const equipment = [];
equipment[0] = "No equipment";
equipment[1] = "Camera Spike";
equipment[2] = "C4";
equipment[3] = "Tactical Insertion";
equipment[4] = "Jammer";
equipment[5] = "Motion Sensor";
equipment[6] = "Claymore";

const perkOne = [];
perkOne[0] = "Lightweight";
perkOne[1] = "Scavenger";
perkOne[2] = "Ghost";
perkOne[3] = "Flak Jacket";
perkOne[4] = "Hardline";

const perkTwo = [];
perkTwo[0] = "Hardened";
perkTwo[1] = "Scout";
perkTwo[2] = "Steady Aim";
perkTwo[3] = "Sleight of Hand";
perkTwo[4] = "Warlord";

const perkThree = [];
perkThree[0] = "Tactical Mask";
perkThree[1] = "Marathon";
perkThree[2] = "Ninja";
perkThree[3] = "Second Chance";
perkThree[4] = "Hacker";

const facePaint = [];
facePaint[0] = "Clean";
facePaint[1] = "Stalker";
facePaint[2] = "Banshee";
facePaint[3] = "Highlander";
facePaint[4] = "Sidewinder";
facePaint[5] = "Mantis";
facePaint[6] = "Militia";
facePaint[7] = "Apache";
facePaint[8] = "Sandman";
facePaint[9] = "Zulu";
facePaint[10] = "Blitz";
facePaint[11] = "Commando";
facePaint[12] = "Tundra";
facePaint[13] = "Animal";
facePaint[14] = "Dutch";
facePaint[15] = "Ranger";
facePaint[16] = "Smoke";
facePaint[17] = "Black Widow";
facePaint[18] = "Death";
facePaint[19] = "Reaper";
facePaint[20] = "Jester";
facePaint[21] = "Dragon";
facePaint[22] = "Lion";
facePaint[23] = "Demon";
facePaint[24] = "Spider";

let randPrimary;
let randPrimaryAttOne;
let randPrimaryAttTwo;
let randCamo;
let randRet;
let randRetColor;
let randLens;
let randSecondary;
let randSecondaryAtt;
let randLethal;
let randTactical;
let randEquipment;
let randPerkOne;
let randPerkTwo;
let randPerkThree;
let randFacePaint;

function randomizeClass(){
    randLethal = Math.floor(Math.random() * lethal.length);
    randTactical = Math.floor(Math.random() * tactical.length);
    randEquipment = Math.floor(Math.random() * equipment.length);

    randPerkOne = Math.floor(Math.random() * perkOne.length);
    randPerkTwo = Math.floor(Math.random() * perkTwo.length);
    randPerkThree = Math.floor(Math.random() * perkThree.length);

    randFacePaint = Math.floor(Math.random() * facePaint.length);

    randPrimary = Math.floor(Math.random() * primaries.length);
    randPrimaryAttOne = 0;
    randPrimaryAttTwo = 0;
    if (primaries[randPrimary].attachments.length > 1) {
        while (true) {
            randPrimaryAttOne = primaries[randPrimary].attachments[Math.floor(Math.random() * primaries[randPrimary].attachments.length)];
            if (randPrimaryAttOne > 0 ) {
                break;
            }
        }
    } else if (primaries[randPrimary].attachments.length == 1) {
        randPrimaryAttOne = primaries[randPrimary].attachments[0];
    }
    if (randPerkTwo == 4) {
        if (primaries[randPrimary].attachments.length <= 1 || exclusiveAttachments.includes(randPrimaryAttOne) || randPrimary == 18) {
            /* do nothing, leave attachment two set to "No attachment" */
        } else if (magAttachments.includes(randPrimaryAttOne)) {
            while (true) {
                randPrimaryAttTwo = primaries[randPrimary].attachments[Math.floor(Math.random() * primaries[randPrimary].attachments.length)];
                if (randPrimaryAttTwo != randPrimaryAttOne && !(magAttachments.includes(randPrimaryAttTwo) in magAttachments) && !(exclusiveAttachments.includes(randPrimaryAttTwo))) {
                    break;
                }
            }
        } else if (opticAttachments.includes(randPrimaryAttOne)) {
            while (true) {
                randPrimaryAttTwo = primaries[randPrimary].attachments[Math.floor(Math.random() * primaries[randPrimary].attachments.length)];
                if (randPrimaryAttTwo != randPrimaryAttOne && !(opticAttachments.includes(randPrimaryAttTwo)) && !(exclusiveAttachments.includes(randPrimaryAttTwo))) {
                    break;
                }
            }
        } else {
            while (true) {
                randPrimaryAttTwo = primaries[randPrimary].attachments[Math.floor(Math.random() * primaries[randPrimary].attachments.length)];
                if (randPrimaryAttTwo != randPrimaryAttOne && !(exclusiveAttachments.includes(randPrimaryAttTwo))) {
                    break;
                }
            }
        }
    }

    randCamo = Math.floor(Math.random() * camos.length);

    randRet = 0;
    randRetColor = 0;
    randLens = 0;

    if (customizableOptics.includes(randPrimaryAttOne) || customizableOptics.includes(randPrimaryAttTwo)) {
        randRet = Math.floor(Math.random() * reticles.length);
        randRetColor = Math.floor(Math.random() * reticleColors.length);
        randLens = Math.floor(Math.random() * lens.length);
    }

    randSecondary = Math.floor(Math.random() * secondaries.length);
    randSecondaryAtt = 0;
    if (secondaries[randSecondary].attachments.length > 1) {
        while (true) {
            randSecondaryAtt = secondaries[randSecondary].attachments[Math.floor(Math.random() * secondaries[randSecondary].attachments.length)];
            if (randSecondaryAtt > 0 ) {
                break;
            }
        }
    } else if (secondaries[randSecondary].attachments.length == 1) {
        randSecondaryAtt = secondaries[randSecondary].attachments[0];
    }
}

function printClass() {
    console.log("Primary:       " + primaries[randPrimary].name);
    if (primaries[randPrimary].attachments.length > 0) {
        if (randPrimaryAttTwo != 0) {
            console.log("Attachments:   " + attachments[randPrimaryAttOne] + ", " + attachments[randPrimaryAttTwo]);
        } else {
            console.log("Attachment:    " + attachments[randPrimaryAttOne]);
        }
    }
    console.log("Camo:          " + camos[randCamo]);

    if (customizableOptics.includes(randPrimaryAttOne) || customizableOptics.includes(randPrimaryAttTwo)) {
        console.log("Reticle:       " + reticles[randRet]);
        console.log("Reticle Color: " + reticleColors[randRetColor]);
        console.log("Lens:          " + lens[randLens]);
    }
    console.log();
    console.log("Secondary:     " + secondaries[randSecondary].name);
    if (secondaries[randSecondary].attachments.length > 0) {
        console.log("Attachment:    " + attachments[randSecondaryAtt]);
    }
    console.log();
    console.log("Lethal:        " + lethal[randLethal]);
    console.log("Tactical:      " + tactical[randTactical]);
    console.log("Equipment:     " + equipment[randEquipment]);
    console.log();
    console.log("Perk 1:        " + perkOne[randPerkOne]);
    console.log("Perk 2:        " + perkTwo[randPerkTwo]);
    console.log("Perk 3:        " + perkThree[randPerkThree]);
    console.log();
    console.log("Face Paint:    " + facePaint[randFacePaint]);
}

function updateFields() {
    randomizeClass();

    document.getElementById("randPrimary").innerHTML = primaries[randPrimary].name;
    if (primaries[randPrimary].attachments.length == 0) {
        document.getElementById("randPrimaryAtt").innerHTML = "";
    } else if (randPrimaryAttTwo != 0) {
        document.getElementById("randPrimaryAtt").innerHTML = attachments[randPrimaryAttOne] + ", " + attachments[randPrimaryAttTwo];
    } else {
        document.getElementById("randPrimaryAtt").innerHTML = attachments[randPrimaryAttOne];
    }
    document.getElementById("randCamo").innerHTML = camos[randCamo];
    if (customizableOptics.includes(randPrimaryAttOne) || customizableOptics.includes(randPrimaryAttTwo)) {
        document.getElementById("randReticle").innerHTML = reticles[randRet];
        document.getElementById("randReticleColor").innerHTML = reticleColors[randRetColor];
        document.getElementById("randLens").innerHTML = lens[randLens];
    } else {
        document.getElementById("randReticle").innerHTML = "";
        document.getElementById("randReticleColor").innerHTML = "";
        document.getElementById("randLens").innerHTML = "";
    }
    document.getElementById("randSecondary").innerHTML = secondaries[randSecondary].name;
    if (secondaries[randSecondary].attachments.length > 0) {
        document.getElementById("randSecondaryAtt").innerHTML = attachments[randSecondaryAtt];
    } else {
        document.getElementById("randSecondaryAtt").innerHTML = "";
    }
    document.getElementById("randLethal").innerHTML = lethal[randLethal];
    document.getElementById("randTactical").innerHTML = tactical[randTactical];
    document.getElementById("randEquipment").innerHTML = equipment[randEquipment];
    document.getElementById("randPerk1").innerHTML = perkOne[randPerkOne];
    document.getElementById("randPerk2").innerHTML = perkTwo[randPerkTwo];
    document.getElementById("randPerk3").innerHTML = perkThree[randPerkThree];
    document.getElementById("randFacePaint").innerHTML = facePaint[randFacePaint];
}

randomizeClass();