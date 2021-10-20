const { expect } = require('chai');
const lookupChar = require('./CharLookup');

describe('Demo Test', () => {
    it('receive wrong string', () => {
        expect(lookupChar(5, 'abv')).to.be.undefined;
        expect(lookupChar([], 'abv')).to.be.undefined;
        expect(lookupChar('abv', 'abv')).to.be.undefined;
        expect(lookupChar(5, 5)).to.be.undefined;
        expect(lookupChar()).to.be.undefined;
        expect(lookupChar('test', '5')).to.be.undefined;
        expect(lookupChar('test', 1.2)).to.be.undefined;
    })

    it('index is incorrect', () => {
        expect(lookupChar('vasi', 6)).to.be.equal('Incorrect index');
        expect(lookupChar('vasi', -2)).to.be.equal('Incorrect index');
    })

    it('index is correct', () => {
        expect(lookupChar('vasi', 2)).to.be.equal('s');
        expect(lookupChar('vasi', 0)).to.be.equal('v');
        expect(lookupChar('vasi', 3)).to.be.equal('i');
    })

});