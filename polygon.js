"use strict";

var math = prequire("math/math.js");
var earcut = prequire("earcut");

const TERRAIN_VERTEX_EPSILON = 0.00001;

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

exports.dedupeVertices = function (poly) {
  for (let i = poly.length - 1; i >= 0; --i) {
    let p1 = poly[i];
    let p2 = i === 0 ? poly[poly.length - 1] : poly[i - 1];
    if (
      math.approximately(p1[0], p2[0], TERRAIN_VERTEX_EPSILON) &&
      math.approximately(p1[1], p2[1], TERRAIN_VERTEX_EPSILON)
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
