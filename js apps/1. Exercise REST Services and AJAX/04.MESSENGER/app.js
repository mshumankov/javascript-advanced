function attachEvents() {
    const textArea = document.getElementById('messages');
    const author = document.getElementById('author');
    const message = document.getElementById('content');
    const btnSend = document.getElementById('submit');
    const btnRefresh = document.getElementById('refresh');
    const url = ' https://rest-messanger.firebaseio.com/messanger.json';

    btnSend.addEventListener('click', sendMessage);
    btnRefresh.addEventListener('click', loadMessages);

    function loadMessages() {
        fetch(url)
            .then(response => response.json())
            .then((data => {
                let textMessage = '';

                for (const message in data) {
                    const {
                        author,
                        content
                    } = data[message]
                    textMessage += `${author}: ${content}\n`;
                }
                console.log(textMessage);
                textArea.value = textMessage;
            }))
    }

    function sendMessage() {
        const obj = {
            author: `${author.value}`,
            content: `${message.value}`,
        }

        fetch(url, {
                method: 'post',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(obj)
            })
            .then(() => {
                author.value = '';
                message.value = '';
            })
    }
}

attachEvents();