const expect = require('chai').expect;
const {
    SoftUniFy
} = require('../03. Softunify_Ресурси');

describe('Softunify', () => {
    beforeEach(function () {
        const myInstance = new SoftUniFy();
    });

    it('Is allSongs an empty object', () => {
        const myInstance = new SoftUniFy();
        const expected = {};
        const actual = myInstance.allSongs;
        expect(actual).to.deep.equal(expected);
    });

    it('Expect myInstance.allSongs.Eminem.songs[0] to be equal to "Venom - Knock, Knock let the devil in..."', () => {
        const myInstance = new SoftUniFy();
        myInstance.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');
        const expected = "Venom - Knock, Knock let the devil in...";
        const actual = myInstance.allSongs.Eminem.songs[0];
        expect(actual).to.be.equal(expected);
    });

    it('Expect myInstance.allSongs.Eminem.songs[1] to be equal to "Phenomenal - IM PHENOMENAL..."', () => {
        const myInstance = new SoftUniFy();
        myInstance.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');
        myInstance.downloadSong('Eminem', 'Phenomenal', 'IM PHENOMENAL...');
        const expected = "Phenomenal - IM PHENOMENAL...";
        const actual = myInstance.allSongs.Eminem.songs[1];
        expect(actual).to.be.equal(expected);
    });

    it('Expect myInstance.playSong(Venom) to be equal to "Eminem:\nVenom - Knock, Knock let the devil in...\n"', () => {
        const myInstance = new SoftUniFy();
        myInstance.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');
        const expected = "Eminem:\nVenom - Knock, Knock let the devil in...\n";
        const actual = myInstance.playSong('Venom');
        expect(actual).to.be.equal(expected);
    });

    it('Expect myInstance.playSong(Venom) to be equal to "You have not downloaded a {song} song yet. Use SoftUniFy\'s function downloadSong() to change that!"', () => {
        const myInstance = new SoftUniFy();
        const expected = "You have not downloaded a Venom song yet. Use SoftUniFy's function downloadSong() to change that!";
        const actual = myInstance.playSong('Venom');
        expect(actual).to.be.equal(expected);
    });

    it('Expect myInstance.playSong(Venom) to be equal to "You have not downloaded a {song} song yet. Use SoftUniFy\'s function downloadSong() to change that!"', () => {
        const myInstance = new SoftUniFy();
        myInstance.downloadSong('Eminem', 'Phenomenal', 'IM PHENOMENAL...');
        const expected = "You have not downloaded a Venom song yet. Use SoftUniFy's function downloadSong() to change that!";
        const actual = myInstance.playSong('Venom');
        expect(actual).to.be.equal(expected);
    });

    it('Expect myInstance.songsList() to be equal to "Phenomenal - IM PHENOMENAL...\nVenom - Knock, Knock let the devil in..."', () => {
        const myInstance = new SoftUniFy();
        myInstance.downloadSong('Eminem', 'Phenomenal', 'IM PHENOMENAL...');
        myInstance.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');
        const expected = "Phenomenal - IM PHENOMENAL...\nVenom - Knock, Knock let the devil in...";
        const actual = myInstance.songsList;
        expect(actual).to.be.equal(expected);
    });

    it('Expect myInstance.songsList() to be equal to "Your song list is empty"', () => {
        const myInstance = new SoftUniFy();
        const expected = "Your song list is empty";
        const actual = myInstance.songsList;
        expect(actual).to.be.equal(expected);
    });

    it('Expect myInstace.rateArtist(Eminem) to be equal to "The Eminem is not on your artist list"', () => {
        const myInstance = new SoftUniFy();
        const expected = 'The Eminem is not on your artist list.';
        const actual = myInstance.rateArtist('Eminem');
        expect(actual).to.be.equal(expected);
    });

    it('Expect myInstace.rateArtist(Eminem) to be equal to 50', () => {
        const myInstance = new SoftUniFy();
        myInstance.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');
        myInstance.rateArtist('Eminem', 50);
        const expected = 50;
        const actual = myInstance.rateArtist('Eminem', 50);
        expect(actual).to.be.equal(expected);
    });
})