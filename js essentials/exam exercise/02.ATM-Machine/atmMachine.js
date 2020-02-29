function atmMachine(input) {
    let totalCash = 0;
    let allBanknotes = [];
    for (let line of input) {
        if (line.length > 2) {
            let insertAll = 0;
            for (let banknote of line) {
                insertAll += banknote;
            }
            totalCash += insertAll;
            console.log(`Service Report: ${insertAll}$ inserted. Current balance: ${totalCash}$.`);
            allBanknotes = [...allBanknotes, ...line];
            allBanknotes = allBanknotes.sort((a, b) => b - a);
        } else if (line.length === 2) {
            let accountBalance = line[0];
            let withdraw = line[1];

            if (accountBalance < withdraw) {
                console.log(`Not enough money in your account. Account balance: ${accountBalance}$.`);
            } else {
                if (withdraw > totalCash) {
                    console.log(`ATM machine is out of order!`);
                } else {
                    totalCash -= withdraw;
                    let currentNum = withdraw;

                    while (currentNum > 0) {
                        for (let i = 0; i < allBanknotes.length; i++) {
                            if (allBanknotes[i] <= currentNum) {
                                currentNum -= allBanknotes[i];
                                allBanknotes[i] = 0;
                            }
                        }
                    }

                    allBanknotes = allBanknotes.filter((e) => e > 0);
                    accountBalance = accountBalance - withdraw;
                    console.log(`You get ${withdraw}$. Account balance: ${accountBalance}$. Thank you!`);
                }
            }
        } else {
            let banknoteDigit = line[0];
            let count = 0;

            for (let banknoteCurrent of allBanknotes) {
                if (banknoteCurrent === banknoteDigit) {
                    count++;
                }
            }

            console.log(`Service Report: Banknotes from ${banknoteDigit}$: ${count}.`);
        }
    }
}
atmMachine([
    [20, 5, 100, 20, 1],
    [457, 25],
    [1],
    [10, 10, 5, 20, 50, 20, 10, 5, 2, 100, 20],
    [20, 85],
    [5000, 4500],
]);