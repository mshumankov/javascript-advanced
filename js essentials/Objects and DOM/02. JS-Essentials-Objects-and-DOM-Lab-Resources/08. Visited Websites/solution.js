function solve() {
  let sites = document.getElementsByClassName('link-1');

  for (let site of sites) {
    site.addEventListener('click', e => {
      let currentTarget = e.currentTarget;
      let paragraph = site.getElementsByTagName('p')[0];
      let text = paragraph.textContent;
      let splited = text.split(' ');
      let num = Number(splited[1]);
      num++;
      splited[1] = num;
      paragraph.textContent = splited.join(' ');
    })
  }
}