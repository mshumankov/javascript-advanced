function lockedProfile() {
    [...document.getElementById('main').children]
    .forEach(el => {
        el.lastElementChild.addEventListener('click', moreInfo);
    });

    function moreInfo(ev) {
        let divElement = ev.target.parentNode.children[9];
        let button = ev.target;
        checkProfile();

        function checkProfile() {
            let radio = ev.target.parentNode.children[4];
            let isChecked = radio.checked;

            if (isChecked) {
                showMoreLess();
            }
        }

        function showMoreLess() {
            if (button.textContent === 'Show more') {
                divElement.style.display = 'block';
                button.textContent = 'Hide it'
            } else {
                divElement.style.display = 'none';
                button.textContent = 'Show more'
            }

        }


    }

}