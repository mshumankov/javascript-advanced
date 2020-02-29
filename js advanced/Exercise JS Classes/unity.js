class Rat {
    constructor(name) {
        this.name = name;
        this.uniteRats = [];
    }

    unite(otherRat) {
        if (otherRat instanceof Rat) {
            this.uniteRats.push(otherRat);
        }
    }

    getRats() {
        return this.uniteRats;
    }

    toString() {
        let output = '';
        output = `${this.name}\n`


        if (this.uniteRats.length > 0) {
            for (let rat of this.uniteRats) {
                output += `##${rat.name}\n`;
            }
        }
        return output;
    }
}

let firstRat = new Rat("Peter");
console.log(firstRat.toString()); // Peter

console.log(firstRat.getRats()); // []

firstRat.unite(new Rat("George"));
firstRat.unite(new Rat("Alex"));
console.log(firstRat.getRats());
// [ Rat { name: 'George', unitedRats: [] },
//  Rat { name: 'Alex', unitedRats: [] } ]

console.log(firstRat.toString());
// Peter
// ##George
// ##Alex