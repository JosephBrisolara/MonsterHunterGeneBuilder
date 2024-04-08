window.addEventListener("load", function () {
    // Add the ability to drag within the gene list items
    Sortable.create(geneList, {
        group: {
            name: "genes"
        },
        animation: 100,
        scroll: true,
        forceAutoScrollFallback: true,
        scrollSpeed: 30,

        // Restricting the ability to put multiple items from the gene list into the same gene grid container
        // Element is dropped into the list from another list
        onEnd: function (evt) {
            destination = evt.to;
            source = evt.from;

            // Removing the padding from the gene grid container to better fit the gene card
            destination.style.padding = 0;
        },
        onSort: function (evt) {
            // When moving a gene from one gene grid container to another gene grid container
            destination = evt.to;
            source = evt.from;
            // Remove the padding from the destination
            destination.style.padding = 0;
            // Add padding to the source so the box doesn't disappear
            source.style.padding = 30;
        }
    });

    // Add the ability to drag within the searched genes
    Sortable.create(searchedGenes, {
        group: {
            name: "genes",
            put: false
        },
        animation: 100,
        scroll: true,
        forceAutoScrollFallback: true,
        scrollSpeed: 30
    })

    // Add the ability to drag within the searched skills
    Sortable.create(searchedSkills, {
        group: {
            name: "genes",
            put: false
        },
        animation: 100,
        scroll: true,
        forceAutoScrollFallback: true,
        scrollSpeed: 30
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
