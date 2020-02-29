function attachEvents() {
    const btnLoad = document.getElementById('btnLoad');
    const btnCreate = document.getElementById('btnCreate');
    const person = document.getElementById('person');
    const phone = document.getElementById('phone');
    let phonebook = document.getElementById('phonebook');
    const url = `https://phonebook-nakov.firebaseio.com/phonebook.json`;

    btnCreate.addEventListener('click', createRecord);
    btnLoad.addEventListener('click', loadRecords);

    function loadRecords() {
        phonebook.innerHTML = '';

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                for (const id in data) {
                    const name = data[id].person;
                    const phoneNumber = data[id].phone;

                    const listItem = document.createElement('li');
                    const btnDelete = document.createElement('button');

                    listItem.textContent = `${name}: ${phoneNumber} `;
                    btnDelete.textContent = 'Delete';

                    listItem.appendChild(btnDelete);
                    phonebook.appendChild(listItem);

                    btnDelete.addEventListener('click', () => {
                        deleteRecord(id)
                    });
                }
            })
    }

    function createRecord() {
        const record = {
            person: `${person.value}`,
            phone: `${phone.value}`
        }

        fetch(url, {
                method: 'post',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(record)
            })
            .then(() => {
                phonebook.innerHTML = '';
                person.value = '';
                phone.value = '';
                loadRecords();
            })


    }

    function deleteRecord(id) {
        const deleteUrl = `https://phonebook-nakov.firebaseio.com/phonebook/${id}.json`;

        fetch(deleteUrl, {
                method: 'delete',
                headers: {
                    'Content-type': 'application/json'
                },
            })
            .then((response) => response.json())
            .then(() => {
                phonebook.innerHTML = '';
                loadRecords();
            })


    }


}

attachEvents();