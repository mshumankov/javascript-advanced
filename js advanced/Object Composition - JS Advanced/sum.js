const SELECTORS = {
    NUM1: '#num1',
    NUM2: '#num2',
    RESULT: '#result',
    SUM_BTN: '#sumButton',
    SUBSTRACT_BTN: '#subtractButton'
}

class Calculator {
    constructor() {
        this.num1 = document.querySelector(SELECTORS.NUM1);
        this.num2 = document.querySelector(SELECTORS.NUM2);
        this.result = document.querySelector(SELECTORS.RESULT);
        this.sumBtn = document.querySelector(SELECTORS.SUM_BTN);
        this.substractBtn = document.querySelector(SELECTORS.SUBSTRACT_BTN);

        this._initEvent();
    }

    add() {
        const x = this.num1.value;
        const y = this.num2.value;
        this.result.value = Number(x) + Number(y);
    }

    substract() {
        const x = this.num1.value;
        const y = this.num2.value;
        this.result.value = Number(x) - Number(y);
    }

    _initEvent() {
        this.sumBtn.addEventListener('click', this.add.bind(this));
        this.substractBtn.addEventListener('click', this.substract.bind(this));
    }
}

new Calculator();