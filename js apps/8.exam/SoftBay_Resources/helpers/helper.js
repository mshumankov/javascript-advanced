const helper = function () {

    const handler = function (response) {

        if (response.status >= 400) {
            helper.stopNotify();
            helper.notify('error', 'Error');
            throw new Error(`Something went wrong. Error: ${response.statusText}`);
        }

        if (response.status !== 204) {
            response = response.json();
        }

        return response;
    };

    const passwordCheck = function (params) {
        return params.password === params.rePassword;
    };

    const inputCheck = function (params) {
        return (params.password !== '') && (params.rePassword !== '');
    }

    const userStatus = function (context) {
        const loggedIn = storage.getData('userInfo') !== null;

        if (loggedIn) {
            const username = JSON.parse(storage.getData('userInfo')).username;
            context.loggedIn = loggedIn;
            context.username = username.toUpperCase();
        }
        return context;
    }

    const notify = function (action, message) {
        let element = '';

        if (action === 'success') {
            element = document.getElementById('successNotification');
            element.style.display = 'block';
            element.textContent = message;
        } else if (action === 'error') {
            element = document.getElementById('errorNotification');
            element.style.display = 'block';
            element.textContent = message;
            element.addEventListener('click', (ev) => ev.currentTarget.style.display = 'none');
        } else if (action === 'load') {
            element = document.getElementById('loadingNotification');
            element.style.display = 'block';
            element.textContent = 'Loadding...';
        }
    }

    const stopNotify = function () {
        [...document.getElementById('notifications').children].forEach(element => {
            element.style.display = 'none';
        });
    }

    return {
        handler,
        passwordCheck,
        userStatus,
        notify,
        stopNotify,
        inputCheck
    }
}();