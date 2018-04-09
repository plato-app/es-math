/**
 * TAU is a handy shortcut for 2PI
 * @type {number}
 * @since 1.2.1
 */
export const TAU = Math.PI * 2;

/**
 * Compares two numbers for approximate equality
 * @param {number} a Number A
 * @param {number} b Number B
 * @param {number} threshold Equality threshold (defaults to Number.EPSILON)
 * @returns {boolean} Whether a is approximately equal to b
 * @since 1.2.1
 */
export function approximately(a: number, b: number, threshold = Number.EPSILON): boolean {
	return Math.abs(a - b) < threshold;
}

/**
 * Returns the average of an array of numbers
 * @since 3.1.0
 */
export function average(numbers: number[]): number {
	const total = numbers.reduce((a, b) => a + b, 0);
	return total / numbers.length;
}

/**
 * Clamps a number between a minimum and maximum
 * @param {number} n Number to be clamped
 * @param {number} min Minimum
 * @param {number} max Maximum
 * @returns {number} Clamped value of n
 * @since 1.2.1
 */
export function clamp(n: number, min: number, max: number): number {
	return Math.min(Math.max(n, min), max);
}

/**
 * Calculates the distance between two points
 * @param {number} x1 First X coordinate
 * @param {number} y1 First Y coordinate
 * @param {number} x2 Second X coordinate
 * @param {number} y2 Second Y coordinate
 * @returns {number} Distance between x1, y1 and x2, y2
 * @since 1.2.1
 */
export function distance(x1: number, y1: number, x2: number, y2: number): number {
	return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

/**
 * Converts an index to grid X coordinate
 * @param {number} index Index
 * @param {number} width Grid width
 * @returns {number} X coordinate for index
 * @since 1.2.1
 */
export function indexToX(index: number, width: number): number {
	return index % width;
}

/**
 * Converts an index to grid Y coordinate
 * @param {number} index Index
 * @param {number} width Grid width
 * @returns {number} Y coordinate for index
 * @since 1.2.1
 */
export function indexToY(index: number, width: number): number {
	return Math.floor(index / width);
}

/**
 * Linear interpolation between two numbers
 * @param {number} a Number A
 * @param {number} b Number B
 * @param {number} t Normalized time (between 0 - 1)
 * @param {boolean} roundResult Rounds return value
 * @returns {number} Interpolated value between a and b
 * @since 1.2.1
 */
export function lerp(a: number, b: number, t: number, roundResult = false): number {
	let v = a + ((b - a) * t);
	return roundResult ? Math.round(v) : v;
}

/**
 * Linear interpolation between two angles via shortest angle
 */
export function lerpAngle(a: number, b: number, t: number): number {
	const da = (b - a) % TAU;
	const n = 2 * da % TAU - da;
	return a + n * t;
}

/**
 * Returns the mid value between two numbers
 * @param {number} a Number A
 * @param {number} b Number B
 * @returns {number} Mid value between a and b
 * @since 1.2.1
 */
export function mid(a: number, b: number): number {
	return Math.round((a + b) / 2);
}

/**
 * Normalizes a value between a minimum and maximum
 * @param {number} n Value to normalize
 * @param {number} min Minimum
 * @param {number} max Maximum
 * @returns {number} Normalized value of n, between min and max
 * @since 1.2.1
 */
export function normalize(n: number, min: number, max: number): number {
	return (n - min) / (max - min);
}

/**
 * Rounds a value to a specified number of decimal places
 * @param {number} value Value to round
 * @param {number} decimals Number of decimal places to round
 * @returns {number} Rounded value of value
 * @since 1.2.1
 */
export function round(value: number, decimals = 0): number {
	let mod = Math.pow(10, decimals);
	return Math.round(value * mod) / mod;
}

/**
 * Returns the sign of a number
 * @param {number} n Number
 * @returns {number} Sign of n, -1, 0, or 1
 * @since 1.2.1
 */
export function sign(n: number): number {
	return n > 0 ? 1 : n === 0 ? 0 : -1;
}

/**
 * Converts grid coordinates to an index
 * @param {number} x X coordinate
 * @param {number} y Y coordinate
 * @param {number} width Grid width
 * @returns {number} Index value of x, y
 * @since 1.2.1
 */
export function xyToIndex(x: number, y: number, width: number): number {
	return y * width + x;
}
