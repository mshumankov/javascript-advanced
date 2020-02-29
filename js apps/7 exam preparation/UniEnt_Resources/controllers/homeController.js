const homeController = function () {

    const getHome = async function (context) {

        context = helper.userStatus(context);
        const loggedIn = storage.getData('userInfo') !== null;

        if (loggedIn) {
            let response = await eventModel.getAllEvents();
            context.events = await helper.handler(response);
        }


        context.loadPartials({
            header: "../views/common/header.hbs",
            footer: "../views/common/footer.hbs",
            homeEvents: "../views/events/homeEvents.hbs",
            error: "../views/events/error.hbs"
        }).then(function () {
            this.partial('../views/home/home.hbs')
        })
    };

    return {
        getHome
    }
}();