"use strict";

var exports = module.exports = function () {
  this.values = new Float32Array(9);
  this.set.apply(this, arguments);
};

var proto = exports.prototype;

proto.set = function () {
  var v = this.values;
  for (var i = 0, j = arguments.length; i < j; ++i) {
    v[i] = arguments[i];
  }
  return this;
};

proto.identity = function () {
  return this.set(
    1, 0, 0,
    0, 1, 0,
    0, 0, 1
  );
};

proto.clone = function () {
  var mat3 = new exports();
  mat3.set.apply(mat3, this.values);
  return mat3;
};

proto.multiply = function (m) {
  exports.multiply(this, m, this);
  return this;
};

exports.multiply = function (a, b, out) {
  var a = a.values;
  var b = b.values;
  if (!out) { var out = new exports(); }
  var a00 = a[0 * 3 + 0];
  var a01 = a[0 * 3 + 1];
  var a02 = a[0 * 3 + 2];
  var a10 = a[1 * 3 + 0];
  var a11 = a[1 * 3 + 1];
  var a12 = a[1 * 3 + 2];
  var a20 = a[2 * 3 + 0];
  var a21 = a[2 * 3 + 1];
  var a22 = a[2 * 3 + 2];
  var b00 = b[0 * 3 + 0];
  var b01 = b[0 * 3 + 1];
  var b02 = b[0 * 3 + 2];
  var b10 = b[1 * 3 + 0];
  var b11 = b[1 * 3 + 1];
  var b12 = b[1 * 3 + 2];
  var b20 = b[2 * 3 + 0];
  var b21 = b[2 * 3 + 1];
  var b22 = b[2 * 3 + 2];
  out.set(
    a00 * b00 + a01 * b10 + a02 * b20,
    a00 * b01 + a01 * b11 + a02 * b21,
    a00 * b02 + a01 * b12 + a02 * b22,
    a10 * b00 + a11 * b10 + a12 * b20,
    a10 * b01 + a11 * b11 + a12 * b21,
    a10 * b02 + a11 * b12 + a12 * b22,
    a20 * b00 + a21 * b10 + a22 * b20,
    a20 * b01 + a21 * b11 + a22 * b21,
    a20 * b02 + a21 * b12 + a22 * b22
  );
};
