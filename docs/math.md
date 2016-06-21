# math

## API

* [`clamp`](#clamp)
* [`lerp`](#lerp)
* [`normalize`](#normalize)

### `clamp`

Clamps a value (`n`) between `min` and `max`.

```js
// Clamp 200 between 0 and 100
var n = math.clamp(200, 0, 100);
// n = 100
```

### `lerp`

Linear interpolation between `a` and `b`.

```js
// Interpolate 0.5 between 50 and 100
var n = math.lerp(50, 100, 0.5);
// n = 75
```

### `normalize`

Normalizes a value between `0` and `1`. Reverse `lerp`.

```js
var n = math.normalize(75, 50, 100);
// n = 0.5
```
