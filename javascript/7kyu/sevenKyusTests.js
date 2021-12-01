describe("Tests", () => {
    it("test", () => {
        Test.expect(min(1, -2.5) === -2.5, 'Return the minimum of the two arguments');
        Test.expect(isNaN(min(1.5, NaN)), 'Any NaN value should return NaN');
        Test.expect(isNaN(min(1.5, undefined)), 'Any undefined value should return NaN');
        Test.expect(min(-Infinity, Infinity) === -Infinity, 'Infinity should be handled like normal numbers');
        Test.expect(min(null, 2.5) === 0, 'treat null as if it were 0');
    });
});


describe("Tests", () => {
    it("test", () => {
        Test.assertEquals(mygcd(30, 12), 6)
        Test.assertEquals(mygcd(8, 9), 1)
        Test.assertEquals(mygcd(1, 1), 1)
    });
});


const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Bumps in the Road", () => {
    it("Testing for fixed tests", () => {
        assert.strictEqual(bump("n"), "Woohoo!");
        assert.strictEqual(bump("_nnnnnnn_n__n______nn__nn_nnn"), "Car Dead");
        assert.strictEqual(bump("______n___n_"), "Woohoo!");
    });
});