"use strict";
// A seeded, pseudo-random number generator
// https://en.wikipedia.org/wiki/Linear_congruential_generator

// Same parameters used by glibc
var M = 0x80000000; // modulus, 2^31
var A = 1103515245; // multiplier
var C = 12345; // increment

// Current state
var state = 0;

// Randomizes the current state
var randomize = function () {
  state = Math.floor(Math.random() * (M - 1));
};

// Increments state and returns normalized value
var next = function () {
  state = (A * state + C) % M;
  return state / M;
};

exports.seed = function (value) {
  if (isNaN(value)) {
    randomize();
  } else {
    state = value;
  }
  return state;
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

exports.choice = function (options) {
  var index = exports.integer(options.length - 1);
  return options[index];
};

exports.shuffle = function (items) {
  var len = items.length;
  if (len < 2) { return; }
  for (var i = 0; i < len; ++i) {
    var j = exports.range(i, len - 1);
    var swap = items[i];
    items[i] = items[j];
    items[j] = swap;
  }
};

// Randomize initial seed
exports.seed();
