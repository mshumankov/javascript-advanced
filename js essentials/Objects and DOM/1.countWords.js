function countWords(input) {
    input = input[0];
    const pattern = /[A-Za-z]+/g;
    const words = input.match(pattern);
    let objWords = {};

    for (let word of words) {
        if (objWords.hasOwnProperty(word)) {
            objWords[word]++;
        } else {
            objWords[word] = 1;
        }
    }

    console.log(JSON.stringify(objWords));
}
countWords(['Far too slow, you\'re far too slow.'])