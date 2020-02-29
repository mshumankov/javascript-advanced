function printDelimiter(input) {
    let arr = input;
    let delimiter = input.pop();
    console.log(arr.join(delimiter));
}
printDelimiter(['How about no?',
    'I',
    'will',
    'not',
    'do',
    'it!',
    '_'
]);