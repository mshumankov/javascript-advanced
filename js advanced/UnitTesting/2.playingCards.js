function playingCards(face, suit) {
    if (face !== '2' &&
        face !== '3' &&
        face !== '4' &&
        face !== '5' &&
        face !== '6' &&
        face !== '7' &&
        face !== '8' &&
        face !== '9' &&
        face !== '10' &&
        face !== 'J' &&
        face !== 'Q' &&
        face !== 'K' &&
        face !== 'A') {

        throw new Error('Not allowed Card face')
    }

    if (suit !== 'S' &&
        suit !== 'H' &&
        suit !== 'D' &&
        suit !== 'C') {
        throw new Error('Not allowed Suit')
    }

    let suitUtf = suit;

    if (suit === 'S') {
        suitUtf = '/u2660';
    } else if (suit === 'H') {
        suitUtf = '\u2665';
    } else if (suit === 'D') {
        suitUtf = '\u2666';
    } else if (suit === 'C') {
        suitUtf = '\u2663';
    }

    return {
        suit,
        face,
        suitUtf,
        toString: function () {
            console.log(`${face}${suitUtf}`);
        }
    }
}

let test = playingCards('A', 'S');
test.toString()