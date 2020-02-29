function tickets(ticketArr, sortCriterion) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let unsortedTickets = [];

    for (let ticket of ticketArr) {
        let [destination, price, status] = ticket.split('|');
        price = Number(price);

        unsortedTickets.push(new Ticket(destination, price, status));
    }

    let sorted = [];

    if (sortCriterion === 'price') {
        sorted = unsortedTickets.sort((a, b) => a.price - b.price);
    } else if (sortCriterion === 'destination') {
        sorted = unsortedTickets.sort((a, b) => a.destination.localeCompare(b.destination));
    } else if (sortCriterion === 'status') {
        sorted = unsortedTickets.sort((a, b) => a.status.localeCompare(b.status));
    }
    return sorted;
}



tickets(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'
    ],
    'destination'
);