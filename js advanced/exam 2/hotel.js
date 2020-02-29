class Hotel {
    constructor(name, capacity) {
        this.name = name;
        this.capacity = capacity;
        this.bookings = [];
        this.currentBookingNumber = 1;

        this.roomsPricing = {
            single: 50,
            double: 90,
            maisonette: 130
        }

        this.servicesPricing = {
            food: 10,
            drink: 15,
            housekeeping: 25
        }

        this.availables = {
            single: Math.floor(this.capacity * 0.5),
            double: Math.floor(this.capacity * 0.3),
            maisonette: Math.floor(this.capacity * 0.2)
        }
    }

    rentARoom(clientName, roomType, nights) {
        if (this.availables[roomType] > 0) {
            const obj = {
                clientName,
                roomType,
                nights,
                roomNumber: this.currentBookingNumber
            }
            const output = `Enjoy your time here Mr./Mrs. ${clientName}. Your booking is ${this.currentBookingNumber}.`
            this.bookings.push(obj);
            this.availables[roomType]--;
            this.currentBookingNumber++;
            return output

        } else {
            let output = `No ${roomType} rooms available!`;
            const leftRooms = Object.keys(this.availables).filter((x) => this.availables[x] > 0);

            for (let room of leftRooms) {
                output += ` Available ${room} rooms: ${this.availables[room]}.`
            }
            return output;
        }
    }

    roomService(currentBookingNumber, serviceType) {
        const validBooking = this.bookings.filter((x) => x.roomNumber === currentBookingNumber);

        if (!Object.keys(this.servicesPricing).includes(serviceType)) {
            return `We do not offer ${serviceType} service.`
        }

        if (validBooking.length > 0) {
            if (!validBooking[0].hasOwnProperty('services')) {
                validBooking[0].services = [];
            }

            validBooking[0].services.push(serviceType);
            return `Mr./Mrs. ${validBooking[0].clientName}, Your order for ${serviceType} service has been successful.`
        } else {
            return `The booking ${currentBookingNumber} is invalid.`
        }


    }

    checkOut(currentBookingNumber) {
        const validBooking = this.bookings.filter((x) => x.roomNumber === currentBookingNumber);

        if (validBooking.length <= 0) {
            return `The booking ${currentBookingNumber} is invalid.`
        }

        const totalRoom = validBooking[0].nights * this.roomsPricing[validBooking[0].roomType];
        this.availables[validBooking[0].roomType]++;
        let output = '';

        if (validBooking[0].hasOwnProperty('services')) {
            let totalServices = 0;

            validBooking[0].services.forEach(element => {
                totalServices += this.servicesPricing[element];
            });
            output = `We hope you enjoyed your time here, Mr./Mrs. ${validBooking[0].clientName}. The total amount of money you have to pay is ${totalRoom + totalServices} BGN. You have used additional room services, costing ${totalServices} BGN.`
        } else {
            output = `We hope you enjoyed your time here, Mr./Mrs. ${validBooking[0].clientName}. The total amount of money you have to pay is ${totalRoom} BGN.`
        }
        this.bookings = this.bookings.filter(x => x.roomNumber !== currentBookingNumber);
        return output;
    }

    report() {

        let output = [];


        this.bookings.forEach(el => {
            let currentStr = `bookingNumber - ${el.roomNumber}\nclientName - ${el.clientName}\nroomType - ${el.roomType}\nnights - ${el.nights}`

            if (el.hasOwnProperty('services')) {
                currentStr += `\nservices: ${el.services.join(', ')}`;
            }
            output.push(currentStr);
        })
        let result = `${this.name.toUpperCase()} DATABASE:\n--------------------\n` + output.join(`\n----------\n`)
        return result;
    }
}



let hotel = new Hotel('HotUni', 10);

hotel.rentARoom('Peter', 'single', 4);
hotel.rentARoom('Robert', 'double', 4);
hotel.rentARoom('Geroge', 'maisonette', 6);


console.log(hotel.checkOut(1));
console.log(hotel.roomService(3, 'housekeeping'));
console.log(hotel.roomService(3, 'drink'));
console.log(hotel.roomService(35, 'drink'));
console.log(hotel.roomService(2, 'room'));
console.log(hotel.checkOut(6));
console.log(hotel.bookings);
console.log(hotel.report());