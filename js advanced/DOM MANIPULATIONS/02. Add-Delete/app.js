const addItem = function () {
    let input = document.querySelector('#newText');
    let ulElement = document.getElementById('items');

    createList();

    function createList() {
        let liElement = document.createElement('li');
        liElement.textContent = input.value;
        let aElement = document.createElement('a');
        aElement.href = '#';
        aElement.textContent = '[Delete]';
        aElement.addEventListener('click', deleteItem);
        liElement.appendChild(aElement);
        ulElement.appendChild(liElement);
    }


    function deleteItem(aElement) {
        let listToRemove = aElement.target.parentNode;
        listToRemove.remove();
    }

    document.querySelector('#newText').value = '';
};