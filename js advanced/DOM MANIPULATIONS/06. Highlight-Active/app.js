function focus() {
    onFocus = function (ev) {
        const input = ev.target;
        input.parentNode.classList.add('focused');
    };

    onBlur = function (ev) {
        const input = ev.target;
        input.parentNode.classList.remove('focused');
    };

    [...document.querySelectorAll('input[type=text]')].forEach((e) => {
        e.addEventListener('focus', onFocus);
        e.addEventListener('blur', onBlur);
    });




}