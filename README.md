# `math` API Reference

A collection of math related utility functions.

## Methods

* [approximately](#approximately)
* [clamp](#clamp)
* [distance](#distance)
* [indexToX](#indexToX)
* [indexToY](#indexToY)
* [lerp](#lerp)
* [normalize](#normalize)
* [round](#round)
* [sign](#sign)
* [xyToIndex](#xyToIndex)

### approximately
`approximately (a, b, threshold)`

Returns `true` if the difference between `a` and `b` is within `threshold`. Useful for evaluating small numbers for equality. `threshold` defaults to `Number.EPSILON`.

Example:
```js
var zero = math.approximately(0.0000001, 0);
// zero = true
```

### clamp
`clamp (n, min, max)`

Clamps `n` between `min` and `max`.

Example:
```js
var n = math.clamp(200, 0, 100);
// n = 100
```

### distance
`distance (x1, y1, x2, y2)`

Returns the distance between two points.

Example:
```js
var n = math.distance(10, 10, 20, 20);
```

### indexToX
`indexToX (index, width)`

Returns the X grid coordinate for a flattened `index`.

Example:
```js
var x = math.indexToX(35, 20);
// x = 15
```

### indexToY
`indexToY (index, width)`

Returns the Y grid coordinate for a flattened `index`.

Example:
```js
var y = math.indexToX(35, 20);
// y = 1
```

### lerp
`lerp (a, b, t, round)`

Linear interpolation of `t` between `a` and `b`. Returns a rounded number when `round` is `true`.

Example:
```js
var n = math.lerp(50, 100, 0.5);
// n = 75
```

### normalize
`normalize (n, min, max)`

Returns the normalized value (between `0` and `1`) of `n` between `min` and `max`. Reverse `lerp`.

Example:
```js
var n = math.normalize(75, 50, 100);
// n = 0.5
```

### round
`round (n, decimals)`

Returns `n` rounded to `decimals` number of decimal points.

Example:
```js
var n = math.round(3.14159265359, 2);
// n = 3.14
```

### sign
`sign (n)`

Returns the sign of `n`: `1`, `-1`, or `0`.

Example:
```js
var n = math.sign(-45);
// n = -1
```

### xyToIndex
`xyToIndex (x, y, width)`

Flattens grid (`x`, `y`) coordinates into an index.

Example:
```js
var index = math.xyToIndex(10, 3, 20);
// index = 70
```
