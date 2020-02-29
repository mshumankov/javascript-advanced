(async function () {

    const cardTemplete = async () => {
        const path = './templetes/card-templete.hbs';
        const response = await fetch(path);
        return response.text();
    };
    Handlebars.registerPartial('card', await cardTemplete());

    const listTemplete = async () => {
        const path = './templetes/list-templete.hbs';

        const response = await fetch(path);
        const result = await response.text();
        return result;
    };

    const cardListFunc = Handlebars.compile(await listTemplete());

    document.getElementById('contacts').innerHTML = cardListFunc({
        contacts
    });

    const contactsList = document.getElementById('contacts');

    const showDeteils = function (event) {
        const ev = event.target;
        if (ev.className === 'detailsBtn') {
            const parent = ev.parentNode;
            parent.querySelector('.details').style.display = 'block';
        }

    }

    contactsList.addEventListener('click', showDeteils);
}());