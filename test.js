var _ = require("./proxy-function-stack")._,

    arr = ["foo", "Bar", "some_123_thing"],

    rdigit = /\d/g,

    multiply = function(x) {
      return x * 3;
    },

    mapped = arr.map( _.toUpperCase()
                       .slice(0, -1)
                       .replace(rdigit, multiply) );

console.log(mapped);
