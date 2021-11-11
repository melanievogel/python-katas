const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests", () => {
    it("Testing for fixed tests", () => {
        assert.strictEqual(findLongest("The quick white fox jumped around the massive dog"), 7);
        assert.strictEqual(findLongest("Take me to tinseltown with you"), 10);
        assert.strictEqual(findLongest("Sausage chops"), 7);
        assert.strictEqual(findLongest("Wind your body and wiggle your belly"), 6);
        assert.strictEqual(findLongest("Lets all go on holiday"), 7);
    })
});