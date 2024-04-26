/**
@jest-environment jsdom
**/

const displayAllLoadouts = require("../scripts/displayAllLoadouts");
const genes = require("../scripts/data");
const geneClass = require("../scripts/geneClass");

test('Add 1 + 1', () => {
    expect(displayAllLoadouts.add(1, 1)).toEqual(2);
    expect(displayAllLoadouts.add(1, 2)).toEqual(2);
})

test('test all fire grid', () => {
    const fireGenes = genes.filter((gene) => {
        return gene.element == 'Fire';
    });

    // constructor(monsterName, topLeft, topMiddle, topRight, middleLeft, middleMiddle, middleRight, bottomLeft, bottomMiddle, bottomRight)
    const loadout = new geneClass.Loadout('Fire Monster Name', fireGenes[0], fireGenes[1], fireGenes[2], fireGenes[3], fireGenes[4], fireGenes[5], fireGenes[6], fireGenes[7], fireGenes[8]);
    expect(displayAllLoadouts.bingoBuffs(loadout)["Fire"]).toEqual(8);

});

test("test all elements", () => {
    const elements = ["Non-Elem", "Fire", "Ice", "Thunder", "Dragon"];
    elements.forEach((element) => {
        const elementGenes = genes.filter((gene) => {
            return gene.element == element;
        });
        const loadout = new geneClass.Loadout('Name', elementGenes[0],
            elementGenes[1],
            elementGenes[2],
            elementGenes[3],
            elementGenes[4],
            elementGenes[5],
            elementGenes[6],
            elementGenes[7],
            elementGenes[8]);
        expect(displayAllLoadouts.bingoBuffs(loadout)[element]).toEqual(8);
    });
})