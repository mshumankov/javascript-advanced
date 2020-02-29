function getFibonacci() {
    currentNumber = 0;
    nextNumber = 1;
    return () => {
        const result = currentNumber;
        currentNumber = nextNumber;
        nextNumber = result + currentNumber;
        return result;
    }
};
let fib = getFibonacci();

console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());