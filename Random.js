/**
 * A seeded, pseudo-random number generator
 * @module math/Random
 * @copyright Plato Team, Inc. 2016
 * @author Geoff Blair <geoff@platoteam.com>
 */
"use strict";

// See: https://en.wikipedia.org/wiki/Linear_congruential_generator
// Same parameters used by glibc
var M = 0x80000000; // modulus, 2^31
var A = 1103515245; // multiplier
var C = 12345; // increment

/**
 * Constructs a new PRNG object
 * @class
 * @constructor
 */
var exports = module.exports = function () {
  this._state = 0;
  this._randomizeSeed();
};

var proto = exports.prototype;

/**
 * Randomizes this PRNG's state value
 * @function _randomizeSeed
 * @protected
 */
proto._randomizeSeed = function () {
  this._state = Math.floor(Math.random() * (M - 1));
};

/**
 * Returns the next psuedo-random value
 * @function _next
 * @protected
 */
proto._next = function () {
  this._state = (A * this._state + C) % M;
  return this._state / M;
};

/**
 * Returns a normalized random value, i.e. between 0 and 1,
 * @function normal
 * @public
 * @returns {number} Normalized random value
 */
proto.normal = function () {
  return this._next();
};

/**
 * Returns a random integer value between 0 and max (inclusive)
 * @function integer
 * @public
 * @param {number} max Maximum integer value
 * @returns {number} Random integer
 */
proto.integer = function (max) {
  return Math.round(this._next() * max);
};

/**
 * Returns a random value between min and max, optionally rounded
 * @function range
 * @public
 * @param {number} min Minimum value
 * @param {number} max Maximum value
 * @param {boolean} round Whether to round the result, optional
 * @returns {number} Random value
 */
proto.range = function (min, max, round) {
  var value = Math.round(this._next() * (max - min) + min);
  return round ? Math.round(value) : value;
};

/**
 * Returns true if a randomized normal is within a percentage chance
 * @function chance
 * @public
 * @param {number} chance Percentage chance in decimal form, e.g. 0.3 = 30% chance
 * @returns {boolean}
 */
proto.chance = function (chance) {
  return this._next() < chance;
};

/**
 * Returns a random pick from an array of options
 * @function choice
 * @public
 * @param {Array} options Array of options to choose from
 * @returns {any} Chosen item
 */
proto.choice = function (options) {
  var index = this.integer(options.length - 1);
  return options[index];
};

/**
 * Shuffles an array in-place using Fisher-Yates algorithm
 * @function shuffle
 * @public
 * @param {Array} items Array of items to shuffle
 * @returns {void}
 */
proto.shuffle = function (items) {
  var len = items.length;
  if (len < 2) { return; }
  for (var i = 0; i < len; ++i) {
    var j = this.range(i, len - 1);
    var swap = items[i];
    items[i] = items[j];
    items[j] = swap;
  }
};

Object.defineProperty(proto, "seed", {
  get: function () {
    return this._state;
  },
  set: function (value) {
    this._state = value;
  }
});
