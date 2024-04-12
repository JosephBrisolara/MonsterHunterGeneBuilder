window.addEventListener("load", function () {
    displayLoadouts();
})

function createLoadoutCard(loadout, parentID) {
    if (typeof loadout === 'string') {
        loadout = JSON.parse(loadout);
    }

    // Create the card
    const c = document.createElement("div");
    c.value = loadout;
    c.setAttribute("class", "LoadoutCard")

    // Appending the Gene Card to the c specified
    document.getElementById(parentID).appendChild(c);

    // Adding the Loadout Name to the Loadout Card
    const t = document.createElement('p');
    t.innerText = loadout.monsterName;
    t.setAttribute("class", "LoadoutLabel");
    c.appendChild(t);

    // Creating elements for the genes in the grid
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

    const buffs = bingoBuffs(loadout);
    // Style the buffs and also append to c
    const buffstring = styleBingoBuffs(buffs, c);
}

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
function bingoBuffs(Loadout) {
    buffs = {
        "Non-Elem": 0,
        "Fire": 0,
        "Ice": 0,
        "Thunder": 0,
        "Dragon": 0,
        "Power Type": 0,
        "Speed Type": 0,
        "Technical Type": 0
    }
    // Check for Elements
    // Top Row
    if ((Loadout.topLeft.element == Loadout.topMiddle.element) && (Loadout.topLeft.element == Loadout.topRight.element)) {
        buffs[Loadout.topLeft.element] = buffs[Loadout.topLeft.element] + 1;
    }
    // Middle Row
    if ((Loadout.middleLeft.element == Loadout.middleMiddle.element) && (Loadout.middleLeft.element == Loadout.middleRight.element)) {
        buffs[Loadout.middleLeft.element] = buffs[Loadout.middleLeft.element] + 1;
    }
    // Bottom Row
    if ((Loadout.bottomLeft.element == Loadout.bottomMiddle.element) && (Loadout.bottomLeft.element == Loadout.bottomRight.element)) {
        buffs[Loadout.bottomLeft.element] = buffs[Loadout.bottomLeft.element] + 1;
    }
    // Left Column
    if ((Loadout.topLeft.element == Loadout.middleLeft.element) && (Loadout.topLeft.element == Loadout.bottomLeft.element)) {
        buffs[Loadout.topLeft.element] = buffs[Loadout.topLeft.element] + 1;
    }
    // Middle Column
    if ((Loadout.topMiddle.element == Loadout.middleMiddle.element) && (Loadout.topMiddle.element == Loadout.bottomMiddle.element)) {
        buffs[Loadout.topMiddle.element] = buffs[Loadout.topMiddle.element] + 1;
    }
    // Right Column
    if ((Loadout.topRight.element == Loadout.middleRight.element) && (Loadout.topRight.element == Loadout.bottomRight.element)) {
        buffs[Loadout.topRight.element] = buffs[Loadout.topRight.element] + 1;
    }
    // Diagonal top left to bottom right
    if ((Loadout.topLeft.element == Loadout.middleMiddle.element) && (Loadout.topLeft.element == Loadout.bottomRight.element)) {
        buffs[Loadout.topLeft.element] = buffs[Loadout.topLeft.element] + 1;
    }
    // Diagonal bottom left to top right
    if ((Loadout.bottomLeft.element == Loadout.middleMiddle.element) && (Loadout.bottomLeft.element == Loadout.topRight.element)) {
        buffs[Loadout.bottomLeft.element] = buffs[Loadout.bottomLeft.element] + 1;
    }

    // Check for Types
    if ((Loadout.topLeft.type == Loadout.topMiddle.type) && (Loadout.topLeft.type == Loadout.topRight.type)) {
        buffs[Loadout.topLeft.type] = buffs[Loadout.topLeft.type] + 1;
    }
    // Middle Row
    if ((Loadout.middleLeft.type == Loadout.middleMiddle.type) && (Loadout.middleLeft.type == Loadout.middleRight.type)) {
        buffs[Loadout.middleLeft.type] = buffs[Loadout.middleLeft.type] + 1;
    }
    // Bottom Row
    if ((Loadout.bottomLeft.type == Loadout.bottomMiddle.type) && (Loadout.bottomLeft.type == Loadout.bottomRight.type)) {
        buffs[Loadout.bottomLeft.type] = buffs[Loadout.bottomLeft.type] + 1;
    }
    // Left Column
    if ((Loadout.topLeft.type == Loadout.middleLeft.type) && (Loadout.topLeft.type == Loadout.bottomLeft.type)) {
        buffs[Loadout.topLeft.type] = buffs[Loadout.topLeft.type] + 1;
    }
    // Middle Column
    if ((Loadout.topMiddle.type == Loadout.middleMiddle.type) && (Loadout.topMiddle.type == Loadout.bottomMiddle.type)) {
        buffs[Loadout.topMiddle.type] = buffs[Loadout.topMiddle.type] + 1;
    }
    // Right Column
    if ((Loadout.topRight.type == Loadout.middleRight.type) && (Loadout.topRight.type == Loadout.bottomRight.type)) {
        buffs[Loadout.topRight.type] = buffs[Loadout.topRight.type] + 1;
    }
    // Diagonal top left to bottom right
    if ((Loadout.topLeft.type == Loadout.middleMiddle.type) && (Loadout.topLeft.type == Loadout.bottomRight.type)) {
        buffs[Loadout.topLeft.type] = buffs[Loadout.topLeft.type] + 1;
    }
    // Diagonal bottom left to top right
    if ((Loadout.bottomLeft.type == Loadout.middleMiddle.type) && (Loadout.bottomLeft.type == Loadout.topRight.type)) {
        buffs[Loadout.bottomLeft.type] = buffs[Loadout.bottomLeft.type] + 1;
    }
    return buffs;
}


function styleBingoBuffs(buffs, parentNode) {
    const buffTable = document.createElement("div");
    buffTable.setAttribute("class", "buffTable");
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