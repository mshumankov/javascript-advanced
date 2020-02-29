function solve() {
  let text = document.getElementById('text').value;
  let result = document.getElementById('result');
  let splited = text.split(' ').filter(e => e !== '');
  let words = [];
  let finalWord = ''

  for (let item of splited) {
    if (isNaN(Number(item))) {
      let line = [];

      for (let letter of item) {
        let char = letter.charCodeAt();
        line.push(char);
      }
      let p = document.createElement('p');
      p.textContent = line.join(' ');
      result.appendChild(p);

    } else {
      let letter = String.fromCharCode(item);
      finalWord += letter;
    }
  }
  let p = document.createElement('p');
  p.textContent = finalWord;
  result.appendChild(p);
}