function aggregates(input) {
    console.log(`Sum = ${input.reduce((acc, val) => acc + val)}`);
    console.log(`Min = ${input.reduce((acc, val) => Math.min(acc, val))}`);
    console.log(`Max = ${input.reduce((acc, val) => Math.max(acc, val))}`);
    console.log(`Product = ${input.reduce((acc, val) => acc * val)}`);
    console.log(`Join = ${input.reduce((acc, val) => acc + val, '')}`);
}
aggregates([5, -3, 20, 7, 0.5]);