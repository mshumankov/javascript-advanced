function carFactory(car) {
    let volume;
    let wheelsize;
    let power;

    if (car.power <= 90) {
        volume = 1800;
        power = 90;
    } else if (car.power <= 120) {
        volume = 2400;
        power = 120;
    } else if (car.power <= 200) {
        volume = 3500;
        power = 200;
    }

    if (car.wheelsize % 2 !== 0) {
        wheelsize = car.wheelsize;
    } else {
        wheelsize = car.wheelsize - 1;
    }

    let wheels = `${wheelsize} `.repeat(4).trim().split(' ').map(Number);

    return {
        model: car.model,
        engine: {
            power,
            volume
        },
        carriage: {
            type: car.carriage,
            color: car.color
        },
        wheels
    }
}
console.log(carFactory({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}));