"use strict";

var exports = module.exports = function (x, y) {
  this.x = x !== undefined ? x : 0;
  this.y = y !== undefined ? y : 0;
};

var proto = exports.prototype;

proto.set = function (x, y) {
  this.x = x;
  this.y = y;
  return this;
};

proto.copy = function (v) {
  this.x = v.x;
  this.y = v.y;
  return this;
};

proto.zero = function () {
  this.x = 0;
  this.y = 0;
  return this;
};

proto.scale = function (s) {
  this.x *= s;
  this.y *= s;
  return this;
};

proto.add = function (v) {
  this.x += v.x;
  this.y += v.y;
  return this;
};

proto.subtract = function (v) {
  this.x -= v.x;
  this.y -= v.y;
  return this;
};

proto.normalize = function () {
  var m = this.magnitude;
  if (m === 0) {
    return this;
  } else {
    return this.scale(1 / m);
  }
};

proto.reflect = function (normal) {
  return this.subtract(vec2.copy(normal).scale(2 * this.dot(normal)));
};

proto.distance = function (v) {
  return exports.distance(this.x, this.y, v.x, v.y);
};

proto.dot = function (v) {
  return exports.dot(this.x, this.y, v.x, v.y);
};

proto.angleBetween = function (v) {
  return exports.angleBetween(this.x, this.y, v.x, v.y);
};

Object.defineProperty(proto, "magnitude", {
  get: function () {
    return exports.magnitude(this.x, this.y);
  }
});

Object.defineProperty(proto, "angle", {
  get: function () {
    return exports.angle(this.x, this.y);
  }
});

exports.magnitude = function (x, y) {
  return Math.sqrt(x * x + y * y);
};

exports.angle = function (x, y) {
  return pmath.atan2(y, x);
};

exports.distance = function (x1, y1, x2, y2) {
  return Math.sqrt(pmath.pow(x2 - x1, 2) + pmath.pow(y2 - y1, 2));
};

exports.dot = function (x1, y1, x2, y2) {
  return x1 * x2 + y1 * y2;
};

exports.angleBetween = function (x1, y1, x2, y2) {
  var dot = exports.dot(x1, y1, x2, y2);
  var m1 = exports.magnitude(x1, y1);
  var m2 = exports.magnitude(x2, y2);
  return pmath.acos(dot / (m1 * m2));
};

// Scratch Vector2 for inline calculations
// Defined at the bottom so that all prototype methods are in place
var vec2 = new exports();
