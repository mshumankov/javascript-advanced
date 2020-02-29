function solve() {
    let selectToElement = document.getElementById('selectMenuTo');
    selectToElement[0].textContent = 'Binary';
    selectToElement[0].setAttribute('value', 'binary');
    let optionHexElement = document.createElement('option');
    optionHexElement.textContent = 'Hexadeicmal';
    optionHexElement.setAttribute('value', 'hexadecimal');
    selectToElement.appendChild(optionHexElement);
    let result = document.getElementById('result');
    let input = document.getElementById('input');


    document.querySelector('#container button').addEventListener('click', e => {
        if (optionHexElement.selected === true) {
            let hexString = Number(input.value).toString(16);
            result.value = hexString
        } else {
            let binary = (input.value >>> 0).toString(2);
            result.value = binary;
        }
    });
}