(function () {
"use strict";

exports.approximately = function (a, b) {
  return Math.abs(a - b) < Number.EPSILON;
};

exports.clamp = function (n, min, max) {
  return Math.min(Math.max(n, min), max);
};

exports.distance = function (x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
};

exports.lerp = function (a, b, t, round) {
  var v = a + ((b - a) * t);
  return round ? Math.round(v) : v;
};

exports.normalize = function (n, min, max) {
  return (n - min) / (max - min);
};

})();
