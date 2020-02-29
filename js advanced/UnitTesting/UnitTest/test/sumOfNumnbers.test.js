const expect = require("chai").expect;
const {
    sum
} = require('../4.sumOfNumbers');


describe('Sum of Numbers', () => {
    it('expect sum([1, 2]) to be equal to 3', () => {
        const expected = 3;
        const actual = sum([1, 2]);
        expect(actual).to.be.equal(expected);
    });

    it('expect sum([-5, 2]) to be equal to -3', () => {
        const expected = -3;
        const actual = sum([-5, 2]);
        expect(actual).to.be.equal(expected);
    });

    it('expect sum([0, 2]) to be equal to 2', () => {
        const expected = 2;
        const actual = sum([0, 2]);
        expect(actual).to.be.equal(expected);
    });

    it('expect sum([0, 2]) to be equal to 2', () => {
        const expected = 2;
        const actual = sum([0, 2]);
        expect(actual).to.be.equal(expected);
    });
});