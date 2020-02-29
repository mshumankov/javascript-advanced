function solve() {
  let textareaFrom = document.getElementsByTagName('textarea')[0];
  let table = document.getElementsByClassName('table')[0];
  let bought = [];
  let total = 0;
  let totalDefFactor = 0;
  let counter = 0;
  let text = '';

  document.getElementsByTagName('button')[0].addEventListener('click', e => {
    let furnitureList = JSON.parse(textareaFrom.value);

    for (let furniture of furnitureList) {
      let row = table.insertRow();
      let ceil = row.insertCell();

      let img = document.createElement('img');
      img.setAttribute('src', furniture.img);
      ceil.appendChild(img);

      ceil = row.insertCell();

      let name = document.createElement('p');
      name.textContent = furniture.name;
      ceil.appendChild(name);

      ceil = row.insertCell();

      let price = document.createElement('p');
      price.textContent = furniture.price;
      ceil.appendChild(price);

      ceil = row.insertCell();

      let decFactor = document.createElement('p');
      decFactor.textContent = furniture.decFactor;
      ceil.appendChild(decFactor);

      ceil = row.insertCell();

      let checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      ceil.appendChild(checkbox);
    }
  })

  document.getElementsByTagName('button')[1].addEventListener('click', e => {
    let rows = document.querySelectorAll('table tbody tr');

    for (let row of rows) {
      let check = row.querySelector('td:nth-child(5) input').checked;

      if (check === true) {
        let name = row.querySelector('td:nth-child(2) p').textContent;
        let price = Number(row.querySelector('td:nth-child(3) p').textContent);
        let decFactor = Number(row.querySelector('td:nth-child(4) p').textContent);
        bought.push(name);
        total += price;
        totalDefFactor += decFactor;
        counter++;
      }
    }

    if (bought) {
      let list = bought.join(', ');
      text += `Bought furniture: ${list}\n`;
    } else {
      text += `Bought furniture:\n`;
    }

    text += `Total price: ${total.toFixed(2)}\n`;

    if (counter > 0) {
      let average = totalDefFactor / counter;
      text += `Average decoration factor: ${average}\n`;
    }
    document.getElementsByTagName('textarea')[1].value = text;

  })
}