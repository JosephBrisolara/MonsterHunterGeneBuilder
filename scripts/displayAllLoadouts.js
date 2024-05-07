// displays all the loadouts in the session storage on window load
window.addEventListener("load", function () {
    displayLoadouts();
})

// creates the displayable Loadout Card
function createLoadoutCard(loadout, parentID) {
    if (typeof loadout === 'string') {
        loadout = JSON.parse(loadout);
    }

    // Create the card
    const c = document.createElement("div");
    c.value = loadout;
    c.setAttribute("class", "LoadoutCard")

    // Appending the Card to the parent node specified by id
    document.getElementById(parentID).appendChild(c);

    // Adding the Loadout Name to the Loadout Card and setting a class for later styling
    const t = document.createElement('p');
    t.innerText = loadout.monsterName;
    t.setAttribute("class", "LoadoutLabel");
    c.appendChild(t);

    // Creating elements for the genes in the grid and setting a class for later styling
    const g = document.createElement('div');
    g.setAttribute("class", "LoadoutGrid");

    const UL = document.createElement("p");
    const UM = document.createElement("p");
    const UR = document.createElement("p");
    const ML = document.createElement("p");
    const MM = document.createElement("p");
    const MR = document.createElement("p");
    const LL = document.createElement("p");
    const LM = document.createElement("p");
    const LR = document.createElement("p");

    // Adding the text to the elements
    UL.innerText = loadout.topLeft.skillName;
    UM.innerText = loadout.topMiddle.skillName;
    UR.innerText = loadout.topRight.skillName;
    ML.innerText = loadout.middleLeft.skillName;
    MM.innerText = loadout.middleMiddle.skillName;
    MR.innerText = loadout.middleRight.skillName;
    LL.innerText = loadout.bottomLeft.skillName;
    LM.innerText = loadout.bottomMiddle.skillName;
    LR.innerText = loadout.bottomRight.skillName;

    // Adding the genes to the c
    g.appendChild(UL);
    g.appendChild(UM);
    g.appendChild(UR);
    g.appendChild(ML);
    g.appendChild(MM);
    g.appendChild(MR);
    g.appendChild(LL);
    g.appendChild(LM);
    g.appendChild(LR);

    // Attach LoadoutGrid to LoadoutCard
    c.appendChild(g);

    // calculate the buffs from the loadout
    const buffs = bingoBuffs(loadout);
    // Style the buffs and also append to c
    styleBingoBuffs(buffs, c);
}

// displays all the loadouts found in the session storage to the displayAllLoadouts page
function displayLoadouts() {
    for (let i = 0; i < sessionStorage.length; i++) {
        const loadoutString = sessionStorage.getItem(sessionStorage.key(i));
        if (loadoutString == "true") {
            continue;
        }
        createLoadoutCard(JSON.parse(loadoutString), "displayAllLoadouts");
    }
}

