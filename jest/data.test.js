const genes = require("../scripts/data");

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

test("Check gene sizes in genes array", () => {
    sizes = ["1", "2", "3", "4"];
    genes.forEach((gene) => {
        expect(sizes.includes(gene.size)).toBe(true);
    });
});

