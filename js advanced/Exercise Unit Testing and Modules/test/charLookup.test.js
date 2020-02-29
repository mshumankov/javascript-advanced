const expect = require("chai").expect;
const {
    lookupChar
} = require('../charLookup');

describe('Char Lookup', () => {
    it('expect lookupChar(5, 1) to be equal to undefined', () => {
        const expected = undefined;
        const actual = lookupChar(5, 1);
        expect(actual).to.be.equal(expected);
    });

    it('expect lookupChar(name, name) to be equal to undefined', () => {
        const expected = undefined;
        const actual = lookupChar('name', 'name');
        expect(actual).to.be.equal(expected);
    });

    it('expect lookupChar(name, 1.23) to be equal to undefined', () => {
        const expected = undefined;
        const actual = lookupChar('name', 1.23);
        expect(actual).to.be.equal(expected);
    });

    it('expect lookupChar(name, -2) to be equal to Incorrect index', () => {
        const expected = 'Incorrect index';
        const actual = lookupChar('name', -2);
        expect(actual).to.be.equal(expected);
    });

    it('expect lookupChar(name, 10) to be equal to Incorrect index', () => {
        const expected = 'Incorrect index';
        const actual = lookupChar('name', 10);
        expect(actual).to.be.equal(expected);
    });

    it('expect lookupChar(name, 4) to be equal to Incorrect index', () => {
        const expected = 'Incorrect index';
        const actual = lookupChar('name', 4);
        expect(actual).to.be.equal(expected);
    });

    it('expect lookupChar(name, 2) to be equal to m', () => {
        const expected = 'm';
        const actual = lookupChar('name', 2);
        expect(actual).to.be.equal(expected);
    });

    it('expect lookupChar(name, 0) to be equal to m', () => {
        const expected = 'n';
        const actual = lookupChar('name', 0);
        expect(actual).to.be.equal(expected);
    });
});