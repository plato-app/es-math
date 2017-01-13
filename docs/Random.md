<a name="module_Random"></a>

## Random
A seeded, pseudo-random number generator

**Author:** Geoff Blair <geoff@platoteam.com>  
**Copyright**: Plato Team, Inc. 2016  

* [Random](#module_Random)
    * [Random](#exp_module_Random--Random) ⏏
        * [new Random()](#new_module_Random--Random_new)
        * [.seed](#module_Random--Random+seed) : <code>number</code>
        * [.normal()](#module_Random--Random+normal) ⇒ <code>number</code>
        * [.integer(max)](#module_Random--Random+integer) ⇒ <code>number</code>
        * [.range(min, max, round)](#module_Random--Random+range) ⇒ <code>number</code>
        * [.chance(chance)](#module_Random--Random+chance) ⇒ <code>boolean</code>
        * [.choice(options)](#module_Random--Random+choice) ⇒ <code>any</code>
        * [.shuffle(items)](#module_Random--Random+shuffle)

<a name="exp_module_Random--Random"></a>

### Random ⏏
**Kind**: Exported class  
<a name="new_module_Random--Random_new"></a>

#### new Random()
Random constructor

<a name="module_Random--Random+seed"></a>

#### random.seed : <code>number</code>
Seed value

**Kind**: instance property of <code>[Random](#exp_module_Random--Random)</code>  
<a name="module_Random--Random+normal"></a>

#### random.normal() ⇒ <code>number</code>
Returns a normalized random value, i.e. between 0 and 1

**Kind**: instance method of <code>[Random](#exp_module_Random--Random)</code>  
**Returns**: <code>number</code> - Normalized random value  
**Access:** public  
<a name="module_Random--Random+integer"></a>

#### random.integer(max) ⇒ <code>number</code>
Returns a random integer value between 0 and max (inclusive)

**Kind**: instance method of <code>[Random](#exp_module_Random--Random)</code>  
**Returns**: <code>number</code> - Random integer  
**Access:** public  

| Param | Type | Description |
| --- | --- | --- |
| max | <code>number</code> | Maximum integer value |

<a name="module_Random--Random+range"></a>

#### random.range(min, max, round) ⇒ <code>number</code>
Returns a random value between min and max, optionally rounded

**Kind**: instance method of <code>[Random](#exp_module_Random--Random)</code>  
**Returns**: <code>number</code> - Random value  
**Access:** public  

| Param | Type | Description |
| --- | --- | --- |
| min | <code>number</code> | Minimum value |
| max | <code>number</code> | Maximum value |
| round | <code>boolean</code> | Whether to round the result, optional |

<a name="module_Random--Random+chance"></a>

#### random.chance(chance) ⇒ <code>boolean</code>
Returns true if a randomized normal is within a percentage chance

**Kind**: instance method of <code>[Random](#exp_module_Random--Random)</code>  
**Access:** public  

| Param | Type | Description |
| --- | --- | --- |
| chance | <code>number</code> | Percentage chance in decimal form, e.g. 0.3 = 30% chance |

<a name="module_Random--Random+choice"></a>

#### random.choice(options) ⇒ <code>any</code>
Returns a random pick from an array of options

**Kind**: instance method of <code>[Random](#exp_module_Random--Random)</code>  
**Returns**: <code>any</code> - Chosen item  
**Access:** public  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Array</code> | Array of options to choose from |

<a name="module_Random--Random+shuffle"></a>

#### random.shuffle(items)
Shuffles an array in-place using Fisher-Yates algorithm

**Kind**: instance method of <code>[Random](#exp_module_Random--Random)</code>  
**Access:** public  

| Param | Type | Description |
| --- | --- | --- |
| items | <code>Array</code> | Array of items to shuffle |

