class Reactangle {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    calcArea() {
        return this.width * this.height;
    }
}

let test = new Reactangle(5, 5, 'blue');
console.log(test);
console.log(test.calcArea());
test.width = 10;
console.log(test.calcArea());