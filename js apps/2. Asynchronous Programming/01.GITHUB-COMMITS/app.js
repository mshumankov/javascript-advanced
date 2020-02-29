function loadCommits() {
    const username = document.getElementById('username').value;
    const repo = document.getElementById('repo').value;
    const url = `https://api.github.com/repos/${username}/${repo}/commits`;
    const ul = document.getElementById('commits');

    fetch(url)
        .then((response) => {
            if (response.status >= 300) {
                console.log(response);
                throw new Error(` ${response.status} (${response.statusText})`);

            }
            return response.json()
        })
        .then((data) => {
            const fragment = document.createDocumentFragment();

            for (const repoInfo of data) {
                const li = document.createElement('li');
                li.textContent = `${repoInfo.commit.author.name}: ${repoInfo.commit.message}`
                fragment.appendChild(li);
            }
            ul.appendChild(fragment);
        })
        .catch((error) => {
            const li = document.createElement('li');
            li.textContent = error;
            ul.appendChild(li);
        })
}