let sortedList = (function () {
    let list = [1, 5];


    let obj = {
        size: 2,
        add(num) {
            list.push(num);
            list = list.sort((a, b) => a - b);
            this.size++;
        },
        remove(index) {
            if (index >= 0 && index < this.size) {
                list.splice(index, 1);
                this.size--;
            }

        },
        get(index) {
            return list[index];
        }

    }

    return obj
})();

let testObj = sortedList;
testObj.add(3);
testObj.remove(2);
console.log(testObj.size);