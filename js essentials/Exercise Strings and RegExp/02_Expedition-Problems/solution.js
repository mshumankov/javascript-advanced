function solve() {
    let keyWord = document.getElementById('text').value;
    let text = document.getElementById('string').value;
    let pattern = `${keyWord}(.*)${keyWord}`;
    let messageRegex = new RegExp(pattern, 'g');
    let messageText = messageRegex.exec(text)[1];
    let result = document.getElementById('result');

    let locationPattern = /(north|east).*?(\d{2})[^,]*?,[^,]*?(\d{6})/gim;
    let matchLocation = locationPattern.exec(text);

    let eastMatch;
    let northMatch;

    while (matchLocation !== null) {
        if (matchLocation[1].toLowerCase() === 'east') {
            eastMatch = `${matchLocation[2]}.${matchLocation[3]} E`;
        } else {
            northMatch = `${matchLocation[2]}.${matchLocation[3]} N`;
        }
        matchLocation = locationPattern.exec(text);
    }

    let arrResult = [];
    arrResult.push(northMatch);
    arrResult.push(eastMatch);
    arrResult.push(`Message: ${messageText}`);

    for (let data of arrResult) {
        let p = document.createElement('p');
        p.textContent = data;
        result.appendChild(p);
    }

}