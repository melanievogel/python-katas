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

describe("Basic tests", function () {
    it("Mixed list", function () {
        Test.assertDeepEquals(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]), ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]);
    });
    it("No geese", function () {
        Test.assertDeepEquals(gooseFilter(["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]), ["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]);
    });
    it("All geese", function () {
        Test.assertDeepEquals(gooseFilter(["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]), []);
    });
});

describe("Tests", () => {
    it("test", () => {
        Test.assertEquals(hoopCount(3), "Keep at it until you get it")
        Test.assertEquals(hoopCount(11), "Great, now move on to tricks")
    });
});


const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Tests", function () {
    it("Basic tests", function () {
        assert.strictEqual(findDifference([3, 2, 5], [1, 4, 4]), 14);
        assert.strictEqual(findDifference([9, 7, 2], [5, 2, 2]), 106);
        assert.strictEqual(findDifference([11, 2, 5], [1, 10, 8]), 30);
        assert.strictEqual(findDifference([4, 4, 7], [3, 9, 3]), 31);
        assert.strictEqual(findDifference([15, 20, 25], [10, 30, 25]), 0);
    });
});

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Tests", () => {
    it("test", () => {
        assert.strictEqual(isDivideBy(-12, 2, -6), true);
        assert.strictEqual(isDivideBy(-12, 2, -5), false);
        assert.strictEqual(isDivideBy(45, 1, 6), false);
        assert.strictEqual(isDivideBy(45, 5, 15), true);
        assert.strictEqual(isDivideBy(4, 1, 4), true);
        assert.strictEqual(isDivideBy(15, -5, 3), true);
    });
});


const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests", () => {
    it("Testing for fixed tests", () => {
        assert.strictEqual(DNAtoRNA("TTTT"), "UUUU")
        assert.strictEqual(DNAtoRNA("GCAT"), "GCAU")
        assert.strictEqual(DNAtoRNA("GACCGCCGCC"), "GACCGCCGCC")
    });
})


describe("Tests", () => {
    it("test", () => {
        Test.assertEquals(makeNegative(42), -42);
    });
});

