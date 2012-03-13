proxy-function-stack
===

**proxy-function-stack** (`pst`) is a library using ES Harmony proxies. It
enables you to write functions such as mapping ones easier - no more verbose
stuff like:

    arr.map(function(item) {
      return item.foo().bar();
    });

... but just:

    arr.map( pst.foo().bar() );

Install
===

    npm install pst

Requirements
===

Works with V8 3.8.8 (node 0.7.1). **Make sure to run with the
`--harmony_proxies` flag!**

Usage
===

    var pst = require("pst");

    // now you can use it like in the example below

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
