function rotateArray(input) {
    let rotations = Number(input.pop());
    let rotatedArr = [...input];

    for (let i = 0; i < rotations % rotatedArr.length; i++) {
        let lastElement = rotatedArr.pop();
        rotatedArr.unshift(lastElement);
    }
    console.log(rotatedArr.join(' '));
}
rotateArray(['1',
    '2',
    '3',
    '4',
    '22'
]);