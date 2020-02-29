function attachEvents() {
    const btnLoadPosts = document.getElementById('btnLoadPosts');
    const btnViewPost = document.getElementById('btnViewPost');
    const posts = document.getElementById('posts');
    const postTitle = document.getElementById('post-title');
    const postBody = document.getElementById('post-body');
    const postComments = document.getElementById('post-comments');

    btnLoadPosts.addEventListener('click', loadPosts);
    btnViewPost.addEventListener('click', viewPost);

    let postInfo;

    function viewPost() {
        postComments.innerHTML = '';
        postBody.innerHTML = '';
        const selectedPost = posts.value;
        let id;

        for (const key in postInfo) {
            if (key === selectedPost) {
                postTitle.textContent = postInfo[key].title;
                const listItem = document.createElement('li');
                listItem.textContent = postInfo[key].body;
                id = postInfo[key].id;
                postBody.appendChild(listItem);
            }
        }

        fetch(' https://blog-apps-c12bf.firebaseio.com/comments/.json')
            .then(response => response.json())
            .then(data => {
                for (const key in data) {
                    if (data[key].postId === id) {
                        const listItem = document.createElement('li');
                        listItem.textContent = data[key].text;
                        postComments.appendChild(listItem);
                    }
                }
            })
    }

    function loadPosts() {
        posts.innerHTML = '';
        fetch(' https://blog-apps-c12bf.firebaseio.com/posts/.json')
            .then((response => response.json()))
            .then((data) => {
                postInfo = data;
                const fragment = document.createDocumentFragment();
                for (const post in data) {
                    const option = document.createElement('option');
                    option.value = post;
                    option.textContent = data[post].title;
                    fragment.appendChild(option);
                }
                posts.appendChild(fragment);
            })

    }

}

attachEvents();