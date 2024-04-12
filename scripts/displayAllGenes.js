window.addEventListener("load", function () {
    // Adding all the genes to the displayAllGenes page div
    for (let i = 0; i < genes.length; i++)
        generateGeneCard(genes[i], "displayAllGenes");
})