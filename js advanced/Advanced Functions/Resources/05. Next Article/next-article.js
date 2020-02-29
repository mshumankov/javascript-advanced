function getArticleGenerator(input) {
	let i = 0;
	let messagePlace = document.getElementById('content');


	return function () {
		if (i >= 5) {
			return;
		}
		let message = `<article>
		<p>${input[i++]}</p>
		</article>`;

		messagePlace.innerHTML += message;
	}
}