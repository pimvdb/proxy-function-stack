var _ = (function() {

  var stackFactory = function(receiver, firstName) {
    var stack = [];

    var genPushStack = function(receiver, name) {
      return function() {
        stack.push({
          f: name,
          a: arguments
        });

        return Proxy.createFunction({
          get: genPushStack
        }, resolve);
      };
    };

    var resolve = function(v) {
      var res = v,
          item;

      for(var i = 0, l = stack.length; item = stack[i], i < l; i++) {
        res = res[item.f].apply(res, item.a);
      }

      return res;
    };

    return genPushStack.apply(this, arguments);
  }

  return Proxy.create({
    get: stackFactory
  });

})();


if(typeof module !== "undefined" && module.exports) {
  module.exports.build = build;
} else if(typeof window !== "undefined") {
  window.build = build;
}
