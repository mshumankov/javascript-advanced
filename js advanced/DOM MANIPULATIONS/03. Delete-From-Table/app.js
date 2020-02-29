function deleteByEmail() {
    let SELECTORS = {
        EMAIL: 'input[type=text]',
        TABLEROW: 'tbody tr',
        MESSAGE: 'result'
    }

    getEmail = () => {
        let inputElement = document.querySelector(SELECTORS.EMAIL).value;
        return inputElement;
    }


    const matchEmail = (email) => {
        let trElement = [...document.querySelectorAll(SELECTORS.TABLEROW)]
            .find((el) => el.children[1].textContent === email);
        return trElement;
    }

    const removeEmail = (rowFound) => {
        rowFound.remove();
    }

    const infoMessage = (text) => {
        currentMessage = document.getElementById(SELECTORS.MESSAGE);
        currentMessage.textContent = text
    }

    const clearInput = () => {
        document.querySelector(SELECTORS.EMAIL).value = ''
    }

    const currentEmail = getEmail();
    const rowFound = matchEmail(currentEmail);
    if (rowFound) {
        removeEmail(rowFound);
        const text = 'Deleted';
        infoMessage(text);
    } else {
        const text = 'Not found.'
        infoMessage(text);
    }
    clearInput();

}