# `random` API Reference

A seeded, pseudo-random number generator. Each unique seed value will return the same sequence of "random" numbers. Starting seed value is randomized using `Math.random`.

The underlying algorithm is a [linear congruential generator](https://en.wikipedia.org/wiki/Linear_congruential_generator) which uses the same paramters as [glibc](https://en.wikipedia.org/wiki/Glibc).

## Methods

### `chance (n)`

Returns `true` if a random normal is less than `n`, otherwise `false`.

Example:
```js
var winner = random.chance(0.5);
// winner = true
```

### `getSeed`

Returns the current seed value.

Example:
```js
var n = random.getSeed();
// n = 1000
```

### `integer (max)`

Returns a random integer between `0` and `max`.

Example:
```js
var n = random.integer(100);
// n = 57
```

### `normal`

Returns a random, normalized value (between `0` and `1`).

Example:
```js
var n = random.normal();
// n = 0.32
```

### `range (min, max, round)`

Returns a random value between `min` and `max`. If `round` is `true`, the return value is rounded.

Example:
```js
var n = random.range(100, 200, true);
// n = 179
```

### `seed`

Sets the current seed value.

Example:
```js
random.seed(1000);
```
