function subtract() {
    let firstNumber = Number(document.getElementById('firstNumber').value);
    let secondNumber = Number(document.getElementById('secondNumber').value);
    let divElement = document.getElementById('result');
    let result = firstNumber - secondNumber;
    divElement.textContent = result;
}