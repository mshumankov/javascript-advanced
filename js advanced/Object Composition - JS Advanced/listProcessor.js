let list = (function () {
    let collection = [];
    return {
        add(str) {
            collection.push(str);
        },
        remove(str) {
            while (collection.indexOf(str) !== -1) {
                const index = collection.indexOf(str);
                collection.splice(index, 1);
            }
        },
        print() {
            console.log(collection.join(','));
        }
    }
})();

['add hello', 'add again', 'remove hello', 'add again', 'print']

list.add('hello');
list.add('again');
list.remove('hello');
list.add('again');
list.print();