function addRemove(input) {
    let num = 1;
    let arrElements = [];

    for (let command of input) {
        if (command === 'add') {
            arrElements.push(num);
        } else {
            arrElements.pop();
        }
        num++;
    }

    if (arrElements.length > 0) {
        console.log(arrElements.join('\n'));
    } else {
        console.log('Empty');
    }

}
addRemove(['remove',
    'remove',
    'remove'
]);