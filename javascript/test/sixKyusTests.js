var assert = require('assert');

describe("Tests", () => {
    it("test", () => {
        assert.equal(toCamelCase(''), '', "An empty string was provided but not returned")
        assert.equal(toCamelCase("the_stealth_warrior"), "theStealthWarrior", "toCamelCase('the_stealth_warrior') did not return correct value")
        assert.equal(toCamelCase("The-Stealth-Warrior"), "TheStealthWarrior", "toCamelCase('The-Stealth-Warrior') did not return correct value")
        assert.equal(toCamelCase("A-B-C"), "ABC", "toCamelCase('A-B-C') did not return correct value")

    });
});
