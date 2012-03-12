var pst = require("./proxy-function-stack"),

    arr = ["foo", "Bar", "some_123_thing"],

    rdigit = /\d/g,

    multiply = function(x) {
      return x * 3;
    },

    mapped = arr.map( pst.toUpperCase()
                         .slice(0, -1)
                         .replace(rdigit, multiply) );

console.log(mapped);
console.log([1, 2, 3].map(pst));
