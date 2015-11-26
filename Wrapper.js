console.log("Code Kata: Word Wrap, by @romenrg");

function Wrapper() {
    this.wrap = function(string, columnNum) {
        var tmpString = string;
        var newString = "";
        var lastBlankPos = null;
        var finished = false;
        while (!finished) {
            console.log("tmp is: "+tmpString);
            lastBlankPos = null;
            for (var i=0; i<columnNum; i++) {
                if (tmpString.length > i) {
                    if (tmpString[i] == ' ') {
                        lastBlankPos = i;
                    }
                }
                else {
                    finished = true;
                }
            }
            if ((lastBlankPos != null) && (!finished)) { //TODO: Be careful with cases in which there are no spaces
                newString = newString.concat(tmpString.substr(0, lastBlankPos) + '\n');
                tmpString = tmpString.substr(lastBlankPos+1, tmpString.length);
            }
            else {
                newString = newString.concat(tmpString.substr(0, tmpString.length));
            }
        }
        return newString;
    }
}

module.exports = Wrapper;