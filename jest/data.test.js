const genes = require("../scripts/data");
const geneClass = require("../scripts/geneClass");

test("Check elements in genes array", () => {
    elements = ["Fire", "Water", "Ice", "Thunder", "Dragon", "Non-Elem"];
    genes.forEach((gene) => {
        expect(elements.includes(gene.element)).toBe(true);
    });
});

test("Check types in genes array", () => {
    types = ["Power Type", "Speed Type", "Technical Type", "No Type"];
    genes.forEach((gene) => {
        expect(types.includes(gene.type)).toBe(true);
    });
});