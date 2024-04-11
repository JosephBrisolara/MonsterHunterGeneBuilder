window.addEventListener("load", function () {
    // Adding all genes in GeneArray to geneList
    for (let i = 0; i < genes.length; i++)
        generateGeneCard(genes[i], "geneList");
});

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

    // Signal that the new loadout has been added
    document.getElementById("loadoutList").innerText = "You have added the new loadout for: " + newLoadout.monsterName;

    sessionStorage.setItem(newLoadout.monsterName, JSON.stringify(newLoadout));
}