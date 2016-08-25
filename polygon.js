"use strict";
// Some features (such as .triangulate) are
// adapted from PolyK: http://polyk.ivank.net/
// MIT License, Copyright (c) 2012 - 2014 Ivan Kuckir

var collision = prequire("math/collision.js");

var convex = function (x1, y1, x2, y2, x3, y3) {
  return (y1 - y2) * (x3 - x2) + (x2 - x1) * (y3 - y2) >= 0;
};

exports.flatten = function (poly) {
  let flat = [];
  for (let i = 0; i < poly.length; ++i) {
    flat.push(poly[i][0], poly[i][1]);
  }
  return flat;
};

exports.triangulate = function (poly) {
  var n = poly.length >> 1;
  if (n < 3) { return []; }
  var tgs = [];
  var avl = [];

  for (var i = 0; i < n; ++i) {
    avl.push(i);
  }

  var i = 0;
  var al = n;
  while (al > 3) {
    var i0 = avl[(i + 0) % al];
    var i1 = avl[(i + 1) % al];
    var i2 = avl[(i + 2) % al];

    var ax = poly[2 * i0];
    var ay = poly[2 * i0 + 1];

    var bx = poly[2 * i1];
    var by = poly[2 * i1 + 1];

    var cx = poly[2 * i2];
    var cy = poly[2 * i2 + 1];

    var ear = false;

    if (convex(ax, ay, bx, by, cx, cy)) {
      ear = true;
      for (var j = 0; j < al; j++) {
        var vi = avl[j];
        if (vi === i0 || vi === i1 || vi === i2) { continue; }
        if (collision.testPointTriangle(
          poly[2 * vi], poly[2 * vi + 1],
          ax, ay, bx, by, cx, cy
        )) {
          ear = false;
          break;
        }
      }
    }

    if (ear) {
      tgs.push(i0, i1, i2);
      avl.splice((i + 1) % al, 1);
      al--;
      i = 0;
    } else if (i++ > 3 * al) {
      break;
    }
  }

  tgs.push(avl[0], avl[1], avl[2]);
  return tgs;
};
