class List {
    constructor() {
        this.list = [];
        this.size = 0;
    }

    add(num) {
        this.list.push(num);
        this.size++;
        this.list = this.list.sort((a, b) => a - b);
    }

    remove(num) {
        if (num >= 0 && num < this.list.length) {
            this.list.splice(num, 1);
            this.size--;
        }
    }

    get(index) {
        if (index >= 0 && index < this.list.length) {
            let numOnIndex = this.list[index];
            return numOnIndex;

        }

    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));