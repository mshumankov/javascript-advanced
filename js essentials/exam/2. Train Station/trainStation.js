function trainStation(capacity, passengers) {
    let trainWithPassengers = [];
    let passengersAll = 0;
    for (let wagon of passengers) {
        passengersAll += wagon;

        if (capacity >= passengersAll) {
            trainWithPassengers.push(passengersAll);
            passengersAll = 0;
        } else {
            passengersAll -= capacity;
            trainWithPassengers.push(capacity);
        }
    }
    if (passengersAll > 0) {
        console.log(`[ ${trainWithPassengers.join(', ')} ]`);
        console.log(`Could not fit ${passengersAll} passengers`);
    } else {
        console.log(`[ ${trainWithPassengers.join(', ')} ]`);
        console.log('All passengers aboard');
    }
}
trainStation(6, [5, 15, 2]);