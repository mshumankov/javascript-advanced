const storage = function () {
    const appKey = 'kid_HyCO3YLCB';
    const appSecret = 'e687fcad612a411dba2ad57b7b4f5c92';

    const getData = function (key) {
        return localStorage.getItem(key + appKey)
    };

    const saveData = function (key, value) {
        localStorage.setItem(key + appKey, JSON.stringify(value));
    };

    const saveUser = function (data) {
        saveData('userInfo', data);
        saveData('authToken', data._kmd.authtoken)
    };

    const deleteUser = function () {
        localStorage.removeItem('userInfo' + appKey);
        localStorage.removeItem('authtoken' + appKey);
    };

    return {
        appKey,
        appSecret,
        getData,
        saveUser,
        deleteUser,
        saveData,
    }
}();