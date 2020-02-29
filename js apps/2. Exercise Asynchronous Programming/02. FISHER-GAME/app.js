function attachEvents() {
    const elements = {
        catches: document.getElementById('catches'),
        btnLoad: document.querySelector('button.load'),
        btnAdd: document.querySelector('button.add'),
        addCatch: document.getElementById('addForm')
    }

    elements.btnLoad.addEventListener('click', loadCatches);
    elements.btnAdd.addEventListener('click', createCatch);

    function loadCatches() {
        elements.catches.children[0].style.display = 'inline-block'
        fetch('https://fisher-game.firebaseio.com/catches.json')
            .then(handler)
            .then(data => {
                console.log(data);
                for (const fishCatch in data) {
                    const catchElement = elements.catches.children[0].cloneNode(true);
                    catchElement.setAttribute('data-id', fishCatch)

                    catchElement.querySelector('input.angler').value = data[fishCatch].angler;
                    catchElement.querySelector('input.weight').value = data[fishCatch].weight;
                    catchElement.querySelector('input.species').value = data[fishCatch].species;
                    catchElement.querySelector('input.location').value = data[fishCatch].location;
                    catchElement.querySelector('input.bait').value = data[fishCatch].bait;
                    catchElement.querySelector('input.captureTime').value = data[fishCatch].captureTime;

                    elements.catches.appendChild(catchElement);

                    catchElement.querySelector('button.update').addEventListener('click', updateCatch);
                    catchElement.querySelector('button.delete').addEventListener('click', deleteChatch);
                }

            })
            .then(() => elements.catches.children[0].style.display = 'none')

    }

    function deleteChatch() {
        const id = event.currentTarget.parentNode.getAttribute('data-id');

        fetch(`https://fisher-game.firebaseio.com/catches/${id}.json`, {
                method: 'delete',
            })
            .then(handler)
            .then(() => {
                loadCatches()
            });
    }

    function updateCatch(event) {
        const id = event.currentTarget.parentNode.getAttribute('data-id');
        const catchElement = event.currentTarget.parentNode;

        const data = [...catchElement.children]
            .filter(el => el.tagName === 'INPUT')
            .reduce((acc, curr) => {
                let prop = curr.className;
                acc[prop] = curr.value;
                return acc;
            }, {});


        bodyUpdate = {

        }

        fetch(`https://fisher-game.firebaseio.com/catches/${id}.json`, {
                method: 'put',
                body: JSON.stringify(data)
            })
            .then(handler)
            .then(() => loadCatches());
    }

    function createCatch(event) {
        const id = event.currentTarget.parentNode.getAttribute('data-id');
        const catchElement = elements.addCatch;

        const data = [...catchElement.children]
            .filter(el => el.tagName === 'INPUT')
            .reduce((acc, curr) => {
                let prop = curr.className;
                acc[prop] = curr.value;
                return acc;
            }, {});
        console.log(data);

        bodyUpdate = {

        }

        fetch(`https://fisher-game.firebaseio.com/catches.json`, {
                method: 'post',
                body: JSON.stringify(data)
            })
            .then(handler)
            .then(() => loadCatches());
    }

    function handler(response) {
        if (response.status > 400) {
            throw new Error(`Error: ${response.statusText}`);
        }

        return response.json();
    }

}

attachEvents();