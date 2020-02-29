function extractNum(input) {
    let bigestNum = Number.MIN_SAFE_INTEGER;
    let filtered = input.map(Number).filter((e) => {
        if (e >= bigestNum) {
            bigestNum = e
            return e
        }
    });
    console.log(filtered.join('\n'));
}
extractNum([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24
]);