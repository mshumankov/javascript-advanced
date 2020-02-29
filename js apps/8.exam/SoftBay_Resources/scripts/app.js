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
    this.get('#/createOffer', eventController.getOffer);
    this.get('#/moreDetails/:eventId', eventController.moreDetails)
    this.get('#/joinEvent/:eventId', eventController.joinEvent);
    this.get('#/deleteOffer/:eventId', eventController.closeOffer);
    this.get('#/editOffer/:eventId', eventController.editOffer);
    this.post('#/createOffer', eventController.postOffer);
    this.post('#/editOffer/:eventId', eventController.editOfferPost);
    this.get('#/dashboard', eventController.getOffers);

});

(() => {
    app.run('#/home');
})();