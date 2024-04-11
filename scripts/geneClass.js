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


<<<<<<< HEAD
    // Getting the input name
    loadoutName = document.getElementById("loadoutName").value;

    // Creating a loadout and add to array
    newLoadout = new Loadout(loadoutName, topLeft, topMiddle, topRight, middleLeft, middleMiddle, middleRight, bottomLeft, bottomMiddle, bottomRight);
    Loadouts.push(newLoadout);

    console.log(Loadouts);
    // Signal that the new loadout has been added
    document.getElementById("loadoutList").innerText = "You have added the new loadout for: " + newLoadout.monsterName;

    sessionStorage.setItem(newLoadout.monsterName, JSON.stringify(Loadouts));
}

function searchGenes() {
    // Get the string from the search bar
    geneNameInput = document.getElementById("geneSearch").value;
    const regex = new RegExp(geneNameInput)

    // Empty the Container to Prepare to add GeneCards
    document.getElementById("searchedGenes").innerHTML = null;

    // Use regex to compare the string to all gene names in the gene array
    for (let i = 0; i < genes.length; i++) {
        if (regex.test(genes[i].name)) {
            generateGeneCard(genes[i], "searchedGenes")
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
    for (let i = 0; i < genes.length; i++) {
        if (regex.test(genes[i].skillName)) {
            generateGeneCard(genes[i], "searchedSkills")
        }
    }
}
=======
>>>>>>> searchFeature

// window.addEventListener("load", function () {
//     // Adding all genes in GeneArray to geneList
//     for (let i = 0; i < genes.length; i++)
//         generateGeneCard(genes[i], "geneList");
// });