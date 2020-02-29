function solve() {
    let text = document.getElementById('text').value;
    let num = Number(document.getElementById('number').value);
    let result = [];

    if (text.length % num !== 0) {
        let neededElements = num - (text.length % num);
        text = text + text.substr(0, neededElements);
    }

    for (let i = 0; i < text.length; i += num) {
        result.push(text.substr(i, num));
    }

    document.getElementById('result').textContent = result.join(' ');
}