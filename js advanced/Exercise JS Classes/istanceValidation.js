class CheckingAccount {
    _clientId;
    _email;
    _firstName;
    _lastName;

    constructor(clientId, email, firstName, lastName) {
        this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }


    get clientId() {
        return this._clientId;
    }

    set clientId(newId) {
        const pattern = /^\d{6}$/gm;
        const match = newId.match(pattern);

        if (match === null) {
            throw new TypeError('Client ID must be a 6-digit number');
        }
        this._clientId = newId;
    }

    get email() {
        return this._email;
    }

    set email(value) {
        const pattern = /[A-Za-z0-9]+@[A-Za-z]+\.?([A-Za-z]+)?/gm;
        const match = value.match(pattern);

        if (match === null) {
            throw new TypeError('Invalid e-mail');
        }
        this._email = value;
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(value) {
        const pattern = /^[A-Za-z]{3,20}$/gm;
        const match = value.match(pattern);

        if (match === null) {
            throw new TypeError(`First name must contain only Latin characters`);
        }
        this._firstName = value;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(value) {
        const pattern = /^[A-Za-z]{3,20}$/gm;
        const match = value.match(pattern);

        if (match === null) {
            throw new TypeError(`Last name must contain only Latin characters`);
        }
        this._lastName = value;
    }
}

let test = new CheckingAccount('125456', 'iv45an@some.om', 'hhghg', 'gjjj');
test.clientId = "654321";
console.log(test.clientId);