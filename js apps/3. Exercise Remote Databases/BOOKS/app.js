const kinveyUsername = 'guest';
const kinveyPassword = 'guest';
const appKey = 'kid_BJHAsldTB';
const appSecret = '09cc343923c142768f81750e48bcfff2';
const baseUrl = 'https://baas.kinvey.com/appdata/kid_BJHAsldTB/books';

const elements = {
    btnSubmit: document.querySelector('form button'),
    btnLoadBooks: document.getElementById('loadBooks'),
    formTitle: document.getElementById('title'),
    formAuthor: document.getElementById('author'),
    formIsbn: document.getElementById('isbn'),
    booksList: document.querySelector('table tbody'),
};

elements.booksList.innerHTML = '';

elements.btnSubmit.addEventListener('click', newBook);
elements.btnLoadBooks.addEventListener('click', loadBooks);

const urlLogin = 'https://baas.kinvey.com/user/kid_BJHAsldTB/login';

const userInfo = {
    username: kinveyUsername,
    password: kinveyPassword
}

const headersInfo = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${btoa(kinveyUsername + ':' + kinveyPassword)}`,
    },
    body: JSON.stringify(userInfo)
}

fetch(urlLogin, headersInfo)
    .then(heandler)
    .then(data => {
        console.log(data);
        const auth = data._kmd.authtoken;
        console.log(auth);
        localStorage.setItem('authToken', auth);
    })

function newBook(ev) {
    ev.preventDefault();

    const title = elements.formTitle.value;
    const author = elements.formAuthor.value;
    const isbn = elements.formIsbn.value

    if (title && author && isbn) {

        const bookInfo = {
            title,
            author,
            isbn
        }

        const headers = {
            method: 'POST',
            //credentials: 'include',

            headers: {
                "Content-Type": "application/json",
                Authorization: 'Kinvey ' + localStorage.getItem('authToken'),
            },
            body: JSON.stringify(bookInfo),
        }

        fetch(baseUrl, headers)
            .then(heandler)
            .then(() => loadBooks())
            .catch(err => console.log(err));
    }
}

function loadBooks() {
    const headers = {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            Authorization: 'Kinvey ' + localStorage.getItem('authToken'),
        },
    }
    elements.booksList.innerHTML = '';

    fetch(baseUrl, headers)
        .then(heandler)
        .then(data => {
            let fragmentBook = document.createDocumentFragment();

            for (const book of data) {
                const tr = document.createElement('tr');
                const tdTitle = document.createElement('td');
                const tdAuthor = document.createElement('td');
                const tdIsbn = document.createElement('td');
                const tdButtons = document.createElement('td');
                const buttonEdit = document.createElement('button');
                const buttonDelete = document.createElement('button');

                tr.id = book._id;
                tdTitle.textContent = book.title;
                tdAuthor.textContent = book.author;
                tdIsbn.textContent = book.isbn;
                buttonEdit.textContent = 'Edit';
                buttonDelete.textContent = 'Delete';

                buttonEdit.addEventListener('click', editBook);
                buttonDelete.addEventListener('click', deleteBook);

                tdButtons.appendChild(buttonEdit);
                tdButtons.appendChild(buttonDelete);
                tr.appendChild(tdTitle);
                tr.appendChild(tdAuthor);
                tr.appendChild(tdIsbn);
                tr.appendChild(tdButtons);

                fragmentBook.appendChild(tr);
            }
            elements.booksList.appendChild(fragmentBook);
        })
        .catch(err => console.log(err));
}

function deleteBook(ev) {
    const id = ev.target.parentNode.parentNode.id;
    let url = `${baseUrl}/${id}`;

    const headers = {
        method: 'DELETE',
        //credentials: 'include',
        headers: {
            "Content-Type": "application/json",
            Authorization: 'Kinvey ' + localStorage.getItem('authToken'),
        }
    }
    fetch(url, headers)
        .then(heandler)
        .then(loadBooks)
        .catch(err => console.log(err));
}

function editBook(ev) {
    const id = ev.target.parentNode.parentNode.id;
    let url = `${baseUrl}/${id}`;

    const title = elements.formTitle.value;
    const author = elements.formAuthor.value;
    const isbn = elements.formIsbn.value;

    const bookInfo = {
        title,
        author,
        isbn
    }

    const headers = {
        method: 'PUT',
        body: JSON.stringify(bookInfo),
        //credentials: 'include',
        headers: {
            "Content-Type": "application/json",
            Authorization: 'Kinvey ' + localStorage.getItem('authToken'),
        }
    }
    fetch(url, headers)
        .then(heandler)
        .then(loadBooks)
        .catch(err => console.log(err));
}

function heandler(response) {
    if (response.status >= 400) {
        throw new Error(response.status)
    }

    return response.json();
}