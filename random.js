"use strict";
// A seeded, pseudo-random number generator
// https://en.wikipedia.org/wiki/Linear_congruential_generator

// Same parameters used by glibc
const M = 0x80000000; // modulus, 2^31
const A = 1103515245; // multiplier
const C = 12345; // increment

// Current state
let state = 0;

// Randomizes the current state
let randomize = function () {
  state = Math.floor(Math.random() * (M - 1));
};

// Increments state and returns normalized value
let next = function () {
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
  let index = exports.integer(options.length - 1);
  return options[index];
};

exports.shuffle = function (items) {
  let len = items.length;
  if (len < 2) { return; }
  for (let i = 0; i < len; ++i) {
    let j = exports.range(i, len - 1);
    let swap = items[i];
    items[i] = items[j];
    items[j] = swap;
  }
};

// Randomize initial seed
exports.seed();
