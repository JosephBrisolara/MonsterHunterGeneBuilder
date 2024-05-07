module.exports = {};

module.exports.Gene = class Gene {
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

module.exports.Loadout = class Loadout {
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
