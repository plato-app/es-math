// A seeded, pseudo-random number generator
// https://en.wikipedia.org/wiki/Linear_congruential_generator

// Same parameters used by glibc
var m = 0x80000000; // modulus, 2^31
var a = 1103515245; // multiplier
var c = 12345; // increment

// Randomize initial seed
var state = Math.floor(Math.random() * (m - 1));

var next = function () {
  state = (a * state + c) % m;
  return state / m;
};

exports.seed = function (value) {
  state = value;
};

exports.getSeed = function () {
  return state;
};

exports.normal = function () {
  return next();
};

exports.integer = function (max) {
  return Math.round(next() * max);
};

exports.range = function (min, max, round) {
  var value = Math.round(next() * (max - min) + min);
  return round ? Math.round(value) : value;
};

exports.chance = function (chance) {
  return next() < chance;
};
