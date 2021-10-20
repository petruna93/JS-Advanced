const { expect } = require('chai');
const rgbToHexColor = require('./RGBToHex');

describe('Demo Test', () => {
    describe('Happy path', () => {
        it('converts white', () => {
            expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
        });
        it('converts black', () => {
            expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');
        });
        it('converts Softuni dark blue to #234465', () => {
            expect(rgbToHexColor(35, 68, 101)).to.equal('#234465');
        });
        it('converts Softuni blue to #234465', () => {
            expect(rgbToHexColor(0, 0, 255)).to.equal('#0000FF');
        });

    });
    describe('Invalid parameters', () => {
        it('returns undefined for missing parameters', () => {
            expect(rgbToHexColor(255)).to.be.undefined;
        });
        it('returns undefined for values out of range', () => {
            expect(rgbToHexColor(-1, -1, -1)).to.be.undefined;
        });
        it('returns undefined for values out of range', () => {
            expect(rgbToHexColor(256, 256, 256)).to.be.undefined;
        });
        it('returns undefined for invalid parameter type', () => {
            expect(rgbToHexColor('0', '0', '0')).to.be.undefined;
            expect(rgbToHexColor('0', 0, 0)).to.be.undefined;
            expect(rgbToHexColor(0, '0', 0)).to.be.undefined;
            expect(rgbToHexColor(0, 0, '0')).to.be.undefined;
        });
    });
});