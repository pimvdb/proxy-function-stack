proxy-function-stack
===

proxy-function-stack is a library using ES Harmony proxies. It enables you to
write functions such as mapping ones easier - no more verbose stuff like:

    arr.map(function(x) { return x.foo().bar(); });

... but just:

    arr.map( pst.foo().bar() );

Requirements
===

Works with V8 3.8.8 (node 0.7.1).

Usage
===

var pst = require("./proxy-function-stack"); // depending on where you put the file

// Now you can use it like the example below shows

Example
===

Consider the following variables:

    var arr = ["foo", "Bar", "some_123_thing"],

        rdigit = /\d/g,

        multiply = function(x) {
          return x * 3;
        };

Old
---

    var mapped = arr.map(function(element) {
      return element.toUpperCase()
                    .slice(0, -1)
                    .replace(rdigit, multiply);
    });

New
---

    var mapped = arr.map( pst.toUpperCase()
                             .slice(0, -1)
                             .replace(rdigit, multiply) );

Result
---

    ["FO", "BA", "SOME_369_THIN"]
