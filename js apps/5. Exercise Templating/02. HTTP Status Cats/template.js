(() => {
    renderCatTemplate();

    async function renderCatTemplate() {
        const path = './cat-templete.hbs';

        const response = await fetch(path);
        const catsStr = await response.text();

        const compileCats = Handlebars.compile(catsStr);
        document.getElementById('allCats').innerHTML = compileCats({
            cats
        });
        document.getElementById('allCats').addEventListener('click', showInfo);
    }

    function showInfo(event) {
        const ev = event.target;

        if (ev.className === 'showBtn') {
            if (ev.textContent === 'Show status code') {
                ev.textContent = 'Hide status code'
                const parentDiv = ev.parentNode;
                parentDiv.querySelector('.status').style.display = 'block';
            } else {
                ev.textContent = 'Show status code'
                const parentDiv = ev.parentNode;
                parentDiv.querySelector('.status').style.display = 'none';
            }
        }
    }

})();