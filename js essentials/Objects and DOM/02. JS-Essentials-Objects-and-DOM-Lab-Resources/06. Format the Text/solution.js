function solve() {
  let text = document.getElementById('input').textContent;
  let div = document.getElementById('output');
  let splitedText = text.split('.');
  splitedText.pop();
  console.log(splitedText);
  let counter = 1;
  let paragraph = ''

  for (let sentence of splitedText) {
    paragraph += sentence + '.';

    if (counter >= 3) {
      let p = document.createElement('p');
      p.textContent = paragraph;
      div.appendChild(p);
      paragraph = '';
      counter = 0
    }
    counter++;
  }

  if (paragraph !== '') {
    let p = document.createElement('p');
    p.textContent = paragraph;
    div.appendChild(p);
  }
}