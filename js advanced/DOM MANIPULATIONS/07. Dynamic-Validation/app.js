function validate() {
    let inputElement = document.getElementById('email');
    let pattern = /^[a-z]+@[a-z]+\.[a-z]+?/g;
    inputElement.addEventListener('change', validEmail);


    function validEmail() {
        let matchEmail = inputElement.value.match(pattern);

        if (matchEmail === null) {
            inputElement.classList.add('error');
        } else {
            inputElement.classList.remove('error');
        }
    }
}