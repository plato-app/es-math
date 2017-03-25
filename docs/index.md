<a name="module_math"></a>

## math
Math utilities

**Author:** Geoff Blair <geoff@platoteam.com>  
**Copyright**: Plato Team, Inc. 2016  

* [math](#module_math)
    * [.TAU](#module_math.TAU) : <code>number</code>
    * [.approximately(a, b, threshold)](#module_math.approximately) ⇒ <code>boolean</code>
    * [.clamp(n, min, max)](#module_math.clamp) ⇒ <code>number</code>
    * [.distance(x1, y1, x2, y2)](#module_math.distance) ⇒ <code>number</code>
    * [.indexToX(index, width)](#module_math.indexToX) ⇒ <code>number</code>
    * [.indexToY(index, width)](#module_math.indexToY) ⇒ <code>number</code>
    * [.lerp(a, b, t, round)](#module_math.lerp) ⇒ <code>number</code>
    * [.mid(a, b)](#module_math.mid) ⇒ <code>number</code>
    * [.normalize(n, min, max)](#module_math.normalize) ⇒ <code>number</code>
    * [.round(value, decimals)](#module_math.round) ⇒ <code>number</code>
    * [.sign(n)](#module_math.sign) ⇒ <code>number</code>
    * [.xyToIndex(x, y, width)](#module_math.xyToIndex) ⇒ <code>number</code>

<a name="module_math.TAU"></a>

### math.TAU : <code>number</code>
TAU is a handy shortcut for 2PI

**Kind**: static property of <code>[math](#module_math)</code>  
<a name="module_math.approximately"></a>

### math.approximately(a, b, threshold) ⇒ <code>boolean</code>
Compares two numbers for approximate equality

**Kind**: static method of <code>[math](#module_math)</code>  
**Returns**: <code>boolean</code> - Whether a is approximately equal to b  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>number</code> | Number A |
| b | <code>number</code> | Number B |
| threshold | <code>number</code> | Equality threshold (defaults to Number.EPSILON) |

<a name="module_math.clamp"></a>

### math.clamp(n, min, max) ⇒ <code>number</code>
Clamps a number between a minimum and maximum

**Kind**: static method of <code>[math](#module_math)</code>  
**Returns**: <code>number</code> - Clamped value of n  

| Param | Type | Description |
| --- | --- | --- |
| n | <code>number</code> | Number to be clamped |
| min | <code>number</code> | Minimum |
| max | <code>number</code> | Maximum |

<a name="module_math.distance"></a>

### math.distance(x1, y1, x2, y2) ⇒ <code>number</code>
Calculates the distance between two points

**Kind**: static method of <code>[math](#module_math)</code>  
**Returns**: <code>number</code> - Distance between x1, y1 and x2, y2  

| Param | Type | Description |
| --- | --- | --- |
| x1 | <code>number</code> | First X coordinate |
| y1 | <code>number</code> | First Y coordinate |
| x2 | <code>number</code> | Second X coordinate |
| y2 | <code>number</code> | Second Y coordinate |

<a name="module_math.indexToX"></a>

### math.indexToX(index, width) ⇒ <code>number</code>
Converts an index to grid X coordinate

**Kind**: static method of <code>[math](#module_math)</code>  
**Returns**: <code>number</code> - X coordinate for index  

| Param | Type | Description |
| --- | --- | --- |
| index | <code>number</code> | Index |
| width | <code>number</code> | Grid width |

<a name="module_math.indexToY"></a>

### math.indexToY(index, width) ⇒ <code>number</code>
Converts an index to grid Y coordinate

**Kind**: static method of <code>[math](#module_math)</code>  
**Returns**: <code>number</code> - Y coordinate for index  

| Param | Type | Description |
| --- | --- | --- |
| index | <code>number</code> | Index |
| width | <code>number</code> | Grid width |

<a name="module_math.lerp"></a>

### math.lerp(a, b, t, round) ⇒ <code>number</code>
Linear interpolation between two numbers

**Kind**: static method of <code>[math](#module_math)</code>  
**Returns**: <code>number</code> - Interpolated value between a and b  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>number</code> | Number A |
| b | <code>number</code> | Number B |
| t | <code>number</code> | Normalized time (between 0 - 1) |
| round | <code>boolean</code> | Rounds return value |

<a name="module_math.mid"></a>

### math.mid(a, b) ⇒ <code>number</code>
Returns the mid value between two numbers

**Kind**: static method of <code>[math](#module_math)</code>  
**Returns**: <code>number</code> - Mid value between a and b  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>number</code> | Number A |
| b | <code>number</code> | Number B |

<a name="module_math.normalize"></a>

### math.normalize(n, min, max) ⇒ <code>number</code>
Normalizes a value between a minimum and maximum

**Kind**: static method of <code>[math](#module_math)</code>  
**Returns**: <code>number</code> - Normalized value of n, between min and max  

| Param | Type | Description |
| --- | --- | --- |
| n | <code>number</code> | Value to normalize |
| min | <code>number</code> | Minimum |
| max | <code>number</code> | Maximum |

<a name="module_math.round"></a>

### math.round(value, decimals) ⇒ <code>number</code>
Rounds a value to a specified number of decimal places

**Kind**: static method of <code>[math](#module_math)</code>  
**Returns**: <code>number</code> - Rounded value of value  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Value to round |
| decimals | <code>number</code> | Number of decimal places to round |

<a name="module_math.sign"></a>

### math.sign(n) ⇒ <code>number</code>
Returns the sign of a number

**Kind**: static method of <code>[math](#module_math)</code>  
**Returns**: <code>number</code> - Sign of n, -1, 0, or 1  

| Param | Type | Description |
| --- | --- | --- |
| n | <code>number</code> | Number |

<a name="module_math.xyToIndex"></a>

### math.xyToIndex(x, y, width) ⇒ <code>number</code>
Converts grid coordinates to an index

**Kind**: static method of <code>[math](#module_math)</code>  
**Returns**: <code>number</code> - Index value of x, y  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | X coordinate |
| y | <code>number</code> | Y coordinate |
| width | <code>number</code> | Grid width |

