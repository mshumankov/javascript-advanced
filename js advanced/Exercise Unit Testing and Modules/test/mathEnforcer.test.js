const expect = require('chai').expect;
const mathEnforcer = require('../mathEnforcer').mathEnforcer;

describe('Math Enforcer', () => {
    describe('AddFive function', () => {
        it('expect addFive(string) to be equal to undefined', () => {
            const expected = undefined;
            const actual = mathEnforcer.addFive('string');
            expect(actual).to.be.equal(expected);
        });

        it('expect addFive(5) to be equal to 10', () => {
            const expected = 10;
            const actual = mathEnforcer.addFive(5);
            expect(actual).to.be.equal(expected);
        });

        it('expect addFive(-3) to be equal to 2', () => {
            const expected = 2;
            const actual = mathEnforcer.addFive(-3);
            expect(actual).to.be.equal(expected);
        });

        it('expect addFive(1.65) to be equal to 2', () => {
            const expected = 6.65;
            const actual = mathEnforcer.addFive(1.65);
            expect(actual).to.be.equal(expected);
        });
    });

    describe('SubtractTen function', () => {
        it('expect subtractTen(string) to be equal to undefined', () => {
            const expected = undefined;
            const actual = mathEnforcer.subtractTen('string');
            expect(actual).to.be.equal(expected);
        });

        it('expect subtractTen(20) to be equal to 10', () => {
            const expected = 10;
            const actual = mathEnforcer.subtractTen(20);
            expect(actual).to.be.equal(expected);
        });

        it('expect subtractTen(-10) to be equal to -20', () => {
            const expected = -20;
            const actual = mathEnforcer.subtractTen(-10);
            expect(actual).to.be.equal(expected);
        });

        it('expect subtractTen(10.8 to be equal to 0.8', () => {
            const expected = 0.8;
            const actual = mathEnforcer.subtractTen(10.8);
            expect(actual).to.be.closeTo(expected, 0.01);
        });
    });

    describe('Sum function', () => {
        it('expect sum(string, 5) to be equal to undefined', () => {
            const expected = undefined;
            const actual = mathEnforcer.sum('string', 5);
            expect(actual).to.be.equal(expected);
        });

        it('expect sum(5, string) to be equal to undefined', () => {
            const expected = undefined;
            const actual = mathEnforcer.sum(5, 'string');
            expect(actual).to.be.equal(expected);
        });

        it('expect sum(5, 5) to be equal to 10', () => {
            const expected = 10;
            const actual = mathEnforcer.sum(5, 5);
            expect(actual).to.be.equal(expected);
        });

        it('expect sum(5, -5) to be equal to 0', () => {
            const expected = 0;
            const actual = mathEnforcer.sum(5, -5);
            expect(actual).to.be.equal(expected);
        });

        it('expect sum(5.5, -5.1) to be equal to 0.4', () => {
            const expected = 0.4;
            const actual = mathEnforcer.sum(5.5, -5.1);
            expect(actual).to.be.closeTo(expected, 0.01);
        });
    });
});