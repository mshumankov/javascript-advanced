function loadRepos() {
	const userName = document.getElementById('username').value;
	const repos = document.getElementById('repos');
	repos.innerHTML = '';

	function displayRepos(data) {
		console.log(data);
		data
			.map(mapObj)
			.forEach(toDomElement);
	}

	function mapObj({
		full_name,
		html_url
	}) {

		return {
			name: full_name,
			link: html_url
		}

	}

	function toDomElement({
		name,
		link
	}) {
		const li = document.createElement('li');
		const a = document.createElement('a');
		a.textContent = name;
		a.href = link;

		li.appendChild(a);
		repos.appendChild(li);
	}

	fetch(`https://api.github.com/users/${userName}/repos`)
		.then((response => response.json()))
		.then(data => displayRepos(data))
}