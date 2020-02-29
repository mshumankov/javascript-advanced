function magicMatrices(matrix) {
    let result = true;
    for (let i = 0; i < matrix.length - 1; i++) {
        let sumRowFirst = matrix[i].reduce((a, b) => a + b, 0);
        let sumRowSecond = matrix[i + 1].reduce((a, b) => a + b, 0);
        let sumColFirst = 0;
        let sumColSecond = 0;

        for (let j = 0; j < matrix.length; j++) {
            sumColFirst += matrix[j][i];
            sumColSecond += matrix[j][i + 1];
        }

        if ((sumRowFirst !== sumRowSecond || sumColFirst !== sumColSecond) || (sumRowFirst !== sumColFirst || sumRowFirst !== sumColSecond)) {
            result = false;
        }
    }

    console.log(result);
}
magicMatrices([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
]);