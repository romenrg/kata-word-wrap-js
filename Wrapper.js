function Wrapper() {
    this._areParamTypesValidForWrapFunction = function(text, columnNum) {
        return (typeof(text) == "string") && (typeof(columnNum) == "number") && (columnNum > 0);
    };
    this.wrap = function(text, columnNum) {
        if (this._areParamTypesValidForWrapFunction(text, columnNum)) {
            var tmpString = text;
            var newString = "";
            var finished = false;
            while (!finished) {
                var lastBlankPos = null;
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
                if ((!finished) && (lastBlankPos != null)) {
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
        else {
            return "error";
        }
    }
}

module.exports = Wrapper;