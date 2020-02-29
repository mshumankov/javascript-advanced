function solve() {
  let text = document.getElementById('text').value;
  let command = document.getElementById('naming-convention').value;

  if (command === 'Camel Case' || command === 'Pascal Case') {
    text = text.toLowerCase()
      .split(' ')
      .filter(e => e !== '')
      .map(e => {
        return e = e[0].toUpperCase() + e.substr(1);
      })
      .join('');

    if (command === 'Camel Case') {
      text = text[0].toLowerCase() + text.substr(1);
    }

  } else {
    text = 'Error!'
  }
  console.log(text);
  document.getElementById('result').textContent = text;
  document.getElementById('text').value = '';
  document.getElementById('naming-convention').value = '';
}