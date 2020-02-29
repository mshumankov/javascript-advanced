function commandProcessor() {
    let str = '';

    return {
        append: (string) => str += string,
        removeStr: (n) => str = str.substr(n),
        removeEnd: (n) => str = str.substr(0, str.length - n),
        print: () => console.log(str)
    }
}
let f = commandProcessor();
f.append('Hello');
f.print();
f.removeStr(1);
f.print();

let g = commandProcessor();
g.append('World');
g.print()