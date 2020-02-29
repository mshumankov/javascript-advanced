function toggle() {
    let buttonElement = document.querySelector('div .button');
    let moreTextElement = document.getElementById('extra');

    if (buttonElement.textContent === 'More') {
        buttonElement.textContent = 'Less';
        moreTextElement.style.display = 'block';
    } else {
        buttonElement.textContent = 'More';
        moreTextElement.style.display = 'none';
    }
}