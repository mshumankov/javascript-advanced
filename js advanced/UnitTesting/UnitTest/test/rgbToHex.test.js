const expect = require('chai').expect;
const {
    rgbToHexColor
} = require('../6.RgbToHex');

describe('RGB to Hex', () => {
    it('expect rgbToHexColor(120, 120, 120) to be equal to #787878', () => {
        const expected = '#787878';
        const actual = rgbToHexColor(120, 120, 120);
        expect(actual).to.be.equal(expected);
    });

    it('expect rgbToHexColor(265, 120, 120) to be equal to undefined', () => {
        const expected = undefined;
        const actual = rgbToHexColor(265, 120, 120);
        expect(actual).to.be.equal(expected);
    });

    it('expect rgbToHexColor(-3, 120, 120) to be equal to undefined', () => {
        const expected = undefined;
        const actual = rgbToHexColor(-3, 120, 120);
        expect(actual).to.be.equal(expected);
    });

    it('expect rgbToHexColor(120, 320, 120) to be equal to undefined', () => {
        const expected = undefined;
        const actual = rgbToHexColor(265, 320, 120);
        expect(actual).to.be.equal(expected);
    });

    it('expect rgbToHexColor(120, -9, 120) to be equal to undefined', () => {
        const expected = undefined;
        const actual = rgbToHexColor(265, -9, 120);
        expect(actual).to.be.equal(expected);
    });

    it('expect rgbToHexColor(120, 120, -255) to be equal to undefined', () => {
        const expected = undefined;
        const actual = rgbToHexColor(265, 120, -255);
        expect(actual).to.be.equal(expected);
    });

    it('expect rgbToHexColor(120, true, -255) to be equal to undefined', () => {
        const expected = undefined;
        const actual = rgbToHexColor(265, true, 120);
        expect(actual).to.be.equal(expected);
    });

    it('expect rgbToHexColor(120, 120, \'text\') to be equal to undefined', () => {
        const expected = undefined;
        const actual = rgbToHexColor(265, 120, 'text');
        expect(actual).to.be.equal(expected);
    });

    it('expect rgbToHexColor(255, 104, 31) to be equal to #FF681F', () => {
        const expected = '#FF681F';
        const actual = rgbToHexColor(255, 104, 31);
        expect(actual).to.be.equal(expected);
    });

    it('expect rgbToHexColor(0, 0, 0) to be equal to #000000', () => {
        const expected = '#000000';
        const actual = rgbToHexColor(0, 0, 0);
        expect(actual).to.be.equal(expected);
    });
});