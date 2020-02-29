function coffeeStorage() {
    let input = document.getElementsByTagName('textarea')[0].value;
    let inputStr = JSON.parse(input);
    let report = document.querySelectorAll('p')[0];
    let inspection = document.querySelectorAll('p')[1];
    let coffeeAll = {}

    for (let line of inputStr) {
        let [command, brand, subbrand, date, quantity] = line.split(', ');

        if (command === 'IN') {
            if (!coffeeAll[brand]) {
                coffeeAll[brand] = {};
            }

            if (!coffeeAll[brand][subbrand]) {
                coffeeAll[brand][subbrand] = {
                    date,
                    quantity: Number(quantity)
                }
                continue;
            }

            if (coffeeAll[brand][subbrand]) {
                if (coffeeAll[brand][subbrand].date < date) {
                    coffeeAll[brand][subbrand] = {
                        date,
                        quantity: Number(quantity)
                    }
                }
                continue;
            }

            if (coffeeAll[brand][subbrand].date === date) {
                coffeeAll[brand][subbrand].quantity += Number(quantity)
            }
        } else if (command === 'OUT') {
            if (coffeeAll[brand] && coffeeAll[brand][subbrand] && coffeeAll[brand][subbrand].date > date && coffeeAll[brand][subbrand].quantity >= Number(quantity)) {
                coffeeAll[brand][subbrand].quantity -= Number(quantity);
            }
        } else if (command === 'REPORT') {
            let output = [];
            for (let brand in coffeeAll) {
                let str = `${brand}:`;

                for (let subbrand in coffeeAll[brand]) {
                    str += ` ${subbrand} - ${coffeeAll[brand][subbrand].date} - ${coffeeAll[brand][subbrand].quantity}.`;

                }
                output.push(str);
            }
            report.innerHTML = output.join('<br>')
        } else if (command === 'INSPECTION') {
            let output = [];
            let sortedFirst = Object.entries(coffeeAll).sort((a, b) => a[0].localeCompare(b[0]));

            for (let [key, value] of sortedFirst) {
                let str = `${key}:`;

                let sortQuantity = Object.entries(value).sort((a, b) => b[1].quantity - a[1].quantity)
                for (let [k, v] of sortQuantity) {
                    str += ` ${k} - ${v.date} - ${v.quantity}.`
                }
                output.push(str);

            }

            inspection.innerHTML = output.join('<br>')
        }
    }

}