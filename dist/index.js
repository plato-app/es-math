"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TAU = Math.PI * 2;
function approximately(a, b, threshold) {
    if (threshold === void 0) { threshold = Number.EPSILON; }
    return Math.abs(a - b) < threshold;
}
exports.approximately = approximately;
function average(numbers) {
    var total = numbers.reduce(function (a, b) { return a + b; }, 0);
    return total / numbers.length;
}
exports.average = average;
function clamp(n, min, max) {
    return Math.min(Math.max(n, min), max);
}
exports.clamp = clamp;
function distance(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}
exports.distance = distance;
function indexToX(index, width) {
    return index % width;
}
exports.indexToX = indexToX;
function indexToY(index, width) {
    return Math.floor(index / width);
}
exports.indexToY = indexToY;
function lerp(a, b, t, roundResult) {
    if (roundResult === void 0) { roundResult = false; }
    var v = a + ((b - a) * t);
    return roundResult ? Math.round(v) : v;
}
exports.lerp = lerp;
function mid(a, b) {
    return Math.round((a + b) / 2);
}
exports.mid = mid;
function normalize(n, min, max) {
    return (n - min) / (max - min);
}
exports.normalize = normalize;
function round(value, decimals) {
    if (decimals === void 0) { decimals = 0; }
    var mod = Math.pow(10, decimals);
    return Math.round(value * mod) / mod;
}
exports.round = round;
function sign(n) {
    return n > 0 ? 1 : n === 0 ? 0 : -1;
}
exports.sign = sign;
function xyToIndex(x, y, width) {
    return y * width + x;
}
exports.xyToIndex = xyToIndex;
