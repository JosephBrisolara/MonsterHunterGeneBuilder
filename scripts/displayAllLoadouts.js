const GeneLoadoutString = sessionStorage.getItem("Loadouts");
const GeneLoadouts = JSON.parse(GeneLoadoutString);

function createLoadoutCard(Loadout, parentID) {
    // Create the card
    const c = document.createElement("div");
    c.value = Loadout;
    c.setAttribute("class", "LoadoutCard")


    // Appending the Gene Card to the c specified
    document.getElementById(parentID).appendChild(c);

    // Creating elements for the ID, Gene Name, Skill Name, Type, Element, Description and Size
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
    c.appendChild(UL);
    c.appendChild(UM);
    c.appendChild(UR);
    c.appendChild(ML);
    c.appendChild(MM);
    c.appendChild(MR);
    c.appendChild(LL);
    c.appendChild(LM);
    c.appendChild(LR);

}

function displayLoadouts(Loadouts) {
    console.log("got into displayLoadouts");
    for (let i = 0; i < Loadouts.length; i++) {
        createLoadoutCard(Loadouts[i], "displayAllLoadouts");
    }
}

window.addEventListener("load", function () {

    displayLoadouts(GeneLoadouts);
})