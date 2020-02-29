function solve() {
    let arrData = JSON.parse(document.getElementById('arr').value);
    let result = document.getElementById('result');
    let pattern = /([A-Z][a-z]* [A-Z][a-z]*)\s(\+359( *-*)\d\3\d{3}\3\d{3})\s([a-z0-9]+@[a-z]+\.[a-z]{2,3})/g;
    let resultData = []

    for (let line of arrData) {
        let data = pattern.exec(line);

        if (data === null) {
            resultData.push('Invalid data');
            resultData.push('- - -');
        } else {
            resultData.push(`Name: ${data[1]}`);
            resultData.push(`Phone Number: ${data[2]}`);
            resultData.push(`Email: ${data[4]}`);
            resultData.push('- - -');
        }
    }
    result.textContent = resultData.join('\n');
}