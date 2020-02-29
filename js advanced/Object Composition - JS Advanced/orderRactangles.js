function orderRactangle(input) {
    let ractangleArr = [];

    for (let object of input) {
        ractangleArr.push(createObject(object[0], object[1]));
    }

    function createObject(width, height) {
        return {
            width,
            height,
            area() {
                return this.width * this.height;
            },
            compareTo(rect) {
                return this.area() - rect.area();
            }
        }
    }

    const sortedObjects = ractangleArr.sort((a, b) => {
        return b.area() - a.area() || b.width - a.width;
    })
    return ractangleArr;
}
console.log(orderRactangle([
    [1, 20],
    [20, 1],
    [5, 3],
    [5, 3]
]));