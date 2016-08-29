"use strict";

var math = prequire("math/math.js");
var earcut = prequire("earcut");

exports.createCircle = function (x, y, radius, sides) {
  let circle = [];
  let step = math.TAU / (sides || 12);
  for (let angle = 0; angle < math.TAU; angle += step) {
    let rx = pmath.cos(angle) * radius;
    let ry = pmath.sin(angle) * radius;
    circle.push([x + rx, y + ry]);
  }
  return circle;
};

exports.flatten = function (poly) {
  let flat = [];
  for (let i = 0; i < poly.length; ++i) {
    flat.push(poly[i][0], poly[i][1]);
  }
  return flat;
};

exports.triangulate = function (poly) {
  // Earcut returns triangulation info (result) as a list of indices
  // mapping to the original polygon points (poly), so we need to
  // convert them back to polygon points
  let tris = earcut(poly);
  let result = [];
  for (let i = 0, j = tris.length; i < j; ++i) {
    var offset = tris[i] * 2;
    result.push(
      poly[offset + 0],
      poly[offset + 1]);
    // result[i * 2 + 0] = poly[o + 0];
    // result[i * 2 + 1] = poly[o + 1];
  }
  return result;
};
