proxy-function-stack
===

proxy-function-stack is a library built on top of Harmony Proxies. It enables you to write
functions such as mapping ones easier.

Example
===

Consider the following variables:

    var arr = ["foo", "Bar", "some_123_thing"];

    var rdigit = /\d/g;

    var multiply = function(x) {
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

    var mapped = arr.map( _.toUpperCase()
                           .slice(0, -1)
                           .replace(rdigit, multiply) );
