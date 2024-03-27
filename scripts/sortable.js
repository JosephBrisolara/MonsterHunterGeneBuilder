

window.addEventListener("load", function () {

    Sortable.create(firstList, {});

    Sortable.create(simpleList, { /* options */ });


    // List with handle
    Sortable.create(listWithHandle, {
        handle: '.glyphicon-move',
        animation: 150
    });


    Sortable.create(geneList, {
        group: "genes"
    });
    Sortable.create(geneGrid, {
        group: "genes"
    });
})
