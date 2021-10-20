const { expect } = require('chai');
const isOddOrEven = require('./EvenOrOdd');

describe('Demo Test', () => {

    it('receive num, not a number', () => {
        expect(isOddOrEven(5)).to.be.undefined;
        expect(isOddOrEven()).to.be.undefined;
        expect(isOddOrEven([])).to.be.undefined;
    })
    it('length is even', () => {
        expect(isOddOrEven("vasi")).to.be.string("even");
    })
    it('length is odd', () => {
        expect(isOddOrEven("vasil")).to.be.string("odd");
    })

});