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

Object.defineProperty(proto, "angle", {
  get: function () {
    return Math.atan2(this.y, this.x);
  }
});
