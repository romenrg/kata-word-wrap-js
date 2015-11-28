var Wrapper = require('./Wrapper');
var expect = require('chai').expect;

describe('Wrapper Specs', function () {
    var wrapper = new Wrapper();
    var maxColumn = 14;
    it('should replace the third space with a newline', function() {
        var testString = "This is the first test";
        var expectedResult = "This is the\nfirst test";
        expect(wrapper.wrap(testString, maxColumn)).to.equal(expectedResult);
    });
    it('should do two replacements', function() {
        var testString = "This is the second test, with 3 lines";
        var expectedResult = "This is the\nsecond test,\nwith 3 lines";
        expect(wrapper.wrap(testString, maxColumn)).to.equal(expectedResult);
    });
    it('should not be any replacements because it is too small', function() {
        var testString = "I'm too small";
        var expectedResult = "I'm too small";
        expect(wrapper.wrap(testString, maxColumn)).to.equal(expectedResult);
    });
    it('should split the word at maxColumn, since there are no spaces', function() {
        var testString = "Honorificabilitudinitatibus";
        var expectedResult = "Honorificabili\ntudinitatibus";
        expect(wrapper.wrap(testString, maxColumn)).to.equal(expectedResult);
    });
    it('should replace having an space exactly in the boundary', function() {
        var testString = "This is their favourite, with 3 lines";
        var expectedResult = "This is their\nfavourite,\nwith 3 lines";
        expect(wrapper.wrap(testString, maxColumn)).to.equal(expectedResult);
    });
    it('should replace having an space exactly after the boundary', function() {
        var testString = "These are your favourites, with 3 lines";
        var expectedResult = "These are your\nfavourites,\nwith 3 lines";
        expect(wrapper.wrap(testString, maxColumn)).to.equal(expectedResult);
    });
    it('should have four lines, being the second longer than maxColumn', function() {
        var testString = "This case is Honorificabilitudinitatibus. For sure.";
        var expectedResult = "This case is\nHonorificabili\ntudinitatibus.\nFor sure.";
        expect(wrapper.wrap(testString, maxColumn)).to.equal(expectedResult);
    });
    it('should keep the short word in the first line, alone', function() {
        var testString = "Very honorificabilitudinitatibus. For sure.";
        var expectedResult = "Very\nhonorificabili\ntudinitatibus.\nFor sure.";
        expect(wrapper.wrap(testString, maxColumn)).to.equal(expectedResult);
    });
    it('should return \'\' in case string is \'\'', function() {
        var testString = "";
        var expectedResult = "";
        expect(wrapper.wrap(testString, maxColumn)).to.equal(expectedResult);
    });
    it('should return \'error\' in case maxColum is 0', function() {
        var maxColumn = 0;
        var testString = "Very honorificabilitudinitatibus. For sure.";
        var expectedResult = "error";
        expect(wrapper.wrap(testString, maxColumn)).to.equal(expectedResult);
    });
    it('should return \'error\' in case maxColum is not a number', function() {
        var maxColumn = "not a number";
        var testString = "Very honorificabilitudinitatibus. For sure.";
        var expectedResult = "error";
        expect(wrapper.wrap(testString, maxColumn)).to.equal(expectedResult);
    });
    it('should return \'error\' in case testString is not a string', function() {
        var maxColumn = 0;
        var testString = 1;
        var expectedResult = "error";
        expect(wrapper.wrap(testString, maxColumn)).to.equal(expectedResult);
    });
});