console.log("Code Kata: Word Wrap, by @romenrg");

function Wrapper() {
    this.wrap = function(string, columnNum) {
        var tmpString = string;
        var newString = "";
        var lastBlankPos = null;
        var finished = false;
        while (!finished) {
            lastBlankPos = null;
            for (var i=0; i<columnNum+1; i++) {
                if (tmpString.length > i) {
                    if (tmpString[i] == ' ') {
                        lastBlankPos = i;
                    }
                }
                else {
                    finished = true;
                }
            }
            if ((!finished) && (lastBlankPos != null)) { //TODO: Be careful with cases in which there are no spaces
                newString = newString.concat(tmpString.substr(0, lastBlankPos) + '\n');
                tmpString = tmpString.substr(lastBlankPos+1, tmpString.length);
            }
            else if (finished) {
                newString = newString.concat(tmpString.substr(0, tmpString.length));
                finished = true;
            }
            else {
                newString = newString.concat(tmpString.substr(0, columnNum) + '\n');
                tmpString = tmpString.substr(columnNum, tmpString.length);
            }
        }
        return newString;
    }
}

module.exports = Wrapper;