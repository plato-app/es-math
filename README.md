# @plato/math

Math related utility functions.

## API Reference

### approximately

`approximately (a: number, b: number, threshold = Number.EPSILON)`

Compares two numbers for approximate equality.

Example:

```js
if (math.approximately(0.001, 0.002)) {
	// 0.001 and 0.002 are approximately equal
}
```
