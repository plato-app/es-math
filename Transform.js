(function () {
"use strict";

var path = typeof plato !== "undefined" ? "./gamelibs/math/" : "./";
var Matrix3 = require(path + "Matrix3.js");

// Temp matrix for translate, scale, rotate calculations
var mat3 = new Matrix3.ctor();

var Transform = exports.ctor = function () {
  Matrix3.ctor.call(this);
  this.identity();
};

Transform.prototype = new Matrix3.ctor();
Transform.prototype.constructor = Transform;

var proto = Transform.prototype;

proto.clone = function () {
  var transform = new Transform();
  transform.set.apply(transform, this.values);
  return transform;
};

proto.translate = function (tx, ty) {
  mat3.set(
    1, 0, 0,
    0, 1, 0,
    tx, ty, 1
  );
  Matrix3.ctor.multiply(mat3, this, this);
};

proto.scale = function (sx, sy) {
  mat3.set(
    sx, 0, 0,
    0, sy, 0,
    0, 0, 1
  );
  Matrix3.ctor.multiply(mat3, this, this);
};

proto.rotate = function (radians) {
  var s = Math.sin(radians);
  var c = Math.cos(radians);
  mat3.set(
    c, s, 0,
    -s, c, 0,
    0, 0, 1
  );
  Matrix3.ctor.multiply(mat3, this, this);
};

})();