// Pass in a Loadout and return json with the bingo buffs
function bingoBuffs(loadout) {
    buffs = {
        "Non-Elem": 0,
        "Fire": 0,
        "Water": 0,
        "Ice": 0,
        "Thunder": 0,
        "Dragon": 0,
        "Power Type": 0,
        "Speed Type": 0,
        "Technical Type": 0
    }
    // Check for Elements
    // Top Row
    if ((loadout.topLeft.element == loadout.topMiddle.element) && (loadout.topLeft.element == loadout.topRight.element)) {
        buffs[loadout.topLeft.element] = buffs[loadout.topLeft.element] + 1;
    }
    // Middle Row
    if ((loadout.middleLeft.element == loadout.middleMiddle.element) && (loadout.middleLeft.element == loadout.middleRight.element)) {
        buffs[loadout.middleLeft.element] = buffs[loadout.middleLeft.element] + 1;
    }
    // Bottom Row
    if ((loadout.bottomLeft.element == loadout.bottomMiddle.element) && (loadout.bottomLeft.element == loadout.bottomRight.element)) {
        buffs[loadout.bottomLeft.element] = buffs[loadout.bottomLeft.element] + 1;
    }
    // Left Column
    if ((loadout.topLeft.element == loadout.middleLeft.element) && (loadout.topLeft.element == loadout.bottomLeft.element)) {
        buffs[loadout.topLeft.element] = buffs[loadout.topLeft.element] + 1;
    }
    // Middle Column
    if ((loadout.topMiddle.element == loadout.middleMiddle.element) && (loadout.topMiddle.element == loadout.bottomMiddle.element)) {
        buffs[loadout.topMiddle.element] = buffs[loadout.topMiddle.element] + 1;
    }
    // Right Column
    if ((loadout.topRight.element == loadout.middleRight.element) && (loadout.topRight.element == loadout.bottomRight.element)) {
        buffs[loadout.topRight.element] = buffs[loadout.topRight.element] + 1;
    }
    // Diagonal top left to bottom right
    if ((loadout.topLeft.element == loadout.middleMiddle.element) && (loadout.topLeft.element == loadout.bottomRight.element)) {
        buffs[loadout.topLeft.element] = buffs[loadout.topLeft.element] + 1;
    }
    // Diagonal bottom left to top right
    if ((loadout.bottomLeft.element == loadout.middleMiddle.element) && (loadout.bottomLeft.element == loadout.topRight.element)) {
        buffs[loadout.bottomLeft.element] = buffs[loadout.bottomLeft.element] + 1;
    }

    // Check for Types
    if ((loadout.topLeft.type == loadout.topMiddle.type) && (loadout.topLeft.type == loadout.topRight.type)) {
        buffs[loadout.topLeft.type] = buffs[loadout.topLeft.type] + 1;
    }
    // Middle Row
    if ((loadout.middleLeft.type == loadout.middleMiddle.type) && (loadout.middleLeft.type == loadout.middleRight.type)) {
        buffs[loadout.middleLeft.type] = buffs[loadout.middleLeft.type] + 1;
    }
    // Bottom Row
    if ((loadout.bottomLeft.type == loadout.bottomMiddle.type) && (loadout.bottomLeft.type == loadout.bottomRight.type)) {
        buffs[loadout.bottomLeft.type] = buffs[loadout.bottomLeft.type] + 1;
    }
    // Left Column
    if ((loadout.topLeft.type == loadout.middleLeft.type) && (loadout.topLeft.type == loadout.bottomLeft.type)) {
        buffs[loadout.topLeft.type] = buffs[loadout.topLeft.type] + 1;
    }
    // Middle Column
    if ((loadout.topMiddle.type == loadout.middleMiddle.type) && (loadout.topMiddle.type == loadout.bottomMiddle.type)) {
        buffs[loadout.topMiddle.type] = buffs[loadout.topMiddle.type] + 1;
    }
    // Right Column
    if ((loadout.topRight.type == loadout.middleRight.type) && (loadout.topRight.type == loadout.bottomRight.type)) {
        buffs[loadout.topRight.type] = buffs[loadout.topRight.type] + 1;
    }
    // Diagonal top left to bottom right
    if ((loadout.topLeft.type == loadout.middleMiddle.type) && (loadout.topLeft.type == loadout.bottomRight.type)) {
        buffs[loadout.topLeft.type] = buffs[loadout.topLeft.type] + 1;
    }
    // Diagonal bottom left to top right
    if ((loadout.bottomLeft.type == loadout.middleMiddle.type) && (loadout.bottomLeft.type == loadout.topRight.type)) {
        buffs[loadout.bottomLeft.type] = buffs[loadout.bottomLeft.type] + 1;
    }
    return buffs;
}

// Adds attributes to the bingoBuffs for later styling and also appends to the parentNode (the Loadout Card)
function styleBingoBuffs(buffs, parentNode) {
    // Create the container to hold the bingo buffs and set class for later styling
    const buffTable = document.createElement("div");
    buffTable.setAttribute("class", "buffTable");
    // For each entry in the bingo buffs (there are 9), create a container and append it to the buffTable and add classes for later styling
    for (const [key, value] of Object.entries(buffs)) {
        const buffTableEntry = document.createElement("div");
        buffTableEntry.setAttribute("class", "buffTableEntry");

        const keyDiv = document.createElement("div");
        keyDiv.setAttribute("class", "buffTableKey");
        keyDiv.innerText = key;
        buffTableEntry.appendChild(keyDiv);

        const valueDiv = document.createElement("div");
        valueDiv.setAttribute("class", "buffTableValue");
        valueDiv.innerText = value;
        buffTableEntry.appendChild(valueDiv);

        buffTable.appendChild(buffTableEntry);
    }
    parentNode.appendChild(buffTable);
}

if (typeof module === 'object') {
    module.exports = bingoBuffs;
}