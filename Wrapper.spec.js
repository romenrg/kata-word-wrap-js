var Wrapper = require('./Wrapper');
var expect = require('chai').expect;

describe('Wrapper', function () {
    var wrapper = new Wrapper();
    it('should replace the third space with a newline', function() {
        var testString = "This is the first test";
        var maxColumn = 14;
        var expectedResult = "This is the\nfirst test";
        expect(wrapper.wrap(testString, maxColumn)).to.equal(expectedResult);
    });
    it('should do two replacements', function() {
        var testString = "This is the second test, with 3 lines";
        var maxColumn = 14;
        var expectedResult = "This is the\nsecond test,\nwith 3 lines";
        expect(wrapper.wrap(testString, maxColumn)).to.equal(expectedResult);
    })
});