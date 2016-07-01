(function () {
"use strict";

var Vector2 = exports.ctor = function (x, y) {
  this.x = x;
  this.y = y;
};

var proto = Vector2.prototype;

proto.set = function (x, y) {
  this.x = x;
  this.y = y;
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

Object.defineProperty(proto, "magnitude", {
  get: function () {
    return Vector2.magnitude(this.x, this.y);
  }
});

Object.defineProperty(proto, "angle", {
  get: function () {
    return Vector2.angle(this.x, this.y);
  }
});

Vector2.magnitude = function (x, y) {
  return Math.sqrt(x * x + y * y);
};

Vector2.angle = function (x, y) {
  return Math.atan2(y, x);
};

})();
