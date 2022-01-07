const { expect } = require('chai');
var sixKyus = require('../6kyu/sixKyus.js');

describe("sixKyus", () => {
    it("toCamelCaseTests", () => {
        expect(sixKyus.toCamelCase('')).to.equal('', "An empty string was provided but not returned");
        expect(sixKyus.toCamelCase("the_stealth_warrior")).equal("theStealthWarrior", "toCamelCase('the_stealth_warrior') did not return correct value");
        expect(sixKyus.toCamelCase("The-Stealth-Warrior")).equal("TheStealthWarrior", "toCamelCase('The-Stealth-Warrior') did not return correct value");
        expect(sixKyus.toCamelCase("A-B-C")).equal("ABC", "toCamelCase('A-B-C') did not return correct value");
    });
});
