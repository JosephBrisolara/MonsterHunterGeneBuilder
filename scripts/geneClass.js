class Gene {
    constructor(id, name, skill_name, type, element, description, size) {
        this.id = id;
        this.name = name;
        this.skill_name = skill_name;
        this.type = type;
        this.element = element;
        this.description = description;
        this.size = size;
    }
}

class Loadout {
    constructor(monsterName, topLeft, topMiddle, topRight, middleLeft, middleMiddle, middleRight, bottomLeft, bottomMiddle, bottomRight) {
        this.monsterName = monsterName;
        this.topLeft = topLeft;
        this.topMiddle = topMiddle;
        this.topRight = topRight;
        this.middleLeft = middleLeft;
        this.middleMiddle = middleMiddle;
        this.middleRight = middleRight;
        this.bottomLeft = bottomLeft;
        this.bottomMiddle = bottomMiddle;
        this.bottomRight = bottomRight;
    }
}

let GeneArray = [];
GeneArray.push(new Gene(1, "Whip Gene", "Tail Spin", "Technical", "Non-Elem", "Deals Light Non-Elem to all Enemies", 1))
GeneArray.push(new Gene(2, "Whip Gene", "Tail Spin", "Technical", "Non-Elem", "Deals Light Non-Elem to all Enemies", 1))
GeneArray.push(new Gene(3, "Blast Gene", "Tail Spin", "Technical", "Non-Elem", "Deals Light Non-Elem to all Enemies", 1))
GeneArray.push(new Gene(4, "Fire Gene", "Tail Spin", "Technical", "Non-Elem", "Deals Light Non-Elem to all Enemies", 1))
GeneArray.push(new Gene(5, "Water Gene", "Tail Spin", "Technical", "Non-Elem", "Deals Light Non-Elem to all Enemies", 1))
GeneArray.push(new Gene(6, "Whip Gene", "Tail Spin", "Technical", "Non-Elem", "Deals Light Non-Elem to all Enemies", 1))
GeneArray.push(new Gene(7, "Whip Gene", "Tail Spin", "Technical", "Non-Elem", "Deals Light Non-Elem to all Enemies", 1))
GeneArray.push(new Gene(8, "Whip Gene", "Tail Spin", "Technical", "Non-Elem", "Deals Light Non-Elem to all Enemies", 1))
GeneArray.push(new Gene(9, "Whip Gene", "Tail Spin", "Technical", "Non-Elem", "Deals Light Non-Elem to all Enemies", 1))
GeneArray.push(new Gene(10, "Whip Gene", "Tail Spin", "Technical", "Non-Elem", "Deals Light Non-Elem to all Enemies", 1))
GeneArray.push(new Gene(11, "Whip Gene", "Tail Spin", "Technical", "Non-Elem", "Deals Light Non-Elem to all Enemies", 1))
GeneArray.push(new Gene(12, "Whip Gene", "Tail Spin", "Technical", "Non-Elem", "Deals Light Non-Elem to all Enemies", 1))
GeneArray.push(new Gene(13, "Whip Gene", "Tail Spin", "Technical", "Non-Elem", "Deals Light Non-Elem to all Enemies", 1))
GeneArray.push(new Gene(14, "Whip Gene", "Tail Spin", "Technical", "Non-Elem", "Deals Light Non-Elem to all Enemies", 1))
GeneArray.push(new Gene(15, "Whip Gene", "Tail Spin", "Technical", "Non-Elem", "Deals Light Non-Elem to all Enemies", 1))
GeneArray.push(new Gene(16, "Whip Gene", "Tail Spin", "Technical", "Non-Elem", "Deals Light Non-Elem to all Enemies", 1))
GeneArray.push(new Gene(17, "Whip Gene", "Tail Spin", "Technical", "Non-Elem", "Deals Light Non-Elem to all Enemies", 1))
GeneArray.push(new Gene(18, "Whip Gene", "Tail Spin", "Technical", "Non-Elem", "Deals Light Non-Elem to all Enemies", 1))

let Loadouts = [];


function generateGeneCard(gene, parentID) {
    const p = document.createElement("p")
    p.innerText = `ID: ${gene.id}, ${gene.name}, other info goes here in an aesthetic way`;
    p.id = `GeneID:${gene.id}`;
    p.value = gene;
    p.setAttribute("ondragstart", "drag(event)");
    p.setAttribute("draggable", "true");
    p.setAttribute("class", "geneListItem")
    document.getElementById(parentID).appendChild(p);
}

function saveLoadout() {
    // Getting all of the genes in the grids
    topLeft = document.getElementById("topLeft").firstChild.value;
    topMiddle = document.getElementById("topMiddle").firstChild.value;
    topRight = document.getElementById("topRight").firstChild.value;
    middleLeft = document.getElementById("middleLeft").firstChild.value;
    middleMiddle = document.getElementById("middleMiddle").firstChild.value;
    middleRight = document.getElementById("middleRight").firstChild.value;
    bottomLeft = document.getElementById("bottomLeft").firstChild.value;
    bottomMiddle = document.getElementById("bottomMiddle").firstChild.value;
    bottomRight = document.getElementById("bottomRight").firstChild.value;

    // Getting the input name
    loadoutName = document.getElementById("loadoutName").value;

    // Creating a loadout and add to array
    newLoadout = new Loadout(loadoutName, topLeft, topMiddle, topRight, middleLeft, middleMiddle, middleRight, bottomLeft, bottomMiddle, bottomRight);
    Loadouts.push(newLoadout);

    // Adding the new loadout to the loadoutList to display
    loadoutString = `${loadoutName}: ${topLeft.name}, ${topMiddle.name}... Other loadout information here`;
    document.getElementById("loadoutList").innerText += '\n' + loadoutString;
}

function searchGenes() {
    // Get the string from the search bar
    geneNameInput = document.getElementById("geneSearch").value;
    const regex = new RegExp(geneNameInput)

    // Empty the Container to Prepare to add GeneCards
    document.getElementById("searchedGenes").innerHTML = null;

    // Use regex to compare the string to all gene names in the gene array
    for (let i = 0; i < GeneArray.length; i++) {
        if (regex.test(GeneArray[i].name)) {
            generateGeneCard(GeneArray[i], "searchedGenes")
        }
    }
}

window.addEventListener("load", function () {
    // Adding all genes in GeneArray to geneList
    for (let i = 0; i < GeneArray.length; i++)
        generateGeneCard(GeneArray[i], "geneList");
});
