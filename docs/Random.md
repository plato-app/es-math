<a name="module_Random"></a>

## Random
A seeded, pseudo-random number generator

**Author:** Geoff Blair <geoff@platoteam.com>  
**Copyright**: Plato Team, Inc. 2016  

* [Random](#module_Random)
    * [~_randomizeSeed()](#module_Random.._randomizeSeed)
    * [~_next()](#module_Random.._next)
    * [~normal()](#module_Random..normal) ⇒ <code>number</code>
    * [~integer(max)](#module_Random..integer) ⇒ <code>number</code>
    * [~range(min, max, round)](#module_Random..range) ⇒ <code>number</code>
    * [~chance(chance)](#module_Random..chance) ⇒ <code>boolean</code>
    * [~choice(options)](#module_Random..choice) ⇒ <code>any</code>
    * [~shuffle(items)](#module_Random..shuffle) ⇒ <code>void</code>

<a name="module_Random.._randomizeSeed"></a>

### Random~_randomizeSeed()
Randomizes this PRNG's state value

**Kind**: inner method of <code>[Random](#module_Random)</code>  
**Access:** protected  
<a name="module_Random.._next"></a>

### Random~_next()
Returns the next psuedo-random value

**Kind**: inner method of <code>[Random](#module_Random)</code>  
**Access:** protected  
<a name="module_Random..normal"></a>

### Random~normal() ⇒ <code>number</code>
Returns a normalized random value, i.e. between 0 and 1,

**Kind**: inner method of <code>[Random](#module_Random)</code>  
**Returns**: <code>number</code> - Normalized random value  
**Access:** public  
<a name="module_Random..integer"></a>

### Random~integer(max) ⇒ <code>number</code>
Returns a random integer value between 0 and max (inclusive)

**Kind**: inner method of <code>[Random](#module_Random)</code>  
**Returns**: <code>number</code> - Random integer  
**Access:** public  

| Param | Type | Description |
| --- | --- | --- |
| max | <code>number</code> | Maximum integer value |

<a name="module_Random..range"></a>

### Random~range(min, max, round) ⇒ <code>number</code>
Returns a random value between min and max, optionally rounded

**Kind**: inner method of <code>[Random](#module_Random)</code>  
**Returns**: <code>number</code> - Random value  
**Access:** public  

| Param | Type | Description |
| --- | --- | --- |
| min | <code>number</code> | Minimum value |
| max | <code>number</code> | Maximum value |
| round | <code>boolean</code> | Whether to round the result, optional |

<a name="module_Random..chance"></a>

### Random~chance(chance) ⇒ <code>boolean</code>
Returns true if a randomized normal is within a percentage chance

**Kind**: inner method of <code>[Random](#module_Random)</code>  
**Access:** public  

| Param | Type | Description |
| --- | --- | --- |
| chance | <code>number</code> | Percentage chance in decimal form, e.g. 0.3 = 30% chance |

<a name="module_Random..choice"></a>

### Random~choice(options) ⇒ <code>any</code>
Returns a random pick from an array of options

**Kind**: inner method of <code>[Random](#module_Random)</code>  
**Returns**: <code>any</code> - Chosen item  
**Access:** public  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Array</code> | Array of options to choose from |

<a name="module_Random..shuffle"></a>

### Random~shuffle(items) ⇒ <code>void</code>
Shuffles an array in-place using Fisher-Yates algorithm

**Kind**: inner method of <code>[Random](#module_Random)</code>  
**Access:** public  

| Param | Type | Description |
| --- | --- | --- |
| items | <code>Array</code> | Array of items to shuffle |

