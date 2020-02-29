(function appLoad() {
    const btnLoad = document.getElementById('btnLoadTowns');

    btnLoad.addEventListener('click', loadTowns);

    async function loadTowns() {
        const input = document.getElementById('towns').value;
        const towns = input
            .split(', ')
            .map(el => ({
                name: el
            }));

        const path = './templete-city.hbs'
        const response = await fetch(path);
        const townsStr = await response.text();

        const loadTemplete = Handlebars.compile(townsStr);
        document.getElementById('root').innerHTML = loadTemplete({
            towns
        });
    }
}());