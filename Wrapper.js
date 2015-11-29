var Wrapper = function(text, columnNum) {
    this.text = text;
    this.columnNum = columnNum;
};

Wrapper.prototype._areParamTypesValidForWrapFunction = function() {
    return (typeof(this.text) == "string") && (typeof(this.columnNum) == "number") && (this.columnNum > 0);
};

Wrapper.prototype._calculateLastBlankPos = function(currentText) {
    var finished = false;
    var lastBlankPos = null;
    for (var i=0; i<this.columnNum+1; i++) {
        if (currentText.length > i) {
            if (currentText[i] == ' ') {
                lastBlankPos = i;
            }
        }
        else {
            finished = true;
        }
    }
    return {finished: finished, lastBlankPos: lastBlankPos};
};

Wrapper.prototype._processingText = function(state, strings) {
    if ((!state.finished) && (state.lastBlankPos != null)) {
        strings.finalText = strings.finalText.concat(strings.tmpText.substr(0, state.lastBlankPos) + '\n');
        strings.tmpText = strings.tmpText.substr(state.lastBlankPos + 1, strings.tmpText.length);
    }
    else if (state.finished) {
        strings.finalText = strings.finalText.concat(strings.tmpText.substr(0, strings.tmpText.length));
    }
    else {
        strings.finalText = strings.finalText.concat(strings.tmpText.substr(0, this.columnNum) + '\n');
        strings.tmpText = strings.tmpText.substr(this.columnNum, strings.tmpText.length);
    }
    return strings;
};

Wrapper.wrap = function(text, columnNum) {
    var wrapper = new Wrapper(text, columnNum);
    if (wrapper._areParamTypesValidForWrapFunction()) {
        var strings = {tmpText: wrapper.text, finalText: ""};
        var state = {finished: false, lastBlankPos: null};
        while (!state.finished) {
            state = wrapper._calculateLastBlankPos(strings.tmpText);
            strings = wrapper._processingText(state, strings);
        }
        return strings.finalText;
    }
    else {
        return "error";
    }
};

module.exports = Wrapper;