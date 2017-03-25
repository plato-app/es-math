/**
 * A 3-dimensional matrix
 * @module Matrix3
 * @copyright Plato Team, Inc. 2016
 * @author Geoff Blair <geoff@platoteam.com>
 */
"use strict";

var tmpMat3 = null;
var getTempMat3 = function () {
	if (!tmpMat3) {
		tmpMat3 = new Matrix3();
	}
	return tmpMat3.identity();
};

/**
 * Matrix3 constructor
 * @alias module:Matrix3
 * @class
 * @constructor
 */
var Matrix3 = function () {
	this.values = new Float32Array(9);
	this.set.apply(this, arguments);
};

/**
 * Set the values of this matrix
 * @param {...number} args Matrix values
 * @returns {Matrix3} This matrix
 * @chainable
 */
Matrix3.prototype.set = function () {
	var v = this.values;
	for (var i = 0, j = arguments.length; i < j; ++i) {
		v[i] = arguments[i];
	}
	return this;
};

/**
 * Resets this matrix to identity
 * @returns {Matrix3} This matrix
 * @chainable
 */
Matrix3.prototype.identity = function () {
	return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1);
};

/**
 * Clones this matrix
 * @returns {Matrix3} Cloned matrix
 */
Matrix3.prototype.clone = function () {
	var mat3 = new Matrix3();
	mat3.set.apply(mat3, this.values);
	return mat3;
};

/**
 * Translates this matrix by x, y
 * @param {number} x X coordinate
 * @param {number} y Y coordinate
 * @returns {Matrix3} This matrix
 * @chainable
 */
Matrix3.prototype.translate = function (x, y) {
	var m = this.values;
	var a = m[0];
	var b = m[1];
	var c = m[3];
	var d = m[4];
	var tx = m[2];
	var ty = m[5];
	m[2] = a * x + b * y + tx;
	m[5] = c * x + d * y + ty;
	return this;
};

/**
 * Scales this matrix by sx, sy
 * @param {number} sx X scaling
 * @param {number} sy Y scaling
 * @returns {Matrix3} This matrix
 * @chainable
 */
Matrix3.prototype.scale = function (sx, sy) {
	var m = this.values;
	m[0] *= sx;
	m[1] *= sy;
	m[3] *= sx;
	m[4] *= sy;
	return this;
};

/**
 * Rotates this matrix by radians
 * @param {number} radians Radians by which to rotate
 * @returns {Matrix3} This matrix
 * @chainable
 */
Matrix3.prototype.rotate = function (radians) {
	var s = pmath.sin(radians);
	var c = pmath.cos(radians);
	var m = getTempMat3();
	m.set(c, -s, 0, s, c, 0, 0, 0, 1);
	Matrix3.multiply(this, m, this);
	return this;
};

/**
 * Multiplies this matrix by another
 * @param {Matrix3} m Matrix by which to multiply
 * @returns {Matrix3} This matrix
 * @chainable
 */
Matrix3.prototype.multiply = function (m) {
	exports.multiply(this, m, this);
	return this;
};

/**
 * Transforms a 2D point
 * @param {{x: number, y: number}} point Point to be transformed
 * @returns {undefined}
 */
Matrix3.prototype.transformPoint = function (point) {
	var m = this.values;
	var x = point.x;
	var y = point.y;
	point.x = x * m[0] + y * m[1] + m[2];
	point.y = x * m[3] + y * m[4] + m[5];
};

/**
 * Does an inverse transform on a 2D point (like converting world coords to local space)
 * @param {{x: number, y: number}} point Point to be transformed
 * @returns {undefined}
 */
Matrix3.prototype.inverseTransformPoint = function(point) {
	var m = this.values;
	var id = 1 / (m[0] * m[4] - m[3] * m[1]);
	var x = point.x;
	var y = point.y;
	point.x = m[4] * id * x + -m[1] * id * y + (m[5] * m[1] - m[2] * m[4]) * id;
	point.y = m[0] * id * y + -m[3] * id * x + (-m[5] * m[0] + m[2] * m[3]) * id;
};

/**
 * Multiplies two matrices
 * @param {Matrix3} matA Matrix A
 * @param {Matrix3} matB Matrix B
 * @param {Matrix3} out Destination matrix
 * @returns {undefined}
 */
Matrix3.multiply = function (matA, matB, out) {
	var a = matA.values;
	var b = matB.values;
	var o = out.values;

	var a0 = a[0];
	var a1 = a[1];
	var a2 = a[2];
	var a3 = a[3];
	var a4 = a[4];
	var a5 = a[5];
	var b0 = b[0];
	var b1 = b[1];
	var b2 = b[2];
	var b3 = b[3];
	var b4 = b[4];
	var b5 = b[5];

	o[0] = a0 * b0 + a1 * b3;
	o[1] = a0 * b1 + a1 * b4;
	o[2] = a0 * b2 + a1 * b5 + a2;
	o[3] = a3 * b0 + a4 * b3;
	o[4] = a3 * b1 + a4 * b4;
	o[5] = a3 * b2 + a4 * b5 + a5;
	o[6] = 0;
	o[7] = 0;
	o[8] = 1;
};
