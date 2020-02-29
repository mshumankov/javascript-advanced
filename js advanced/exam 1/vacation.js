class Vacation {
    constructor(organizer, destination, budget) {
        this.organizer = organizer;
        this.destination = destination;
        this.budget = budget;
        this.kids = {};
    }

    registerChild(name, grade, budget) {
        if (this.kids.hasOwnProperty(grade)) {
            for (const kid of this.kids[grade]) {
                let [nameKid, budgetKid] = kid.split('-');

                if (nameKid === name) {
                    return `${name} is already in the list for this ${this.destination} vacation.`
                }
            }
            if (budget >= this.budget) {
                this.kids[grade].push(`${name}-${budget}`);
                return this.kids[grade];
            } else {
                return `${name}'s money is not enough to go on vacation to ${this.destination}.`
            }
        } else {
            this.kids[grade] = [];

            if (budget >= this.budget) {
                this.kids[grade].push(`${name}-${budget}`);
                return this.kids[grade];
            } else {
                return `${name}'s money is not enough to go on vacation to ${this.destination}.`
            }
        }
    }

    removeChild(name, grade) {
        if (this.kids.hasOwnProperty(grade)) {
            for (const kid of this.kids[grade]) {
                const [kidName, ] = kid.split('-');

                if (kidName === name) {
                    const index = this.kids[grade].indexOf(kid);
                    this.kids[grade].splice(index, 1);
                    return this.kids[grade];
                }
            }
            return `We couldn't find ${name} in ${grade} grade.`;
        }
        return `We couldn't find ${name} in ${grade} grade.`;
    }

    get numberOfChildren() {
        this._numberOfChildren = 0;

        for (const grade in this.kids) {
            this._numberOfChildren += this.kids[grade].length;
        }

        return this._numberOfChildren;
    }

    toString() {
        if (this.numberOfChildren === 0) {
            return `No children are enrolled for the trip and the organization of ${this.organizer} falls out...`
        } else {
            let result = `${this.organizer} will take ${this.numberOfChildren} children on trip to ${this.destination}\n`;

            for (const grade in this.kids) {
                result += `Grade: ${grade}\n`
                let currentNumber = 1;

                for (let kid of this.kids[grade]) {
                    result += `${currentNumber}. ${kid}\n`
                    currentNumber++;
                }
            }
            return result;
        }
    }
}



let vacation = new Vacation('Miss. Elizabeth', 'The bahamas', 400);

vacation.registerChild('Gosho', 12, 3400);
vacation.registerChild('Pesho', 12, 400);
vacation.registerChild('Pesho', 12, 400);
vacation.registerChild('Skaro', 11, 400);
vacation.registerChild('Gosho', 11, 3444);

let output = vacation.toString();
console.log(output);
console.log(vacation.kids);