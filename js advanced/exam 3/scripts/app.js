document.onload = freelance();

function freelance() {
    const userName = document.getElementById('username');
    const btnLogin = document.getElementById('loginBtn');
    const formOffer = document.getElementById('create-offers');
    const offerName = document.getElementById('offerName');
    const companyName = document.getElementById('company');
    const description = document.getElementById('description');
    const btnOffer = document.getElementById('create-offer-Btn');
    const notification = document.getElementById('notification')

    formOffer.style.display = 'none';



    btnLogin.type = 'button';
    btnLogin.addEventListener('click', login);

    function login() {
        if (btnLogin.textContent === 'Login') {
            if (userName.value.length > 3 && userName.value.length < 11) {
                formOffer.style.display = 'block';
                notification.textContent = '';
                userName.value = `Hello, ${userName.value}!`
                userName.classList.add('border-0');
                userName.classList.add('bg-light');
                userName.disabled = 'disabled';
                btnLogin.textContent = 'Logout';
            } else {
                notification.textContent = 'The username length should be between 4 and 10 characters.';
            }
        } else {
            formOffer.style.display = 'none';
            notification.textContent = '';
            userName.value = ``;
            userName.classList.remove('border-0');
            userName.classList.remove('bg-light');
            userName.removeAttribute('disabled')
            btnLogin.textContent = 'Login';

        }

        btnOffer.type = 'button';
        btnOffer.addEventListener('click', createOffer);

        function createOffer() {
            if (offerName.value && companyName.value && description.value) {
                const offersContainer = document.getElementById('offers-container');
                let cloneDiv = document.querySelectorAll('#offers-container div')[0].cloneNode(true);
                cloneDiv.children[0].children[0].textContent = offerName.value;
                cloneDiv.children[0].children[1].children[0].textContent = companyName.value;
                cloneDiv.children[0].children[1].children[1].textContent = description.value;

                offersContainer.appendChild(cloneDiv);
            }


        }
    }
};