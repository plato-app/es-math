"use strict";

exports.TAU = Math.PI * 2;

exports.approximately = function (a, b, threshold) {
  var t = threshold !== undefined ? threshold : Number.EPSILON;
  return Math.abs(a - b) < t;
};

exports.clamp = function (n, min, max) {
  return Math.min(Math.max(n, min), max);
};

exports.distance = function (x1, y1, x2, y2) {
  return Math.sqrt(pmath.pow(x2 - x1, 2) + pmath.pow(y2 - y1, 2));
};

exports.indexToX = function (index, width) {
  return index % width;
};

exports.indexToY = function (index, width) {
  return Math.floor(index / width);
};

exports.lerp = function (a, b, t, round) {
  var v = a + ((b - a) * t);
  return round ? Math.round(v) : v;
};

exports.mid = function (a, b) {
  return Math.round((a + b) / 2);
};

exports.normalize = function (n, min, max) {
  return (n - min) / (max - min);
};

exports.round = function (value, decimals) {
  var mod = pmath.pow(10, decimals);
  return Math.round(value * mod) / mod;
};

exports.sign = function (n) {
  return n > 0 ? 1 : n === 0 ? 0 : -1;
};

exports.xyToIndex = function (x, y, width) {
  return y * width + x;
};
