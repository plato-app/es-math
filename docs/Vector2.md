# `Vector2` API Reference

## Properties (Instance)

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

## Methods (Instance)

* [add](#add)
* [copy](#copy)
* [distance](#distance)
* [dot](#dot)
* [normalize](#normalize)
* [reflect](#reflect)
* [set](#set)
* [scale](#scale)
* [subtract](#subtract)
* [zero](#zero)

Most methods which modify the current vector also return the current vector making them [chainable](https://en.wikipedia.org/wiki/Method_chaining). For example:

```js
var v1 = new Vector2(5, 10);
v1.set(7, 7).scale(2);
// v1 = x: 14, y: 14
```

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

### copy
`copy (v)`

Copies the `x` and `y` components of `v` to this vector.

Example:
```js
var v1 = new Vector2(5, 10);
var v2 = new Vector2(2, 3);
v1.copy(v2);
// v1 = x: 2, y: 3
```

### distance
`distance (v)`

Returns the distance between this vector and `v`.

Example:
```js
var v1 = new Vector2(5, 10);
var v2 = new Vector2(2, 3);
var n = v1.distance(v2);
// n = 7.615773106
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

### reflect
`reflect (normal)`

Reflects this vector off a plane orthogonal to `normal`.

Example:
```js
var v1 = new Vector2(5, 5);
var v2 = new Vector2(0, -1);
v1.reflect(v2);
// v1 = x: 5, y: -5
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
