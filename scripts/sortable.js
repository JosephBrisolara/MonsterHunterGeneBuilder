

window.addEventListener("load", function () {
    Sortable.create(geneList, {
        group: "genes",
        animation: 100
    });
    Sortable.create(geneGrid, {
        group: "genes"
    });
})
