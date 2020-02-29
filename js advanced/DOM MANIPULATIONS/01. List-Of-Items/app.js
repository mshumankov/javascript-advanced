function addItem() {
    let inputElement = document.getElementById('newItemText').value;
    let ulElement = document.getElementById('items');
    let li = ulElement.lastElementChild;
    let newLi = li.cloneNode(true);

    newLi.textContent = inputElement;
    ulElement.appendChild(newLi);
    document.getElementById('newItemText').value = '';
}