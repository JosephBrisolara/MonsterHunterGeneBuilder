class Gene {
    constructor(id, name, skillName, type, element, description, size) {
        this.id = id;
        this.name = name;
        this.skillName = skillName;
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

// Create the gene array and add temp data
// ID, Gene Name, Skill Name, Type, Element, Description and Size
let GeneArray = [];
GeneArray.push(new Gene(1, "Whip Gene", "Tail Spin", "Technical", "Non-Elem", "Deals Light Non-Elem to all Enemies. This is to test what happens when there is a lot of text to see what the sizing does because that is important", 1))
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

// Create an empty array for the loadouts
let Loadouts = [];

// Create the Gene Card that is generated in gene list
function generateGeneCard(gene, parentID) {
    // Create the card
    const p = document.createElement("div");
    p.value = gene;
    p.setAttribute("class", "geneListItem")

    // Create the two columns of the gene card
    const leftColumn = document.createElement("div");
    const rightColumn = document.createElement("div");

    // Append the columns to the Gene Card
    p.appendChild(leftColumn);
    p.appendChild(rightColumn);

    // Creating elements for the ID, Gene Name, Skill Name, Type, Element, Description and Size
    const ID = document.createElement("p");
    const geneName = document.createElement("h3");
    const skillName = document.createElement("h3");
    const type = document.createElement("p");
    const element = document.createElement("p");
    const description = document.createElement("p");
    const size = document.createElement("p");

    // Adding the text to the elements
    ID.innerText = `ID: ${gene.id}`;
    geneName.innerText = gene.name;
    skillName.innerText = gene.skillName;
    type.innerText = gene.type;
    element.innerText = gene.element;
    description.innerText = gene.description;
    size.innerText = `Gene Size: ${gene.size}`

    // Adding the ID, Gene Name, Type, Element, and Size to the leftColumn
    leftColumn.appendChild(geneName);
    leftColumn.appendChild(ID);
    leftColumn.appendChild(type);
    leftColumn.appendChild(element);
    leftColumn.appendChild(size);

    // Adding the Skill Name and Description to the rightColumn
    rightColumn.appendChild(skillName);
    rightColumn.appendChild(description);

    // Appending the Gene Card to the container specified
    document.getElementById(parentID).appendChild(p);
}

function saveLoadout() {
    // Getting all of the genes from in the grids
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
    console.log(Loadouts);

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

function searchSkills() {
    // Get the string from the search bar
    skillNameInput = document.getElementById("skillSearch").value;
    const regex = new RegExp(skillNameInput)

    // Empty the Container to Prepare to add GeneCards
    document.getElementById("searchedSkills").innerHTML = null;

    // Use regex to compare the string to all gene names in the gene array
    for (let i = 0; i < GeneArray.length; i++) {
        if (regex.test(GeneArray[i].skillName)) {
            generateGeneCard(GeneArray[i], "searchedSkills")
        }
    }
}

window.addEventListener("load", function () {
    // Adding all genes in GeneArray to geneList
    for (let i = 0; i < GeneArray.length; i++)
        generateGeneCard(GeneArray[i], "geneList");
});
