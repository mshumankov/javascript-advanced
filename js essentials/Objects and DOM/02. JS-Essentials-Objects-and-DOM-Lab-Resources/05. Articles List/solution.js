function createArticle() {
	let title = document.getElementById('createTitle').value;
	let text = document.getElementById('createContent').value;
	let section = document.getElementById('articles');

	if (title !== '' && text !== '') {
		let article = document.createElement('article');
		let header = document.createElement('h3');
		let paragraph = document.createElement('p');

		header.textContent = title;
		paragraph.textContent = text;

		article.appendChild(header);
		article.appendChild(paragraph);
		section.appendChild(article);
	}
	document.getElementById('createTitle').value = '';
	document.getElementById('createContent').value = '';
}