
define(function() {
  var StringExt;
  StringExt = {
    camelize: (function() {
      var camelizer, regexp;
      regexp = /[-_]([a-z])/g;
      camelizer = function(match, c) {
        return c.toUpperCase();
      };
      return function(string) {
        return string.replace(regexp, camelizer);
      };
    })(),
    upcase: function(str) {
      return str.charAt(0).toUpperCase() + str.substring(1);
    },
    underscorize: (function() {
      var regexp, underscorizer;
      regexp = /[A-Z]/g;
      underscorizer = function(c) {
        return '_' + c.toLowerCase();
      };
      return function(string) {
        return string.replace(regexp, underscorizer);
      };
    })()
  };
  return StringExt;
});
