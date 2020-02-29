function caffeineStudy(input) {
    let days = Number(input);

    let coffeeIndex = 40 / 100;
    let colaIndex = 8 / 100;
    let teaIndex = 20 / 100;
    let energyIndex = 30 / 100;
    let result = 0;

    for (let i = 1; i <= days; i++) {
        let coffeeMl = 150 * 3;
        let colaMl = 250 * 2;
        let teaMl = 350 * 3;
        let energyMl = 0;

        if (i % 5 === 0) {
            energyMl += 500 * 3
        }

        if (i % 9 === 0) {
            energyMl += 500 * 2;
            colaMl += 250 * 4;
        }

        result += (coffeeMl * coffeeIndex) + (colaMl * colaIndex) + (teaMl * teaIndex) + (energyMl * energyIndex);
    }

    console.log(`${result} milligrams of caffeine were consumed`);
}
caffeineStudy('8')