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

describe("Tests", () => {
    it("test", () => {
        Test.assertEquals(multiply(2, 3), 6);
    });
});

describe('move function', () => {
    it('basic tests', () => {
        Test.assertEquals(move(0, 4), 8);
        Test.assertEquals(move(3, 6), 15);
        Test.assertEquals(move(2, 5), 12);
    })
})

describe('fix add five', () => {
    it('fixed tests', () => {
        Test.assertEquals(addFive(5), 10)
        Test.assertEquals(addFive(0), 5)
        Test.assertEquals(addFive(-5), 0)
    })
})

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Fixed tests", function () {
    it("Small values", function () {
        assert.strictEqual(expressionMatter(2, 1, 2), 6);
        assert.strictEqual(expressionMatter(2, 1, 1), 4);
        assert.strictEqual(expressionMatter(1, 1, 1), 3);
        assert.strictEqual(expressionMatter(1, 2, 3), 9);
        assert.strictEqual(expressionMatter(1, 3, 1), 5);
        assert.strictEqual(expressionMatter(2, 2, 2), 8);
    });

    it("Medium values", function () {
        assert.strictEqual(expressionMatter(5, 1, 3), 20);
        assert.strictEqual(expressionMatter(3, 5, 7), 105);
        assert.strictEqual(expressionMatter(5, 6, 1), 35);
        assert.strictEqual(expressionMatter(1, 6, 1), 8);
        assert.strictEqual(expressionMatter(2, 6, 1), 14);
        assert.strictEqual(expressionMatter(6, 7, 1), 48);
    });

    it("Mixed values", function () {
        assert.strictEqual(expressionMatter(2, 10, 3), 60);
        assert.strictEqual(expressionMatter(1, 8, 3), 27);
        assert.strictEqual(expressionMatter(9, 7, 2), 126);
        assert.strictEqual(expressionMatter(1, 1, 10), 20);
        assert.strictEqual(expressionMatter(9, 1, 1), 18);
        assert.strictEqual(expressionMatter(10, 5, 6), 300);
        assert.strictEqual(expressionMatter(1, 10, 1), 12);
    });
});

const chai = require('chai');
const assert = chai.assert;

describe("Sample tests", () => {

    it("2 is even", () => {
        assert.strictEqual(even_or_odd(2), "Even");
    });
    it("7 is odd", () => {
        assert.strictEqual(even_or_odd(7), "Odd");
    });
    it("-42 is even", () => {
        assert.strictEqual(even_or_odd(-42), "Even");
    });
    it("-7 is odd", () => {
        assert.strictEqual(even_or_odd(-7), "Odd");
    });
    it("0 is even", () => {
        assert.strictEqual(even_or_odd(0), "Even");
    });
});

describe("Tests", () => {
    it("test", () => {
        Test.assertEquals(opposite(1), -1,)
    });
});
