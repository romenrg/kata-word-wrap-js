var Wrapper = require('./Wrapper');
var expect = require('chai').expect;

describe('Wrapper', function () {
    var wrapper = new Wrapper();
    it('should replace the third space with a newline', function() {
        var testString = "This is the first test";
        var maxColumn = 14;
        var expectedResult = "This is the\nfirst test";
        expect(wrapper.wrap(testString, maxColumn)).to.equal(expectedResult);
    })
});