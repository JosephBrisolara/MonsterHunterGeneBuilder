window.addEventListener("load", function () {
    // Add the ability to drag within the gene list items
    Sortable.create(geneList, {
        group: {
            name: "genes"
        },
        animation: 100,

        // Restricting the ability to put multiple items from the gene list into the same gene grid container
        // Element is dropped into the list from another list
        onEnd: function (evt) {
            destination = evt.to;
            source = evt.from;

            // Removing the padding from the gene grid container to better fit the gene card
            destination.style.padding = 0;
        }
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
    for (var i = 0; i < gridItemArray.length; i++) {
        new Sortable(gridItemArray[i], {
            group: {
                name: 'genes',
                put: function (to) {
                    // restricting more than one gene per grid container
                    return to.el.children.length < 1;
                }
            },
            animation: 150,
            fallbackOnBody: true,
        });
    }
})
