function cofeeMachine(input) {
    let report = 0;
    for (let line of input) {
        let splited = line.split(', ');
        let money = Number(splited.shift());
        let typeDrink = splited.shift();
        let price = 0;

        if (typeDrink === 'coffee') {
            let typeCofee = splited.shift();

            if (typeCofee === 'caffeine') {
                price = 0.8;
            } else {
                price = 0.9
            }
        } else {
            price = 0.8
        }

        let milkOrSugar = splited.shift();

        if (milkOrSugar === 'milk') {
            price += Number((price * 0.1).toFixed(1));
            let sugar = splited.shift();

            if (sugar !== '0') {
                price += 0.1;
            }
        } else {
            if (milkOrSugar !== '0') {
                price += 0.1;
            }
        }

        let change = 0;

        if (money >= price) {
            change = money - price;
            console.log(`You ordered ${typeDrink}. Price: ${price.toFixed(2)}$ Change: ${change.toFixed(2)}$`);
            report += price;
        } else {
            let neededMoney = price - money;
            console.log(`Not enough money for ${typeDrink}. Need ${neededMoney.toFixed(2)}$ more.`);
        }
    }
    console.log(`Income Report: ${report.toFixed(2)}$`);
}
cofeeMachine(['8.00, coffee, decaf, 4',
    '1.00, tea, 2'
]);