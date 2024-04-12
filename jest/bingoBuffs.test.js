const bingoBuffs = require("../scripts/displayAllLoadouts");

test('test all fire grid', () => {

    expect(bingoBuffs(loadout)).toBe(biffDict);
});