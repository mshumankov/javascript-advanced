const expect = require('chai').expect;
const {
    isSymmetric
} = require('../5.symmetry');

describe('Check symmetry', () => {
    it('expect isSymmetric([1, 2, 1]) to be equal to true)', () => {
        const expected = true;
        const actual = isSymmetric([1, 2, 1]);
        expect(actual).to.be.equal(expected);
    });

    it('expect isSymmetric([2, 2]) to be equal to true)', () => {
        const expected = true;
        const actual = isSymmetric([2, 2]);
        expect(actual).to.be.equal(expected);
    });

    it('expect isSymmetric([2]) to be equal to true)', () => {
        const expected = true;
        const actual = isSymmetric([2]);
        expect(actual).to.be.equal(expected);
    });

    it('expect isSymmetric([2, 3, 2, 3, 2]) to be equal to true)', () => {
        const expected = true;
        const actual = isSymmetric([2, 3, 2, 3, 2]);
        expect(actual).to.be.equal(expected);
    });

    it('expect isSymmetric([2, 3, 2, 3, 2]) to be equal to true)', () => {
        const expected = true;
        const actual = isSymmetric([2, 3, 2, 3, 2]);
        expect(actual).to.be.equal(expected);
    });

    it('expect isSymmetric([one, 3, two, 3, one]) to be equal to true)', () => {
        const expected = true;
        const actual = isSymmetric(['one', 3, 'two', 3, 'one']);
        expect(actual).to.be.equal(expected);
    });

    it('expect isSymmetric([2, 3, 2, \'3\', \'2\']) to be equal to true)', () => {
        const expected = false;
        const actual = isSymmetric([2, 3, 2, '3', '2']);
        expect(actual).to.be.equal(expected);
    });

    it('expect isSymmetric([2, 3, \'3\', \'2\']) to be equal to true)', () => {
        const expected = false;
        const actual = isSymmetric([2, 3, '3', '2']);
        expect(actual).to.be.equal(expected);
    });

    it('expect isSymmetric(5) to be equal to true)', () => {
        const expected = false;
        const actual = isSymmetric(5);
        expect(actual).to.be.equal(expected);
    });

    it('expect isSymmetric([-2, 2]) to be equal to true)', () => {
        const expected = false;
        const actual = isSymmetric([-2, 2]);
        expect(actual).to.be.equal(expected);
    });

    it('expect isSymmetric([1, 2]) to be equal to true)', () => {
        const expected = false;
        const actual = isSymmetric([1, 2]);
        expect(actual).to.be.equal(expected);
    });
});