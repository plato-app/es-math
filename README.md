# @plato/math

Math-related utility functions.

## API Reference

* [Interfaces](#interfaces)
	* [`ICircle`](#icircle)
	* [`IPoint`](#ipoint)
	* [`IRectangle`](#irectangle)
* [Constants](#constants)
	* [`TAU`](#tau)
* [Functions](#functions)
	* [`approximately`](#approximately)
	* [`average`](#average)
	* [`clamp`](#clamp)
	* [`degreesToRadians`](#degreestoradians)
	* [`distance`](#distance)
	* [`indexToX`](#indextox)
	* [`indexToY`](#indextoy)
	* [`lerp`](#lerp)
	* [`lerpAngle`](#lerpangle)
	* [`mid`](#mid)
	* [`normalize`](#normalize)
	* [`radiansToDegrees`](#radianstodegrees)
	* [`round`](#round)
	* [`sign`](#sign)
	* [`wrapRadians`](#wrapradians)
	* [`xyToIndex`](#xytoindex)

---

### Interfaces

#### ICircle

A circle in 2D space.

```ts
interface ICircle {
	x: number;
	y: number;
	radius: number;
}
```

#### IPoint

A point in 2D space.

```ts
interface IPoint {
	x: number;
	y: number;
}
```

* Since: `3.5.0`

#### IRectangle

A rectangle in 2D space.

```ts
interface IRectangle {
	x: number;
	y: number;
	width: number;
	height: number;
}
```

* Since: `3.5.0`

---

### Constants

#### TAU

```ts
const TAU: number;
```

A constant equal to `2PI`. See [The Tau Manifesto](https://tauday.com/).

---

### Functions

#### approximately

```ts
approximately(a: number, b: number, threshold?: number): boolean;
```

Compares two numbers for approximate equality.

Example:

```js
if (approximately(0.001, 0.002)) {
	// 0.001 and 0.002 are approximately equal
}
```

#### average

```ts
average(numbers: number[]): number;
```

Returns the average of an array of numbers.

Example:
```js
const avg = average([1, 2, 3, 4, 5]);
// avg = 3
```

* Since: `3.1.0`

#### clamp

```ts
clamp(n: number, min: number, max: number): number;
```

Clamps a number between a minimum and maximum

Example:

```js
const n = clamp(500, 100, 200);
// n = 200
```

#### degreesToRadians

```ts
degreesToRadians(degrees: number): number;
```

Converts an angle in degrees to radians.

Example:
```js
const a = degreesToRadians(180);
// a = 3.141592653589793
```

* Since: `3.3.0`
* See: [`radiansToDegrees`](#radianstodegrees)

#### distance

```ts
distance(x1: number, y1: number, x2: number, y2: number): number;
```

Calculates the distance between two points

Example:

```js
var d = distance(5, 5, 10, 10);
// d = 7.071067812
```

#### indexToX

```ts
indexToX(index: number, width: number): number;
```

Converts an index to grid X coordinate

Example:

```js
const x = indexToX(4, 3);
// x = 1
```

* See: [`indexToY`](#indextoy)
* See: [`xyToIndex`](#xytoindex)

#### indexToY

```ts
indexToY(index: number, width: number): number;
```

Converts an index to grid Y coordinate

Example:

```js
const y = indexToY(4, 3);
// y = 1
```

* See: [`indexToX`](#indextox)
* See: [`xyToIndex`](#xytoindex)

#### lerp

```ts
lerp(a: number, b: number, t: number, round?: boolean): number;
```

Linear interpolation between two numbers

Example:

```js
const n = lerp(10, 20, 0.5);
// n = 15
```

#### lerpAngle

```ts
lerpAngle(a: number, b: number, t: number): number;
```

Linear interpolation between two angles via shortest angle

Example:

```js
const a = lerpAngle(0, Math.PI * 1.5, 0.5);
// a = -0.7853981633974483
```

* Since: `3.2.0`

#### mid

```ts
mid(a: number, b: number): number;
```

Returns the mid value between two numbers

Example:

```js
const n = mid(100, 200);
// n = 150
```

#### normalize

```ts
normalize(n: number, min: number, max: number): number;
```

Normalizes a value between a minimum and maximum

Example:

```js
const n = normalize(500, 0, 1000);
// n = 0.5
```

#### radiansToDegrees

```ts
radiansToDegrees(radians: number): number;
```

Converts an angle in radians to degrees.

Example:

```js
const degrees = radiansToDegrees(Math.PI);
// degrees = 180
```

* Since: `3.4.0`
* See: [`degreesToRadians`](#degreestoradians)

#### round

```ts
round(value: number, decimals?: number): number;
```

Rounds a value to a specified number of decimal places.

Example:

```js
const n = round(123.456789, 2);
// n = 123.45
```

#### sign

```ts
sign(n: number): number;
```

Returns the sign of a number.

Example:

```js
const n = sign(-100);
// n = -1
```

#### wrapRadians

```ts
wrapRadians(radians: number): number;
```

Wraps radians between `0` and `2PI`.

Example:

```js
const angle = wrapRadians(Math.PI * 4.5);
// angle = Math.PI / 2
```

* Since: `3.7.0`

#### xyToIndex

```ts
xyToIndex(x: number, y: number, width: number): number;
```

Converts grid coordinates to an index.

Example:

```js
const index = xyToIndex(1, 1, 3);
// index = 4
```

* See: [`indexToX`](#indextox)
* See: [`indexToY`](#indextoy)
