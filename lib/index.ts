/** Number of radians per degree */
const RadiansPerDegree = Math.PI / 180;

/** Number of degrees per radian */
const DegreesPerRadian = 180 / Math.PI;

/**
 * A point in 2D space
 * @since 3.5.0
 */
export interface IPoint {
	x: number;
	y: number;
}

/**
 * A rectangle in 2D space
 * @since 3.5.0
 */
export interface IRectangle {
	x: number;
	y: number;
	width: number;
	height: number;
}

/**
 * TAU is a handy shortcut for 2PI
 * @since 1.2.1
 */
export const TAU = Math.PI * 2;

/**
 * Compares two numbers for approximate equality
 * @param a Number A
 * @param b Number B
 * @param threshold Equality threshold (defaults to Number.EPSILON)
 * @returns Whether a is approximately equal to b
 * @since 1.2.1
 */
export function approximately(a: number, b: number, threshold = Number.EPSILON): boolean {
	return Math.abs(a - b) < threshold;
}

/**
 * Returns the average of an array of numbers
 * @param numbers Numbers to average
 * @returns Average of given numbers
 * @since 3.1.0
 */
export function average(numbers: number[]): number {
	const total = numbers.reduce((a, b) => a + b, 0);
	return total / numbers.length;
}

/**
 * Clamps a number between a minimum and maximum
 * @param n Number to be clamped
 * @param min Minimum
 * @param max Maximum
 * @returns Clamped value of n
 * @since 1.2.1
 */
export function clamp(n: number, min: number, max: number): number {
	return Math.min(Math.max(n, min), max);
}

/**
 * Converts degrees to radians
 * @param degrees Angle in degrees
 * @returns Angle in radians
 * @since 3.3.0
 */
export function degreesToRadians(degrees: number): number {
	return degrees * RadiansPerDegree;
}

/**
 * Calculates the distance between two points
 * @param x1 First X coordinate
 * @param y1 First Y coordinate
 * @param x2 Second X coordinate
 * @param y2 Second Y coordinate
 * @returns Distance between x1, y1 and x2, y2
 * @since 1.2.1
 */
export function distance(x1: number, y1: number, x2: number, y2: number): number {
	return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

/**
 * Converts an index to grid X coordinate
 * @param index Index
 * @param width Grid width
 * @returns X coordinate for index
 * @since 1.2.1
 */
export function indexToX(index: number, width: number): number {
	return index % width;
}

/**
 * Converts an index to grid Y coordinate
 * @param index Index
 * @param width Grid width
 * @returns Y coordinate for index
 * @since 1.2.1
 */
export function indexToY(index: number, width: number): number {
	return Math.floor(index / width);
}

/**
 * Linear interpolation between two numbers
 * @param a Number A
 * @param b Number B
 * @param t Normalized time (between 0 - 1)
 * @param roundResult Rounds return value
 * @returns Interpolated value between a and b
 * @since 1.2.1
 */
export function lerp(a: number, b: number, t: number, roundResult = false): number {
	const v = a + ((b - a) * t);
	return roundResult ? Math.round(v) : v;
}

/**
 * Linear interpolation between two angles via shortest angle
 * @param a Start angle
 * @param b End angle
 * @param t Normalized time (between 0 - 1)
 * @returns Interpolated angle between a and b
 * @since 3.2.0
 */
export function lerpAngle(a: number, b: number, t: number): number {
	const da = (b - a) % TAU;
	const n = 2 * da % TAU - da;
	return a + n * t;
}

/**
 * Returns the mid value between two numbers
 * @param a Number A
 * @param b Number B
 * @returns Mid value between a and b
 * @since 1.2.1
 */
export function mid(a: number, b: number): number {
	return Math.round((a + b) / 2);
}

/**
 * Normalizes a value between a minimum and maximum
 * @param n Value to normalize
 * @param min Minimum
 * @param max Maximum
 * @returns Normalized value of n, between min and max
 * @since 1.2.1
 */
export function normalize(n: number, min: number, max: number): number {
	return (n - min) / (max - min);
}

/**
 * Converts radians to degrees
 * @param radians Radians
 * @returns Degrees
 * @since 3.4.0
 */
export function radiansToDegrees(radians: number): number {
	return radians * DegreesPerRadian;
}

/**
 * Rounds a value to a specified number of decimal places
 * @param value Value to round
 * @param decimals Number of decimal places to round
 * @returns Rounded value of value
 * @since 1.2.1
 */
export function round(value: number, decimals = 0): number {
	const mod = Math.pow(10, decimals);
	return Math.round(value * mod) / mod;
}

/**
 * Returns the sign of a number
 * @param n Number
 * @returns Sign of n, -1, 0, or 1
 * @since 1.2.1
 */
export function sign(n: number): number {
	return n > 0 ? 1 : n === 0 ? 0 : -1;
}

/**
 * Wrap radians around a complete circle (PI * 2)
 * @param radians Radians to wrap
 * @returns Wrapped radians
 */
export function wrapRadians(radians: number): number {
	return (radians + TAU) % TAU;
}

/**
 * Converts grid coordinates to an index
 * @param x X coordinate
 * @param y Y coordinate
 * @param width Grid width
 * @returns Index value of x, y
 * @since 1.2.1
 */
export function xyToIndex(x: number, y: number, width: number): number {
	return y * width + x;
}
