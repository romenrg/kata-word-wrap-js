# kata-word-wrap-js
Designing my own solution (in JS) to the Word-Wrap code kata.

## Description

From the [original Article by Robert Martin](http://thecleancoder.blogspot.com.es/2010/10/craftsman-62-dark-path.html):

"The basic premise is really simple.  You write a class called Wrapper, that has a single static function named wrap that takes two arguments, a string, and a column number.  The function returns the string, but with line breaks inserted at just the right places to make sure that no line is longer than the column number.  You try to break lines at word boundaries."

"[...] like a word processor [...].  You break the line by replacing the last space in a line with a newline."

## Running the program and tests

### Running the program
 * Executing node as *"node Wrapper"*
 * or, with npm as **"npm start"**

### Running the tests
 * Executing mocha as "./node_modules/mocha/bin/mocha Wrapper.spec.js"
 * or, with npm as **"npm test"**