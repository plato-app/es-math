/**
 * Math utilities
 * @module math
 * @copyright Plato Team, Inc. 2016
 * @author Geoff Blair <geoff@platoteam.com>
 */
"use strict";

/**
 * TAU is a handy shortcut for 2PI
 * @type {number}
 */
exports.TAU = Math.PI * 2;

/**
 * Compares two numbers for approximate equality
 * @param {number} a Number A
 * @param {number} b Number B
 * @param {number} threshold Equality threshold (defaults to Number.EPSILON)
 * @returns {number}
 */
exports.approximately = function (a, b, threshold) {
  var t = threshold !== undefined ? threshold : Number.EPSILON;
  return Math.abs(a - b) < t;
};

/**
 * Clamps a number between a minimum and maximum
 * @param {number} n Number to be clamped
 * @param {number} min Minimum
 * @param {number} max Maximum
 * @returns {number}
 */
exports.clamp = function (n, min, max) {
  return Math.min(Math.max(n, min), max);
};

/**
 * Calculates the distance between two points
 * @param {number} x1 First X coordinate
 * @param {number} y1 First Y coordinate
 * @param {number} x2 Second X coordinate
 * @param {number} y2 Second Y coordinate
 * @returns {number}
 */
exports.distance = function (x1, y1, x2, y2) {
  return Math.sqrt(pmath.pow(x2 - x1, 2) + pmath.pow(y2 - y1, 2));
};

/**
 * Converts an index to grid X coordinate
 * @param {number} index Index
 * @param {number} width Grid width
 * @returns {number}
 */
exports.indexToX = function (index, width) {
  return index % width;
};

/**
 * Converts an index to grid Y coordinate
 * @param {number} index Index
 * @param {number} width Grid width
 * @returns {number}
 */
exports.indexToY = function (index, width) {
  return Math.floor(index / width);
};

/**
 * Linear interpolation between two numbers
 * @param {number} a Number A
 * @param {number} b Number B
 * @param {number} t Normalized time (between 0 - 1)
 * @param {boolean} round Rounds return value
 * @returns {number}
 */
exports.lerp = function (a, b, t, round) {
  var v = a + ((b - a) * t);
  return round ? Math.round(v) : v;
};

/**
 * Returns the mid value between two numbers
 * @param {number} a Number A
 * @param {number} b Number B
 * @returns {number}
 */
exports.mid = function (a, b) {
  return Math.round((a + b) / 2);
};

/**
 * Normalizes a value between a minimum and maximum
 * @param {number} n Value to normalize
 * @param {number} min Minimum
 * @param {number} max Maximum
 * @returns {number}
 */
exports.normalize = function (n, min, max) {
  return (n - min) / (max - min);
};

/**
 * Rounds a value to a specified number of decimal places
 * @param {number} value Value to round
 * @param {number} decimals Number of decimal places to round
 * @returns {number}
 */
exports.round = function (value, decimals) {
  var mod = pmath.pow(10, decimals);
  return Math.round(value * mod) / mod;
};

/**
 * Returns the sign of a number
 * @param {number} n Number
 * @returns {number}
 */
exports.sign = function (n) {
  return n > 0 ? 1 : n === 0 ? 0 : -1;
};

/**
 * Converts grid coordinates to an index
 * @param {number} x X coordinate
 * @param {number} y Y coordinate
 * @param {number} width Grid width
 * @returns {number}
 */
exports.xyToIndex = function (x, y, width) {
  return y * width + x;
};
