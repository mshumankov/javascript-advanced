function addItem() {
    let text = document.getElementById('newItemText').value;
    let valueInput = document.getElementById('newItemValue').value;
    let selectElement = document.getElementById('menu');
    let optionElement = document.createElement('option');
    optionElement.value = valueInput;
    optionElement.textContent = text;
    selectElement.appendChild(optionElement);
    document.getElementById('newItemText').value = '';
    document.getElementById('newItemValue').value = '';
}