describe("Tests", () => {
    it("test", () => {
        Test.expect(min(1, -2.5) === -2.5, 'Return the minimum of the two arguments');
        Test.expect(isNaN(min(1.5, NaN)), 'Any NaN value should return NaN');
        Test.expect(isNaN(min(1.5, undefined)), 'Any undefined value should return NaN');
        Test.expect(min(-Infinity, Infinity) === -Infinity, 'Infinity should be handled like normal numbers');
        Test.expect(min(null, 2.5) === 0, 'treat null as if it were 0');
    });
});
