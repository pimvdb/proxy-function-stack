(function(Proxy) {
  function createStackAndAddFirst(receiver, firstName) {
    var stack = [];

    function addToStack(receiver, name) {
      return function() {
        stack.push({
          func: name,
          args: arguments
        });

        return Proxy.createFunction({
          get: addToStack
        }, resolve);
      };
    };

    function resolve(v) {
      var res = v,
          current;

      for(var i = 0, l = stack.length; current = stack[i]; i++) {
        res = res[current.func].apply(res, current.args);
      }

      return res;
    };

    return addToStack.apply(this, arguments);
  }

  function identity(v) {
    return v;
  }

  var pst = Proxy.createFunction({
    get: createStackAndAddFirst
  }, identity); // return value directly without a stack

  if(typeof module !== "undefined" && module.exports) {
    module.exports = pst;
  } else if(typeof window !== "undefined") {
    window.pst = pst;
  }
})(Proxy);
