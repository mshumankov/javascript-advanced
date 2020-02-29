const eventModel = function () {

    const createOffer = function (params) {
        let data = {
            product: params.product,
            description: params.description,
            price: params.price,
            pictureUrl: params.pictureUrl,
        }

        let url = `/appdata/${storage.appKey}/offers`;
        let headers = {
            body: JSON.stringify(data),
            headers: {}
        };

        return requester.post(url, headers);
    }

    const getAllOffers = function () {
        let url = `/appdata/${storage.appKey}/offers`;
        let headers = {
            headers: {}
        }
        return requester.get(url, headers);
    }

    const getOffer = function (id) {
        let url = `/appdata/${storage.appKey}/offers/${id}`;
        let headers = {
            headers: {}
        }
        return requester.get(url, headers);
    }

    const getInterestedPeople = function (id) {
        let url = `/appdata/${storage.appKey}/events/${id}`;
        let headers = {
            headers: {}
        }
        return requester.get(url, headers);
    }

    const putInterestedPeople = function (params) {
        let url = `/appdata/${storage.appKey}/events/${params._id}`;
        let data = {
            name: params.name,
            dateTime: params.dateTime,
            description: params.description,
            imageURL: params.imageURL,
            peopleInterestedIn: params.peopleInterestedIn,
            organizer: params.organizer
        }
        let headers = {
            body: JSON.stringify(data),
            headers: {}
        };

        return requester.put(url, headers);
    }

    const deleteOffer = function (id) {
        let url = `/appdata/${storage.appKey}/offers/${id}`;
        let headers = {
            headers: {}
        }
        return requester.del(url, headers);
    }

    const changeOffer = function (id) {
        let url = `/appdata/${storage.appKey}/offers/${id}`;
        let headers = {
            headers: {}
        }
        return requester.get(url, headers);
    }

    const changeOfferPost = function (params) {


        let url = `/appdata/${storage.appKey}/offers/${params.eventId}`;
        let data = {
            product: params.product,
            description: params.description,
            price: params.price,
            pictureUrl: params.pictureUrl,
        }
        let headers = {
            body: JSON.stringify(data),
            headers: {}
        };

        return requester.put(url, headers);
    }

    return {
        createOffer,
        getAllOffers,
        getOffer,
        getInterestedPeople,
        putInterestedPeople,
        deleteOffer,
        changeOffer,
        changeOfferPost
    }
}();