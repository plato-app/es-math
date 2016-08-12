"use strict";

var math = prequire("math/math.js");
var Vector2 = prequire("math/Vector2.js");

// Scratch objects for inline calculations
var v1 = new Vector2();
var v2 = new Vector2();
var v3 = new Vector2();

exports.testAABBs = function (x1, y1, w1, h1, x2, y2, w2, h2) {
  return (
    x1 < (x2 + w2) &&
    x2 < (x1 + w1) &&
    y1 < (y2 + h2) &&
    y2 < (y1 + h1)
  );
};

exports.testPointCircle = function (x1, y1, x2, y2, r2) {
  return pmath.pow(x1 - x2, 2) + pmath.pow(y1 - y2, 2) < pmath.pow(r2, 2);
};

exports.testPointRect = function (x1, y1, x2, y2, w2, h2) {
  return (
    x1 > x2 &&
    y1 > y2 &&
    x1 < (x2 + w2) &&
    y1 < (y2 + h2));
};

exports.testPointTriangle = function (x1, y1, x2, y2, x3, y3, x4, y4) {
  // Adapted from PolyK: http://polyk.ivank.net/
  // MIT License, Copyright (c) 2012 - 2014 Ivan Kuckir
  v1.set(x4 - x2, y4 - y2);
  v2.set(x3 - x2, y3 - y2);
  v3.set(x1 - x2, y1 - y2);

  var d11 = v1.dot(v1);
  var d12 = v1.dot(v2);
  var d13 = v1.dot(v3);
  var d22 = v2.dot(v2);
  var d23 = v2.dot(v3);

  var i = 1 / (d11 * d22 - d12 * d12);
  var u = (d22 * d13 - d12 * d23) * i;
  var v = (d11 * d23 - d12 * d13) * i;

  return (u >= 0) && (v >= 0) && (u + v < 1);
};

exports.testCircleCircle = function (x1, y1, r1, x2, y2, r2) {
  return math.distance(x1, y1, x2, y2) < r1 + r2;
};

exports.testCircleRectangle = function (cx, cy, cr, rx, ry, rw, rh) {
  var x = math.clamp(cx, rx, rx + rw);
  var y = math.clamp(cy, ry, ry + rh);
  return exports.testPointCircle(x, y, cx, cy, cr);
};

exports.getIntersectionRect = function (a, b) {
  return {
    x: Math.max(a.x, b.x),
    y: Math.max(a.y, b.y),
    width: Math.min(a.x + a.width, b.x + b.width) - Math.max(a.x, b.x),
    height: Math.min(a.y + a.height, b.y + b.height) - Math.max(a.y, b.y)
  };
};

exports.getAABBsMTV = function (a, b) {
  var mtv = new Vector2(0, 0);

  var aw = a.width / 2;
  var ah = a.height / 2;

  var bw = b.width / 2;
  var bh = b.height / 2;

  var tx = (b.x + bw) - (a.x + aw);
  var ty = (b.y + bh) - (a.y + ah);

  var ox = aw + bw - Math.abs(tx);
  var oy = ah + bh - Math.abs(ty);

  if (ox < oy) {
    mtv.x = ox * math.sign(tx);
  } else {
    mtv.y = oy * math.sign(ty);
  }

  return mtv;
};
