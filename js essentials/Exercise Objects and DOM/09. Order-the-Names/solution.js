function solve() {
    document.getElementsByTagName('button')[0].addEventListener('click', e => {
        let input = document.getElementsByTagName('input')[0].value;
        let char = input[0].toUpperCase().charCodeAt();
        let num = char - 65;
        let liElement = document.querySelectorAll('div ol li')[num].textContent;

        if (liElement !== '') {
            document.querySelectorAll('div ol li')[num].textContent += `, ${input}`;
        } else {
            document.querySelectorAll('div ol li')[num].textContent = `${input}`;
        }

        document.getElementsByTagName('input')[0].value = '';
    })
}