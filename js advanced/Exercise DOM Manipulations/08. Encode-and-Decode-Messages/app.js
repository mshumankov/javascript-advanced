function encodeAndDecodeMessages() {
    let encodeButton = document.querySelector('#main div:nth-child(1) button');
    let decodeButton = document.querySelector('#main div:nth-child(2) button');
    let encodeText = document.querySelector('#main div:nth-child(1) textarea');
    let decodeText = document.querySelector('#main div:nth-child(2) textarea');

    encodeButton.addEventListener('click', encodeMessage);
    decodeButton.addEventListener('click', decodeMessage);

    function encodeMessage() {
        let text = encodeText.value;
        let encodeMessage = text.split('')
            .map(el => {
                let char = String.fromCharCode((el.charCodeAt()) + 1);
                return char;
            })
            .join('');
        decodeText.value = encodeMessage;
        encodeText.value = '';
    }

    function decodeMessage() {
        let text = decodeText.value;
        let decodeMessage = text.split('')
            .map(el => {
                let char = String.fromCharCode((el.charCodeAt()) - 1);
                return char
            })
            .join('');
        decodeText.value = decodeMessage;
    }
}