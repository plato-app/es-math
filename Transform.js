"use strict";

var objects = prequire("util/objects.js");
var Matrix3 = prequire("./Matrix3.js");

// Temp matrix for translate, scale, rotate calculations
var mat3 = new Matrix3();

var exports = module.exports = function () {
  Matrix3.call(this);
  this.identity();
};

var proto = objects.extend(exports, Matrix3);

proto.clone = function () {
  var transform = new exports();
  transform.set.apply(transform, this.values);
  return transform;
};

proto.translate = function (tx, ty) {
  mat3.set(
    1, 0, 0,
    0, 1, 0,
    tx, ty, 1
  );
  Matrix3.multiply(mat3, this, this);
};

proto.scale = function (sx, sy) {
  mat3.set(
    sx, 0, 0,
    0, sy, 0,
    0, 0, 1
  );
  Matrix3.multiply(mat3, this, this);
};

proto.rotate = function (radians) {
  var s = pmath.sin(radians);
  var c = pmath.cos(radians);
  mat3.set(
    c, s, 0,
    -s, c, 0,
    0, 0, 1
  );
  Matrix3.multiply(mat3, this, this);
};
