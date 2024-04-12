const bingoBuffs = require("../scripts/displayAllLoadouts");

test('test all fire grid', () => {
    const fireGenes = genes.filter((gene) => {
        return gene.element == 'Fire';
    });

    // constructor(monsterName, topLeft, topMiddle, topRight, middleLeft, middleMiddle, middleRight, bottomLeft, bottomMiddle, bottomRight)
    const loadout = Loadout('Fire Monster Name', fireGenes[0], fireGenes[1], fireGenes[2], fireGenes[3], fireGenes[4], fireGenes[5], fireGenes[6], fireGenes[7], fireGenes[8]);

    expect(bingoBuffs(loadout)["Fire"]).toBe("8");
});