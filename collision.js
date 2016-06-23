(function () {
"use strict";

var path = typeof plato !== "undefined" ? "./gamelibs/math/" : "./";
var math = require(path + "math.js");

exports.testPointCircle = function (x1, y1, x2, y2, r2) {
  return Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2) < Math.pow(r2, 2);
};

exports.testCircleCircle = function (x1, y1, r1, x2, y2, r2) {
  return math.distance(x1, y1, x2, y2) < r1 + r2;
};

})();
