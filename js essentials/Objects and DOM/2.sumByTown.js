function sumByTowns(input) {
    let sum = {};
    for (let i = 0; i < input.length; i += 2) {
        const town = input[i];
        const income = input[i + 1];

        if (sum.hasOwnProperty(town)) {
            sum[town] += Number(income);
        } else {
            sum[town] = Number(income);
        }
    }
    console.log(JSON.stringify(sum));
}
sumByTowns(['Sofia', '20', 'Varna', '3', 'Sofia', '5', 'Varna', '4']);