console.log("Code Kata: Word Wrap, by @romenrg");

function Wrapper() {
    this.wrap = function(string, columnNum) {
        var lastBlankPos = null;
        var newString = null;
        for (var i=0; i<columnNum; i++) {
            if (string[i] == ' ') {
                lastBlankPos = i;
            }
        }
        if (lastBlankPos != null) {
            newString = string.substr(0, lastBlankPos) + '\n' + string.substr(lastBlankPos+1, string.length);
        }
        return newString;
    }
}

module.exports = Wrapper;