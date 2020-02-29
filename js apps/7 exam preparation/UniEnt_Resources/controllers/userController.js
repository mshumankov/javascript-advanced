const userController = function () {

    const getRegister = function (context) {

        context.loadPartials({
            header: "../views/common/header.hbs",
            footer: "../views/common/footer.hbs"
        }).then(function () {
            this.partial('../views/user/register.hbs')
        })
    };

    const getLogin = function (context) {
        context.loadPartials({
            header: "../views/common/header.hbs",
            footer: "../views/common/footer.hbs"
        }).then(function () {
            this.partial('../views/user/login.hbs')
        })
    };

    const postRegister = function (context) {
        helper.notify('load');
        userModel.register(context.params)
            .then(helper.handler)
            .then((data) => {
                helper.stopNotify();
                helper.notify('success', 'Success');
                storage.saveUser(data);
                homeController.getHome(context);
            })
    };

    const postLogin = function (context) {
        helper.notify('load');
        userModel.login(context.params)
            .then(helper.handler)
            .then((data) => {
                helper.stopNotify();
                helper.notify('success', 'Success');
                storage.saveUser(data);
                homeController.getHome(context);
            })
    };

    const logout = function (context) {

        userModel.logout()
            .then(helper.handler)
            .then(() => {
                storage.deleteUser();
                homeController.getHome(context);
            });
    };

    return {
        getRegister,
        postRegister,
        getLogin,
        postLogin,
        logout
    }
}();