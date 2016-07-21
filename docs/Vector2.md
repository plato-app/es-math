# `Vector2` API Reference

## Properties

* [angle](#angle)
* [magnitude](#magnitude)

### angle

Returns the angle, in radians, of this vector.

Example:
```js
var v = new Vector2(0, 5);
var a = v.angle;
// a = 1.5707963267948966
```

### magnitude

Returns the magnitude (length) of this vector.

Example:
```js
var v = new Vector2(5, 10);
var m = v.magnitude;
// m = 11.180339887498949
```

## Methods

* [add](#add)
* [dot](#dot)
* [normalize](#normalize)
* [set](#set)
* [scale](#scale)
* [subtract](#subtract)
* [zero](#zero)

### add
`add (v)`

Modifies this vector by adding another vector, `v`, to it.

Example:
```js
var v1 = new Vector2(5, 10);
var v2 = new Vector2(2, 3);
v1.add(v2);
// v1 = x: 7, y: 13
```

### dot
`dot (v)`

Returns the dot product of this vector and `v`.

Example:
```js
var v1 = new Vector2(5, 10);
var v2 = new Vector2(2, 3);
var n = v1.dot(v2);
// n = 40
```

### zero
`zero ()`

Sets this vector's `x` and `y` components to `0`.

Example:
```js
var v = new Vector2(5, 10);
v.zero();
// v = x: 0, y: 0
```
