const app = Sammy("body", function () {

    this.use('Handlebars', 'hbs');

    // Home
    this.get('#/home', homeController.getHome);

    // User
    this.get('#/register', userController.getRegister);
    this.get('#/login', userController.getLogin);

    this.post('#/register', userController.postRegister);
    this.post('#/login', userController.postLogin);
    this.get('#/logout', userController.logout);

    // events
    this.get('#/organize', eventController.getOrganize);
    this.get('#/detailEvent/:eventId', eventController.moreDetails)

    this.post('#/organize', eventController.postOrganize);
    this.get('#/joinEvent/:eventId', eventController.joinEvent);
    this.get('#/deleteEvent/:eventId', eventController.closeEvent);

});

(() => {
    app.run('#/home');
})();