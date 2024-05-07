window.addEventListener("load", function () {
    // Adding all genes in GeneArray to geneList
    for (let i = 0; i < genes.length; i++)
        generateGeneCard(genes[i], "geneList");

});

function search() {
    // Get all of the values from the input fields
    const geneName = document.getElementById("searchGeneName");
    const skill = document.getElementById("searchSkillName");
    const fire = document.getElementById("fire");
    const water = document.getElementById("water");
    const ice = document.getElementById("ice");
    const thunder = document.getElementById("thunder");
    const dragon = document.getElementById("dragon");
    const nonElem = document.getElementById("nonElem");
    const power = document.getElementById("power");
    const technical = document.getElementById("technical");
    const speed = document.getElementById("speed");
    const small = document.getElementById("small");
    const medium = document.getElementById("medium");
    const large = document.getElementById("large");
    const xl = document.getElementById("XL");

    // Search for genes and output their genes to results
    const results = genes.filter((gene) => {
        const geneNameBool = (gene.name.includes(geneName.value.trim()) || (geneName.value.trim() == ''));
        const skillNameBool = (gene.skillName.includes(skill.value.trim()) || (skill.value.trim() == ''));

        const geneElement = gene.element;
        const fireBool = ((geneElement == fire.value) && (fire.checked));
        const waterBool = ((geneElement == water.value) && (water.checked));
        const iceBool = ((geneElement == ice.value) && (ice.checked));
        const thunderBool = ((geneElement == thunder.value) && (thunder.checked));
        const dragonBool = ((geneElement == dragon.value) && (dragon.checked));
        const nonElemBool = ((geneElement == nonElem.value) && (nonElem.checked));

        const geneType = gene.type;
        const powerBool = ((geneType == power.value) && (power.checked));
        const technicalBool = ((geneType == technical.value) && (technical.checked));
        const speedBool = ((geneType == speed.value) && (speed.checked));

        const geneSize = gene.size;
        const smallBool = ((geneSize == small.value) && (small.checked));
        const mediumBool = ((geneSize == medium.value) && (medium.checked));
        const largeBool = ((geneSize == large.value) && (large.checked));
        const xlBool = ((geneSize == xl.value) && (xl.checked));

        // No element checked on form
        const elementBool = ((fire.checked == false) && (water.checked == false) && (ice.checked == false) && (thunder.checked == false) && (dragon.checked == false) && (nonElem.checked == false));
        // No type checked on form
        const typeBool = ((power.checked == false) && (technical.checked == false) && (speed.checked == false));
        // No size checked on form
        const sizeBool = ((small.checked == false) && (medium.checked == false) && (large.checked == false) && (xl.checked == false));

        return geneNameBool && skillNameBool && (fireBool || waterBool || iceBool || thunderBool || dragonBool || nonElemBool || elementBool) && (powerBool || technicalBool || speedBool || typeBool) && (smallBool || mediumBool || largeBool || xlBool || sizeBool)
        
    })

    // Generate Gene Cards to geneList
    // Start by emptying geneList
    const geneList = document.getElementById("geneList");
    geneList.innerHTML = '';
    // add the gene cards
    for (let i = 0; i < results.length; i++) {
        generateGeneCard(results[i], "geneList");
    }

    // Clear all of the fields
    geneName.value = " ";
    skill.value = " ";
    fire.checked = false;
    water.checked = false;
    ice.checked = false;
    thunder.checked = false;
    dragon.checked = false;
    nonElem.checked = false;
    power.checked = false;
    technical.checked = false;
    speed.checked = false;
    small.checked = false;
    medium.checked = false;
    large.checked = false;
    xl.checked = false;
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

    // Creating a loadout
    newLoadout = new Loadout(loadoutName, topLeft, topMiddle, topRight, middleLeft, middleMiddle, middleRight, bottomLeft, bottomMiddle, bottomRight);
    // Signal that the new loadout has been added
    document.getElementById("loadoutList").innerText = "You have added the new loadout for: " + newLoadout.monsterName;
    // Add to sessionStorage
    sessionStorage.setItem(newLoadout.monsterName, JSON.stringify(newLoadout));
}

// Create a random loadout by randomly selecting a gene for each slot
function saveRandomLoadout() {
    // save max value
    const max = genes.length;

    // Getting all of the genes from in the grids
    topLeft = genes[Math.floor(Math.random() * max)];
    topMiddle = genes[Math.floor(Math.random() * max)];
    topRight = genes[Math.floor(Math.random() * max)];
    middleLeft = genes[Math.floor(Math.random() * max)];
    middleMiddle = genes[Math.floor(Math.random() * max)];
    middleRight = genes[Math.floor(Math.random() * max)];
    bottomLeft = genes[Math.floor(Math.random() * max)];
    bottomMiddle = genes[Math.floor(Math.random() * max)];
    bottomRight = genes[Math.floor(Math.random() * max)];

    // Getting the input name
    loadoutName = document.getElementById("loadoutName").value;
    // Creating a loadout
    newLoadout = new Loadout(loadoutName, topLeft, topMiddle, topRight, middleLeft, middleMiddle, middleRight, bottomLeft, bottomMiddle, bottomRight);
    // Signal that the new loadout has been added
    document.getElementById("loadoutList").innerText = "You have added the new loadout for: " + newLoadout.monsterName;
    // Add to sessionStorage
    sessionStorage.setItem(newLoadout.monsterName, JSON.stringify(newLoadout));
}
