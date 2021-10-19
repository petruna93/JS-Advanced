const { expect } = require('chai');
const sum = require('./sum');

describe('Demo Test', () => {
    it('return correct sum', () => {
        expect(sum([1])).equal(1);
    });
    it('sum multiple numbers', () => {
        expect(sum([1, 1])).equal(2);
    });
    it('return diffrent numbers', () => {
        expect(sum([2, 3, 4])).equal(9);
    });
});