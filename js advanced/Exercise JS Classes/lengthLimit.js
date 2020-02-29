class Stringer {
    constructor(innerString, innerLength) {
        this.innerString = innerString;
        this.innerLength = innerLength;
    }

    increase(length) {
        this.innerLength = this.innerLength + length;
        console.log(this);
    }

    decrease(length) {
        this.innerLength = this.innerLength - length;

        if (this.innerLength < 0) {
            this.innerLength = 0;
        }
    }

    toString() {
        if (this.innerString.length > this.innerLength) {
            let cutedString = this.innerString
            cutedString = this.innerString.substring(0, this.innerLength) + '...';
            return cutedString;
        }

        return this.innerString
    }

    tr(num) {
        this.increase(num);
    }
}

let test = new Stringer("Test", 5);
//console.log(test.toString()); // Test

// test.decrease(3);
// console.log(test.toString()); // Te...

// test.decrease(5);
// console.log(test.toString()); // ...

test.increase(4);
// console.log(test.toString()); // Test
//console.log(test.tr(1));