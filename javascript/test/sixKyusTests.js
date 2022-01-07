const { expect } = require('chai');
var toCamelCase = require('../6kyu/sixKyus.js');

describe("Tests", () => {
    it("toCamelCaseTests", () => {
        expect(toCamelCase('')).to.equal('', "An empty string was provided but not returned");
        expect(toCamelCase("the_stealth_warrior")).equal("theStealthWarrior", "toCamelCase('the_stealth_warrior') did not return correct value");
        expect(toCamelCase("The-Stealth-Warrior")).equal("TheStealthWarrior", "toCamelCase('The-Stealth-Warrior') did not return correct value");
        expect(toCamelCase("A-B-C")).equal("ABC", "toCamelCase('A-B-C') did not return correct value");
    });
});
