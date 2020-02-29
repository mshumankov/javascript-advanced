function subBum(arr, start, end) {
    if (!Array.isArray(arr)) {
        return NaN;
    }
    if (start < 0) {
        start = 0;
    }

    let cutIndex = arr.splice(start, end + 1);
    let result = cutIndex.reduce((a, val) => a + val, 0);

    if (typeof result !== 'number') {
        return NaN;
    }
    return result


}
console.log(subBum([], 1, 2));