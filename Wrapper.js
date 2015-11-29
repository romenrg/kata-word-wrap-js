function Wrapper() {
    this._areParamTypesValidForWrapFunction = function(text, columnNum) {
        return (typeof(text) == "string") && (typeof(columnNum) == "number") && (columnNum > 0);
    };
    this._calculateLastBlankPos = function(text, columnNum) {
        var finished = false;
        var lastBlankPos = null;
        for (var i=0; i<columnNum+1; i++) {
            if (text.length > i) {
                if (text[i] == ' ') {
                    lastBlankPos = i;
                }
            }
            else {
                finished = true;
            }
        }
        return {finished: finished, lastBlankPos: lastBlankPos};
    };
    this.wrap = function(text, columnNum) {
        if (this._areParamTypesValidForWrapFunction(text, columnNum)) {
            var tmpString = text;
            var newString = "";
            var processing = {finished: false, lastBlankPos: null};
            while (!processing.finished) {
                processing = this._calculateLastBlankPos(tmpString, columnNum);
                if ((!processing.finished) && (processing.lastBlankPos != null)) {
                    newString = newString.concat(tmpString.substr(0, processing.lastBlankPos) + '\n');
                    tmpString = tmpString.substr(processing.lastBlankPos+1, tmpString.length);
                }
                else if (processing.finished) {
                    newString = newString.concat(tmpString.substr(0, tmpString.length));
                    processing.finished = true;
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