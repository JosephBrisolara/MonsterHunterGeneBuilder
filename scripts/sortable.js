window.addEventListener("load", function () {
    // Add the ability to drag within the gene list items
    Sortable.create(geneList, {
        group: "genes",
        animation: 100
    });

    // Add the ability to drag within the searched genes
    Sortable.create(searchedGenes, {
        group: "genes",
        animation: 100
    })

    // Add the ability to move the gene list items into the gene grid
    Sortable.create(geneGrid, {
        group: "genes"
    });
})
