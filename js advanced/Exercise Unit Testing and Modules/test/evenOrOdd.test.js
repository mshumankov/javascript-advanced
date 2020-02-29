const expect = require("chai").expect;
const {
    isOddOrEven
} = require('../evenOrOdd');

describe('Even or odd', () => {
    it('expect isOddOrEven(5) to be equal to undefined;', () => {
        const expected = undefined;
        const actual = isOddOrEven(5);
        expect(actual).to.be.equal(expected);
    });

    it('expect isOddOrEven(name) to be equal to undefined;', () => {
        const expected = 'even';
        const actual = isOddOrEven('name');
        expect(actual).to.be.equal(expected);
    });

    it('expect isOddOrEven(six) to be equal to undefined;', () => {
        const expected = 'odd';
        const actual = isOddOrEven('six');
        expect(actual).to.be.equal(expected);
    });
});