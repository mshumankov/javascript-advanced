function solve(selector) {
    let element = document.querySelector(selector);

    (function addClass(element) {
        if (element.hasChildNodes()) {
            element.classList.add('highlight');
            addClass([...element.children].sort((a, b) => b.children.length - a.children.length)[0]);
        }
    })(element);
}

solve('#content');