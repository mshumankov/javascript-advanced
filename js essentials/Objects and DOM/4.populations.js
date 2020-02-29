function townPopulations(input) {
    const objPopulation = {};
    for (let line of input) {
        const splited = line.split(' <-> ');
        const town = splited[0];
        const population = Number(splited[1]);

        if (objPopulation.hasOwnProperty(town)) {
            objPopulation[town] += population;
        } else {
            objPopulation[town] = population;
        }
    }

    for (let prop in objPopulation) {
        console.log(`${prop} : ${objPopulation[prop]}`);
    }
}
townPopulations(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Sofia <-> 1200000',
    'Las Vegas <-> 1000000'
])