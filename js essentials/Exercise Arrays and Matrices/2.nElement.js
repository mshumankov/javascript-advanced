function nElement(input) {
    let step = Number(input.pop());

    for (let i = 0; i < input.length; i += step) {
        console.log(input[i]);
    }
}
nElement(['5',
    '20',
    '31',
    '4',
    '20',
    '2'
]);