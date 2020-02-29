function solve() {

    let word = document.getElementById('word').value;
    let arrText = JSON.parse(document.getElementById('text').value);
    let replacedWord = arrText[0].split(' ')[2];
    let output = document.getElementById('result');

    let result = arrText.map((e) => {
        let pattern = new RegExp(replacedWord, 'gi');
        return e = e.replace(pattern, word);
    });

    for (let line of result) {
        let p = document.createElement('p');
        p.textContent = line;
        output.appendChild(p);
    }
}