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
        const power = document.getElementById("power");
        const technical = document.getElementById("technical");
        const speed = document.getElementById("speed");
        const small = document.getElementById("small");
        const medium = document.getElementById("medium");
        const large = document.getElementById("large");
        const xl = document.getElementById("XL");
    
        // Search for genes and output their gene cards
        results = genes.filter(function() {
            for(let i = 0; i < genes.length; i++) {
                const geneNameBool = (genes[i].name.includes(geneName.trim()) || (geneName.trim() == ''));
                const skillNameBool = (genes[i].skillName.includes(skill.trim()) || (skill.trim() == ''));
                const fireBool = ((genes[i].element == fire.value) && (fire.checked));
                const waterBool = ((genes[i].element == water.value) && (water.checked));
                const iceBool = ((genes[i].element == ice.value) && (ice.checked));
                const thunderBool = ((genes[i].element == thunder.value) && (thunder.checked));
                const dragonBool = ((genes[i].element == dragon.value) && (dragon.checked));
                const powerBool = ((genes[i].type == power.value) && (power.checked));
                const technicalBool = ((genes[i].type == technical.value) && (technical.checked));
                const speedBool = ((genes[i].type == speed.value) && (speed.checked));
                const smallBool = ((genes[i].size == small.value) && (small.checked));
                const mediumBool = ((genes[i].size == medium.value) && (medium.checked));
                const largeBool = ((genes[i].size == large.value) && (large.checked));
                const xlBool = ((genes[i].size == xl.value) && (xl.checked));
                const checkboxBool = fireBool || waterBool || iceBool || thunderBool || dragonBool || powerBool || technicalBool || speedBool || smallBool || mediumBool || largeBool || xlBool;
                if (!checkboxBool) {
                    return (geneNameBool && skillNameBool)
                }
                else {
                    return (geneNameBool && skillNameBool) && (fireBool || waterBool || iceBool || thunderBool || dragonBool || powerBool || technicalBool || speedBool || smallBool || mediumBool || largeBool || xlBool || empty);
                }
            }
        })
    
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
