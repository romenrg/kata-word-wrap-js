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

    this._processingText = function(state, strings, columnNum) {
        if ((!state.finished) && (state.lastBlankPos != null)) {
            strings.finalText = strings.finalText.concat(strings.tmpText.substr(0, state.lastBlankPos) + '\n');
            strings.tmpText = strings.tmpText.substr(state.lastBlankPos + 1, strings.tmpText.length);
        }
        else if (state.finished) {
            strings.finalText = strings.finalText.concat(strings.tmpText.substr(0, strings.tmpText.length));
        }
        else {
            strings.finalText = strings.finalText.concat(strings.tmpText.substr(0, columnNum) + '\n');
            strings.tmpText = strings.tmpText.substr(columnNum, strings.tmpText.length);
        }
        return strings;
    };

    this.wrap = function(text, columnNum) {
        if (this._areParamTypesValidForWrapFunction(text, columnNum)) {
            var strings = {tmpText: text, finalText: ""};
            var state = {finished: false, lastBlankPos: null};
            while (!state.finished) {
                state = this._calculateLastBlankPos(strings.tmpText, columnNum);
                strings = this._processingText(state, strings, columnNum);
            }
            return strings.finalText;
        }
        else {
            return "error";
        }
    }
}

module.exports = Wrapper;