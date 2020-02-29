function argumentInfo() {
    let args = [...arguments];
    let countArgs = {};

    for (let arg of args) {
        let type = typeof arg;

        if (type === 'object') {
            console.log(`${type}: `);
        } else {
            console.log(`${type}: ${arg}`);
        }


        if (countArgs[type]) {
            countArgs[type]++;
        } else {
            countArgs[type] = 1;
        }
    }


    Object.entries(countArgs)
        .sort((a, b) => b[1] - a[1])
        .forEach(el => {
            console.log(`${el[0]} = ${el[1]}`);
        });
}
argumentInfo('cat', 42, function () {
    console.log('Hello world!');
});