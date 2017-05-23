/**
 * A seeded, pseudo-random number generator
 * @module math/Random
 * @copyright Plato Team, Inc. 2016
 * @author Geoff Blair <geoff@platoteam.com>
 */
"use strict";

// See: https://en.wikipedia.org/wiki/Linear_congruential_generator
var M = 0x80000000; // modulus, 2^31
var A = 48271; // multiplier
var C = 0; // increment

/**
 * Random constructor
 * @constructor
 * @since 1.2.1
 */
var Random = function () {
	this._state = 0;
	this._randomizeSeed();
};

/**
 * Seed value
 * @type {number}
 * @since 1.2.1
 */
Object.defineProperty(Random.prototype, "seed", {
	get: function () {
		return this._state;
	},
	set: function (value) {
		this._state = value;
	}
});

/**
 * Returns a normalized random value, i.e. between 0 and 1
 * @returns {number} Normalized random value
 * @since 1.2.1
 */
Random.prototype.normal = function () {
	return this._next();
};

/**
 * Returns a random value between min and max
 * @param {number} min Minimum value
 * @param {number} max Maximum value
 * @returns {number} Random value between min and max
 * @since 1.2.1
 */
Random.prototype.range = function (min, max) {
	return this._next() * (max - min) + min;
};

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * @param {number} min Minimum integer
 * @param {number} max Maximum integer
 * @returns {number} Random integer between min and max
 * @since 2.0.0
 */
Random.prototype.rangeInt = function (min, max) {
	return Math.floor(this.range(0, max - min + 1) + min);
};

/**
 * Returns true if a randomized normal is within a percentage chance
 * @param {number} chance Percentage chance in decimal form, e.g. 0.3 = 30% chance
 * @returns {boolean} Whether chance succeeded or not
 * @since 1.2.1
 */
Random.prototype.chance = function (chance) {
	return this._next() < chance;
};

/**
 * Returns a random pick from an array of options
 * @param {Array} options Array of options from which to choose
 * @returns {*} Chosen item
 * @since 1.2.1
 */
Random.prototype.choice = function (options) {
	var index = this.rangeInt(0, options.length - 1);
	return options[index];
};

/**
 * Shuffles an array in-place using Fisher-Yates algorithm
 * @param {Array} items Array of items to shuffle
 * @returns {undefined}
 * @since 1.2.1
 */
Random.prototype.shuffle = function (items) {
	var len = items.length;
	if (len < 2) { return; }
	for (var i = 0; i < len; ++i) {
		var j = this.rangeInt(i, len - 1);
		var swap = items[i];
		items[i] = items[j];
		items[j] = swap;
	}
};

/**
 * Returns the next psuedo-random value
 * @returns {number} Next state
 * @private
 * @since 1.2.1
 */
Random.prototype._next = function () {
	this._state = (A * this._state + C) % M;
	return this._state / M;
};

/**
 * Randomizes this PRNG's state value
 * @returns {undefined}
 * @private
 * @since 1.2.1
 */
Random.prototype._randomizeSeed = function () {
	this._state = Math.floor(Math.random() * (M - 1));
};

module.exports = Random;
