let expect = require("chai").expect;

it('Expect 2 + 7 to be equal to 10', () => {
    const expected = 10;

    const result = 7 + 3;

    expect(result).to.be.equal(expected)
});

it('Expect 5 * 10 to be equal to 50', () => {
    const expected = 250;
    const actual = 5 * 50;
    expect(actual).to.be.equal(expected);
});