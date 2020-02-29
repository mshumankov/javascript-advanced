const expect = require('chai').expect;
const FilmStudio = require('../filmStudio');

describe('FilmStudio', () => {
    let myInstance;

    beforeEach(function () {
        myInstance = new FilmStudio('Disney');
    });

    it('Check studioName', () => {
        const expected = 'Disney';
        const actual = myInstance.name;
        expect(actual).to.be.equal(expected);
    });

    it('Is myInstance.film an empty Array', () => {
        const expected = [];
        const actual = myInstance.films;
        expect(actual).to.deep.equal(expected);
    });

    it("Is myInstance.makeMovie('It', ['Thor', 'Hulk'] is equal to [{ filmName: 'It', filmRoles: [ { role: 'Thor', actor: false }, { role: 'Hulk', actor: false },] }]", () => {
        myInstance.makeMovie('It', ['Thor', 'Hulk']);
        const expected = [{
            filmName: 'It',
            filmRoles: [{
                role: 'Thor',
                actor: false
            }, {
                role: 'Hulk',
                actor: false
            }, ]
        }];
        const actual = myInstance.films;
        expect(actual).to.deep.equal(expected);
    });

    it("Is myInstance.makeMovie('It') throw Invalid arguments count", () => {
        const expected = 'Invalid arguments count'
        const actual = () => myInstance.makeMovie('It');
        expect(actual).to.throw(expected);
    });

    it("Is myInstance.makeMovie(5, ['Thor', 'Hulk']) throw Invalid arguments", () => {
        const expected = 'Invalid arguments'
        const actual = () => myInstance.makeMovie(5, ['Thor', 'Hulk']);
        expect(actual).to.throw(expected);
    });

    it("Is myInstance.makeMovie('It', 'It') throw Invalid arguments", () => {
        const expected = 'Invalid arguments'
        const actual = () => myInstance.makeMovie('It', 'It');
        expect(actual).to.throw(expected);
    });

    it("Is myInstance.casting('J. Depp', 'Thor') is equal to 'You got the job! Mr. J. Depp you are next Hulk in the It. Congratz!'", () => {
        myInstance.makeMovie('It', ['Thor', 'Hulk']);
        const expected = 'You got the job! Mr. J. Depp you are next Thor in the It. Congratz!';
        const actual = myInstance.casting('J. Depp', 'Thor');
        expect(actual).to.be.equal(expected);
    });

    it("Is myInstance.casting('J. Depp', 'Petar') is equal to 'J. Depp, we cannot find a Petar role...", () => {
        myInstance.makeMovie('It', ['Thor', 'Hulk']);
        const expected = 'J. Depp, we cannot find a Petar role...';
        const actual = myInstance.casting('J. Depp', 'Petar');
        expect(actual).to.be.equal(expected);
    });

    it("Is myInstance.casting('J. Depp', 'Thor') is equal to 'There are no films yet in Disney.'", () => {
        const expected = 'There are no films yet in Disney.';
        const actual = myInstance.casting('J. Depp', 'Thor');
        expect(actual).to.be.equal(expected);
    });

    it("Is myInstance.lookForProducer('It') is equal to 'Film name: It\nCast:\nJ. Depp as Thor\nfalse as Hulk\n'", () => {
        myInstance.makeMovie('It', ['Thor', 'Hulk']);
        myInstance.casting('J. Depp', 'Thor');
        const expected = 'Film name: It\nCast:\nJ. Depp as Thor\nfalse as Hulk\n';
        const actual = myInstance.lookForProducer('It');
        expect(actual).to.be.equal(expected);
    });

    it("Is myInstance.lookForProducer('It') is equal to 'It do not exist yet, but we need the money...'", () => {
        const expected = 'It do not exist yet, but we need the money...';
        const actual = () => myInstance.lookForProducer('It');
        expect(actual).to.throw(expected);
    });


});