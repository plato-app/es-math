"use strict";

var math = prequire("math/math.js");
var earcut = prequire("earcut");

var DUPE_VERTEX_EPSILON = 0.00001;

exports.createCircle = function (x, y, radius, sides) {
  var circle = [];
  var step = math.TAU / (sides || 12);
  for (var angle = 0; angle < math.TAU; angle += step) {
    var rx = pmath.cos(angle) * radius;
    var ry = pmath.sin(angle) * radius;
    circle.push([x + rx, y + ry]);
  }
  return circle;
};

exports.flatten = function (poly) {
  var flat = [];
  for (var i = 0; i < poly.length; ++i) {
    flat.push(poly[i][0], poly[i][1]);
  }
  return flat;
};

exports.dedupeVertices = function (poly) {
  for (var i = poly.length - 1; i >= 0; --i) {
    var p1 = poly[i];
    var p2 = i === 0 ? poly[poly.length - 1] : poly[i - 1];
    if (
      math.approximately(p1[0], p2[0], DUPE_VERTEX_EPSILON) &&
      math.approximately(p1[1], p2[1], DUPE_VERTEX_EPSILON)
    ) {
      plato.log("polygon.dedupeVertices: Removing dupe vertex: " + i);
      poly.splice(i, 1);
    }
  }
};

exports.triangulate = function (poly) {
  // Earcut returns triangulation info (result) as a list of indices
  // mapping to the original polygon points (poly), so we need to
  // convert them back to polygon points
  var tris = earcut(poly);
  var result = [];
  for (var i = 0, j = tris.length; i < j; ++i) {
    var offset = tris[i] * 2;
    result.push(
      poly[offset + 0],
      poly[offset + 1]);
  }
  return result;
};
