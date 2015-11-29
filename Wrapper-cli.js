var Wrapper = require('./Wrapper');

console.log("---------------------------------");
console.log("Code Kata: Word Wrap, by @romenrg");
console.log("---------------------------------");
var argv = process.argv.slice(2);
var errorMessage = "ERROR: First argument should be 'text to process' and second 'number of columns'";
if (argv.length == 2) {
    var result = Wrapper.wrap(argv[0], parseInt(argv[1]));
    if (result == "error") {
        console.log(errorMessage);
    }
    else {
        console.log(result);
    }
}
else {
    console.log(errorMessage);
}