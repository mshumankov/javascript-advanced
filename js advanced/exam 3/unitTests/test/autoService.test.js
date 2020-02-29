const expect = require('chai').expect;
const AutoService = require('../02. Auto Service');

describe('AutoService', () => {
    let myInstance;

    beforeEach(function () {
        myInstance = new AutoService(2);
    });

    it('Expect myInstance = new AutoService(10) to be equal to myInstance.garageCapacity = 2', () => {
        const expected = 2;
        const actual = myInstance.garageCapacity;
        expect(actual).to.be.equal(expected);
    });

    it('Expect myInstance.workInProgress to be equal to []', () => {
        const expected = [];
        const actual = myInstance.workInProgress;
        expect(actual).to.deep.equal(expected);
    });

    it('Expect myInstance.backlogWork to be equal to []', () => {
        const expected = [];
        const actual = myInstance.backlogWork;
        expect(actual).to.deep.equal(expected);
    });

    it('Expect myInstance.availableSpace to be equal to []', () => {
        myInstance.workInProgress.push(1);
        const expected = 1;
        const actual = myInstance.availableSpace;
        expect(actual).to.deep.equal(expected);
    });

    it("Expect .signUpForReview('Peter', 'CA1234CA', {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken'}); to be equal to workInProgress {clientName: 'Peter', plateNumber: 'CA1234CA', carInfo: {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken'}}", () => {
        myInstance.signUpForReview('Peter', 'CA1234CA', {
            'engine': 'MFRGG23',
            'transmission': 'FF4418ZZ',
            'doors': 'broken'
        });
        const expected = {
            clientName: 'Peter',
            plateNumber: 'CA1234CA',
            carInfo: {
                'engine': 'MFRGG23',
                'transmission': 'FF4418ZZ',
                'doors': 'broken'
            }
        };
        const actual = myInstance.workInProgress[0];
        expect(actual).to.deep.equal(expected);
    });

    it("Expect .signUpForReview('Peter', 'CA1234CA', {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken'}); to be equal to backlogWork {clientName: 'Peter', plateNumber: 'CA1234CA', carInfo: {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken'}}", () => {
        myInstance.workInProgress.push(1);
        myInstance.workInProgress.push(1);
        myInstance.signUpForReview('Peter', 'CA1234CA', {
            'engine': 'MFRGG23',
            'transmission': 'FF4418ZZ',
            'doors': 'broken'
        });
        const expected = {
            clientName: 'Peter',
            plateNumber: 'CA1234CA',
            carInfo: {
                'engine': 'MFRGG23',
                'transmission': 'FF4418ZZ',
                'doors': 'broken'
            }
        };
        const actual = myInstance.backlogWork[0];
        expect(actual).to.deep.equal(expected);
    });

    it("Expect myInstance.carInfo('CA1234CA', 'Peter'  to be equal to workInProgress {clientName: 'Peter', plateNumber: 'CA1234CA', carInfo: {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken'}}", () => {
        myInstance.signUpForReview('Peter', 'CA1234CA', {
            'engine': 'MFRGG23',
            'transmission': 'FF4418ZZ',
            'doors': 'broken'
        });
        const expected = {
            clientName: 'Peter',
            plateNumber: 'CA1234CA',
            carInfo: {
                'engine': 'MFRGG23',
                'transmission': 'FF4418ZZ',
                'doors': 'broken'
            }
        };
        const actual = myInstance.carInfo('CA1234CA', 'Peter');
        expect(actual).to.deep.equal(expected);
    });

    it("Expect myInstance.carInfo('CA1234CA', 'Peter')  to be equal to 'There is no car with platenumber CA1234CA and owner Peter.'", () => {
        const expected = 'There is no car with platenumber CA1234CA and owner Peter.';
        const actual = myInstance.carInfo('CA1234CA', 'Peter');
        expect(actual).to.deep.equal(expected);
    });

    it("Expect myInstance.repairCar() to be equal to 'Your doors were repaired.'", () => {
        myInstance.signUpForReview('Peter', 'CA1234CA', {
            'engine': 'MFRGG23',
            'transmission': 'FF4418ZZ',
            'doors': 'broken'
        });
        const expected = 'Your doors were repaired.';
        const actual = myInstance.repairCar();
        expect(actual).to.deep.equal(expected);
    });

    it("Expect myInstance.repairCar() to be equal to 'Your car was fine, nothing was repaired.'", () => {
        myInstance.signUpForReview('Peter', 'CA1234CA', {
            'engine': 'MFRGG23',
            'transmission': 'FF4418ZZ',
            'doors': 'blue'
        });
        const expected = 'Your car was fine, nothing was repaired.';
        const actual = myInstance.repairCar();
        expect(actual).to.deep.equal(expected);
    });

    it("Expect myInstance.repairCar() to be equal to 'No clients, we are just chilling...'", () => {
        const expected = 'No clients, we are just chilling...';
        const actual = myInstance.repairCar();
        expect(actual).to.deep.equal(expected);
    });
});