# `math` API Reference

A collection of math related utility functions.

## Methods

* [approximately](#approximately)
* [clamp](#clamp)
* [distance](#distance)
* [lerp](#lerp)
* [normalize](#normalize)
* [sign](#sign)

### approximately
`approximately (a, b)`

Returns `true` if the difference between `a` and `b` is within `Number.EPSILON`. Useful for evaluating small numbers for equality.

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

### sign
`sign (n)`

Returns the sign of `n`: `1`, `-1`, or `0`.

Example:
```js
var n = math.sign(-45);
// n = -1
```
