const homeController = function () {

    const getHome = async function (context) {

        context = helper.userStatus(context);

        context.loadPartials({
            header: "../views/common/header.hbs",
            footer: "../views/common/footer.hbs",
        }).then(function () {
            this.partial('../views/home/home.hbs')
        })
    };

    return {
        getHome
    }
}();