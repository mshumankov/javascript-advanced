const eventController = function () {

    const getOrganize = function (context) {
        context = helper.userStatus(context);

        context.loadPartials({
            header: "../views/common/header.hbs",
            footer: "../views/common/footer.hbs"
        }).then(function () {
            this.partial('../views/events/organize.hbs')
        })
    }

    const postOrganize = function (context) {

        eventModel.createEvent(context.params)
            .then(helper.handler)
            .then(() => {
                homeController.getHome(context);
            })
    }

    const moreDetails = async function (context) {
        let response = await eventModel.getEvent(context.params.eventId);
        let event = await helper.handler(response);

        Object.keys(event).forEach((key) => {
            context[key] = event[key];
        });


        let userId = JSON.parse(storage.getData('userInfo'))._id;
        let eventId = context._acl.creator;

        if (userId === eventId) {
            context.userCreator = true;
        } else {
            context.userCreator = false;
        }
        context = helper.userStatus(context);


        context.loadPartials({
            header: "../views/common/header.hbs",
            footer: "../views/common/footer.hbs"
        }).then(function () {
            this.partial('../views/events/details.hbs')
        })

    }

    const joinEvent = async function (context) {
        let responseGet = await eventModel.getInterestedPeople(context.params.eventId);
        let eventGet = await helper.handler(responseGet);

        Object.keys(eventGet).forEach((key) => {
            context[key] = eventGet[key];
        });

        context.peopleInterestedIn = (eventGet.peopleInterestedIn) + 1;


        let responsePut = await eventModel.putInterestedPeople(context);
        let eventPut = await helper.handler(responsePut);
        await homeController.getHome(context);

    }

    const closeEvent = async function (context) {
        let response = await eventModel.deleteEvent(context.params.eventId);
        let event = await helper.handler(response);
        await homeController.getHome(context);
    }


    return {
        getOrganize,
        postOrganize,
        moreDetails,
        joinEvent,
        closeEvent
    }
}();