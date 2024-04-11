function createLoadoutCard(Loadout, parentID) {
    if(typeof Loadout === 'string') {
        Loadout = JSON.parse(Loadout);
    }
    
    // Create the card
    const c = document.createElement("div");
    c.value = Loadout;
    c.setAttribute("class", "LoadoutCard")

    // Appending the Gene Card to the c specified
    document.getElementById(parentID).appendChild(c);

    // Adding the Loadout Name to the Loadout Card
    const t = document.createElement('p');
    t.innerText = Loadout.monsterName;
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
    UL.innerText = Loadout.topLeft.skillName;
    UM.innerText = Loadout.topMiddle.skillName;
    UR.innerText = Loadout.topRight.skillName;
    ML.innerText = Loadout.middleLeft.skillName;
    MM.innerText = Loadout.middleMiddle.skillName;
    MR.innerText = Loadout.middleRight.skillName;
    LL.innerText = Loadout.bottomLeft.skillName;
    LM.innerText = Loadout.bottomMiddle.skillName;
    LR.innerText = Loadout.bottomRight.skillName;

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

    const buffs = bingoBuffs(Loadout);
    const b = document.createElement("div");
    b.innerText = JSON.stringify(buffs);
    c.appendChild(b);

}

function displayLoadouts() {
    for (let i = 0; i < sessionStorage.length; i++) {
        console.log("Create loadout");
        const loadoutString = sessionStorage.getItem(sessionStorage.key(i));
        if(loadoutString == "true") {
            continue;
        }
        console.log(loadoutString);
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

window.addEventListener("load", function () {
    displayLoadouts();
})