function solve() {
   let buttonElement = document.getElementById('send');

   buttonElement.addEventListener('click', e => {
      let textAreaElement = document.getElementById('chat_input');
      let parrentElement = document.getElementById('chat_messages')
      let text = textAreaElement.value;
      let messageElement = document.createElement('div');
      messageElement.setAttribute('class', 'message my-message');
      messageElement.textContent = text;
      parrentElement.appendChild(messageElement);
      textAreaElement.value = '';
   })
}