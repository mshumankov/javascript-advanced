const eventController = function () {

    const getOffer = function (context) {
        context = helper.userStatus(context);

        context.loadPartials({
            header: "../views/common/header.hbs",
            footer: "../views/common/footer.hbs"
        }).then(function () {
            this.partial('../views/offers/createOffer.hbs')
        })
    }

    const postOffer = function (context) {

        helper.notify('load');

        eventModel.createOffer(context.params)
            .then(helper.handler)
            .then(() => {
                helper.stopNotify();
                helper.notify('success', 'Success');
                homeController.getHome(context);
            })
    }

    const moreDetails = async function (context) {
        let response = await eventModel.getOffer(context.params.eventId);
        let offer = await helper.handler(response);

        Object.keys(offer).forEach((key) => {
            context[key] = offer[key];
        });

        context = helper.userStatus(context);


        context.loadPartials({
            header: "../views/common/header.hbs",
            footer: "../views/common/footer.hbs"
        }).then(function () {
            this.partial('../views/offers/details.hbs')
        })

    }

    const closeOffer = async function (context) {
        helper.notify('load');
        try {
            let response = await eventModel.deleteOffer(context.params.eventId);
            let event = await helper.handler(response);
            helper.stopNotify();
            helper.notify('success', 'Success');
            await homeController.getHome(context);
        } catch (error) {
            helper.stopNotify();
            helper.notify('error', 'Error');
        }

    }

    const editOffer = async function (context) {

        let response = await eventModel.changeOffer(context.params.eventId);
        let offer = await helper.handler(response);


        context = helper.userStatus(context);

        Object.keys(offer).forEach((key) => {
            context[key] = offer[key];

            context.loadPartials({
                header: "../views/common/header.hbs",
                footer: "../views/common/footer.hbs"
            }).then(function () {
                this.partial('../views/offers/editOffer.hbs')
            })
        });
    }

    const editOfferPost = function (context) {
        //console.log(context.params);
        // let response = await eventModel.changeEventPost(context.params);
        // let event = await helper.handler(response);

        // await homeController.getHome(context);
        helper.notify('load');

        eventModel.changeOfferPost(context.params)
            .then(helper.handler)
            .then(() => {
                helper.stopNotify();
                helper.notify('success', 'Success');
                homeController.getHome(context);
            })
    }

    const getOffers = async function (context) {

        context = helper.userStatus(context);


        let response = await eventModel.getAllOffers();
        context.offers = await helper.handler(response);

        // let userId = JSON.parse(storage.getData('userInfo'))._id;
        // let eventId = context._acl.creator;

        // if (userId === eventId) {
        //     context.userCreator = true;
        // } else {
        //     context.userCreator = false;
        // }

        context.loadPartials({
            header: "../views/common/header.hbs",
            footer: "../views/common/footer.hbs",
        }).then(function () {
            this.partial('../views/offers/dashboard.hbs')
        })
    };


    return {
        getOffer,
        postOffer,
        moreDetails,
        closeOffer,
        editOffer,
        editOfferPost,
        getOffers
    }
}();