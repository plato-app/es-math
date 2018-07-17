# @plato/math

Math related utility functions.

## API Reference

### approximately

`approximately (a: number, b: number, threshold = Number.EPSILON): boolean`

Compares two numbers for approximate equality.

Example:

```js
if (math.approximately(0.001, 0.002)) {
	// 0.001 and 0.002 are approximately equal
}
```

### average

`average(numbers: number[]): number`

Returns the average of an array of numbers.

Example:
```ts
let avg = math.average([1, 2, 3, 4, 5]);
// avg = 3
```

* Since: `3.1.0`

### clamp

`clamp (n: number, min: number, max: number): number`

Clamps a number between a minimum and maximum

Example:

```js
var n = math.clamp(500, 100, 200);
// n = 200
```

### degreesToRadians

`degreesToRadians (degrees: number): number`

Converts an angle in degrees to radians.

Example:
```ts
let a = degreesToRadians(180);
// a =
```

* Since: `3.3.0`

### distance

`distance (x1: number, y1: number, x2: number, y2: number): number`

Calculates the distance between two points

Example:

```js
var d = math.distance(5, 5, 10, 10);
// d = 7.071067812
```

### indexToX

`indexToX (index: number, width: number): number`

Converts an index to grid X coordinate

Example:

```js
var x = math.indexToX(4, 3);
// x = 1
```

### indexToY

`indexToY (index: number, width: number): number`

Converts an index to grid Y coordinate

Example:

```js
var y = math.indexToY(4, 3);
// y = 1
```

### lerp

`lerp (a: number, b: number, t: number, round = false): number`

Linear interpolation between two numbers

Example:

```js
var n = math.lerp(10, 20, 0.5);
// n = 15
```

### lerpAngle

`lerpAngle (a: number, b: number, t: number): number`

Linear interpolation between two angles via shortest angle

Example:
```ts
let a = math.lerpAngle(0, Math.PI * 1.5, 0.5);
// a = -0.7853981633974483
```

* Since: `3.2.0`

### mid

`mid (a: number, b: number): number`

Returns the mid value between two numbers

Example:

```js
var n = math.mid(100, 200);
// n = 150
```

### normalize

`normalize (n: number, min: number, max: number): number`

Normalizes a value between a minimum and maximum

Example:

```js
var n = math.normalize(500, 0, 1000);
// n = 0.5
```

### radiansToDegrees

`radiansToDegrees (radians: number): number`

Converts an angle in radians to degrees.

Example:
```ts
const degrees = radiansToDegrees(Math.PI);
// degrees = 180
```

### round

`round (value: number, decimals = 0): number`

Rounds a value to a specified number of decimal places

Example:

```js
var n = math.round(123.456789, 2);
// n = 123.45
```

### sign

`sign (n: number): number`

Returns the sign of a number

Example:

```js
var n = math.sign(-100);
// n = -1
```

### xyToIndex

`xyToIndex (x: number, y: number, width: number): number`

Converts grid coordinates to an index

Example:

```js
var index = math.xyToIndex(1, 1, 3);
// index = 4
```
