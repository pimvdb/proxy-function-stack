var _ = (function() {

  var stackFactory = function(firstName) {
    var stack = [];

    var genPushStack = function(name) {
      return function() {
        stack.push({
          f: name,
          a: arguments
        });

        return Proxy.createFunction({
          get: function(receiver, name) {
            return genPushStack(name);
          }
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

    return genPushStack(firstName);
  }

  return Proxy.create({
    get: function(receiver, name) {
      return stackFactory(name);
    }
  });

})();
