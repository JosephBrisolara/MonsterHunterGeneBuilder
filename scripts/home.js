window.addEventListener("load", function () {
    // Adding all genes in GeneArray to geneList
    for (let i = 0; i < genes.length; i++)
        generateGeneCard(genes[i], "geneList");

});

function search() {
        console.log("Testing");
    
        // Get all of the values from the input fields
        const geneName = document.getElementById("searchGeneName");
        const skill = document.getElementById("searchSkillName");
        const fire = document.getElementById("fire");
        const water = document.getElementById("water");
        const ice = document.getElementById("ice");
        const thunder = document.getElementById("thunder");
        const dragon = document.getElementById("dragon");
        const power = document.getElementById("power");
        const technical = document.getElementById("technical");
        const speed = document.getElementById("speed");
        const small = document.getElementById("small");
        const medium = document.getElementById("medium");
        const large = document.getElementById("large");
        const xl = document.getElementById("XL");
    
        // Search for genes and output their gene cards
        const finalGenes = [];
    
        for(let i = 0; i < finalGenes.length; i++) {
            generateGeneCard(finalGenes[i], "searchItems")
        }
    
        // Clear all of the fields
        geneName.value = " ";
        skill.value = " ";
        fire.checked = false;
        water.checked = false;
        ice.checked = false;
        thunder.checked = false;
        dragon.checked = false;
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

    // Creating a loadout and add to array
    newLoadout = new Loadout(loadoutName, topLeft, topMiddle, topRight, middleLeft, middleMiddle, middleRight, bottomLeft, bottomMiddle, bottomRight);
    Loadouts.push(newLoadout);

    console.log(Loadouts);
    // Signal that the new loadout has been added
    document.getElementById("loadoutList").innerText = "You have added the new loadout for: " + newLoadout.monsterName;

    sessionStorage.setItem("Loadouts", JSON.stringify(Loadouts));
    console.log(sessionStorage.getItem("Loadouts"));
}

function saveRandomLoadout() {
    // Getting all of the genes from in the grids
    topLeft = genes[32];
    topMiddle = genes[24];
    topRight = genes[3];
    middleLeft = genes[284];
    middleMiddle = genes[34];
    middleRight = genes[16];
    bottomLeft = genes[8];
    bottomMiddle = genes[75];
    bottomRight = genes[57];

    // Getting the input name
    loadoutName = document.getElementById("loadoutName").value;

    // Creating a loadout and add to array
    newLoadout = new Loadout(loadoutName, topLeft, topMiddle, topRight, middleLeft, middleMiddle, middleRight, bottomLeft, bottomMiddle, bottomRight);
    Loadouts.push(newLoadout);

    console.log(Loadouts);
    // Signal that the new loadout has been added
    document.getElementById("loadoutList").innerText = "You have added the new loadout for: " + newLoadout.monsterName;

    sessionStorage.setItem("Loadouts", JSON.stringify(Loadouts));
    console.log(sessionStorage.getItem("Loadouts"));
}

// Search Feature


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
