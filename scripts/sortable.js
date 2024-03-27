window.addEventListener("load", function () {
    // Add the ability to drag within the gene list items
    Sortable.create(geneList, {
        group: {
            name: "genes"
        },
        animation: 100
    });

    // Add the ability to drag within the searched genes
    Sortable.create(searchedGenes, {
        group: {
            name: "genes",
            put: false
        },
        animation: 100
    })

    // Allow the genes to be put into the gene grid containers
    gridItemArray = document.getElementsByClassName('gridItem');
    console.log(gridItemArray);
    for (var i = 0; i < gridItemArray.length; i++) {
        new Sortable(gridItemArray[i], {
            group: 'genes',
            animation: 150,
            fallbackOnBody: true,
        });
    }
})
