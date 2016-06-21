exports.clamp = function (n, min, max) {
  return Math.min(Math.max(n, min), max);
};

exports.lerp = function (a, b, t, round) {
  var v = a + ((b - a) * t);
  return round ? Math.round(v) : v;
};

exports.normalize = function (n, min, max) {
  return (n - min) / (max - min);
};

exports.pointInCircle = function (px, py, cx, cy, cr) {
  return Math.pow(px - cx, 2) + Math.pow(py - cy, 2) < Math.pow(cr, 2);
};

exports.distance = function (x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
};
