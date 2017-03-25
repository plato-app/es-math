<a name="module_Matrix3"></a>

## Matrix3
A 3-dimensional matrix

**Author:** Geoff Blair <geoff@platoteam.com>  
**Copyright**: Plato Team, Inc. 2016  

* [Matrix3](#module_Matrix3)
    * [Matrix3](#exp_module_Matrix3--Matrix3) ⏏
        * [new Matrix3()](#new_module_Matrix3--Matrix3_new)
        * _instance_
            * [.set(...args)](#module_Matrix3--Matrix3+set) ⇒ <code>Matrix3</code>
            * [.identity()](#module_Matrix3--Matrix3+identity) ⇒ <code>Matrix3</code>
            * [.clone()](#module_Matrix3--Matrix3+clone) ⇒ <code>Matrix3</code>
            * [.translate(x, y)](#module_Matrix3--Matrix3+translate) ⇒ <code>Matrix3</code>
            * [.scale(sx, sy)](#module_Matrix3--Matrix3+scale) ⇒ <code>Matrix3</code>
            * [.rotate(radians)](#module_Matrix3--Matrix3+rotate) ⇒ <code>Matrix3</code>
            * [.multiply(m)](#module_Matrix3--Matrix3+multiply) ⇒ <code>Matrix3</code>
            * [.transformPoint(point)](#module_Matrix3--Matrix3+transformPoint) ⇒ <code>undefined</code>
            * [.inverseTransformPoint(point)](#module_Matrix3--Matrix3+inverseTransformPoint) ⇒ <code>undefined</code>
        * _static_
            * [.multiply(matA, matB, out)](#module_Matrix3--Matrix3.multiply) ⇒ <code>undefined</code>

<a name="exp_module_Matrix3--Matrix3"></a>

### Matrix3 ⏏
**Kind**: Exported class  
<a name="new_module_Matrix3--Matrix3_new"></a>

#### new Matrix3()
Matrix3 constructor

<a name="module_Matrix3--Matrix3+set"></a>

#### matrix3.set(...args) ⇒ <code>Matrix3</code>
Set the values of this matrix

**Kind**: instance method of <code>[Matrix3](#exp_module_Matrix3--Matrix3)</code>  
**Chainable**  
**Returns**: <code>Matrix3</code> - This matrix  

| Param | Type | Description |
| --- | --- | --- |
| ...args | <code>number</code> | Matrix values |

<a name="module_Matrix3--Matrix3+identity"></a>

#### matrix3.identity() ⇒ <code>Matrix3</code>
Resets this matrix to identity

**Kind**: instance method of <code>[Matrix3](#exp_module_Matrix3--Matrix3)</code>  
**Chainable**  
**Returns**: <code>Matrix3</code> - This matrix  
<a name="module_Matrix3--Matrix3+clone"></a>

#### matrix3.clone() ⇒ <code>Matrix3</code>
Clones this matrix

**Kind**: instance method of <code>[Matrix3](#exp_module_Matrix3--Matrix3)</code>  
**Returns**: <code>Matrix3</code> - Cloned matrix  
<a name="module_Matrix3--Matrix3+translate"></a>

#### matrix3.translate(x, y) ⇒ <code>Matrix3</code>
Translates this matrix by x, y

**Kind**: instance method of <code>[Matrix3](#exp_module_Matrix3--Matrix3)</code>  
**Chainable**  
**Returns**: <code>Matrix3</code> - This matrix  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | X coordinate |
| y | <code>number</code> | Y coordinate |

<a name="module_Matrix3--Matrix3+scale"></a>

#### matrix3.scale(sx, sy) ⇒ <code>Matrix3</code>
Scales this matrix by sx, sy

**Kind**: instance method of <code>[Matrix3](#exp_module_Matrix3--Matrix3)</code>  
**Chainable**  
**Returns**: <code>Matrix3</code> - This matrix  

| Param | Type | Description |
| --- | --- | --- |
| sx | <code>number</code> | X scaling |
| sy | <code>number</code> | Y scaling |

<a name="module_Matrix3--Matrix3+rotate"></a>

#### matrix3.rotate(radians) ⇒ <code>Matrix3</code>
Rotates this matrix by radians

**Kind**: instance method of <code>[Matrix3](#exp_module_Matrix3--Matrix3)</code>  
**Chainable**  
**Returns**: <code>Matrix3</code> - This matrix  

| Param | Type | Description |
| --- | --- | --- |
| radians | <code>number</code> | Radians by which to rotate |

<a name="module_Matrix3--Matrix3+multiply"></a>

#### matrix3.multiply(m) ⇒ <code>Matrix3</code>
Multiplies this matrix by another

**Kind**: instance method of <code>[Matrix3](#exp_module_Matrix3--Matrix3)</code>  
**Chainable**  
**Returns**: <code>Matrix3</code> - This matrix  

| Param | Type | Description |
| --- | --- | --- |
| m | <code>Matrix3</code> | Matrix by which to multiply |

<a name="module_Matrix3--Matrix3+transformPoint"></a>

#### matrix3.transformPoint(point) ⇒ <code>undefined</code>
Transforms a 2D point

**Kind**: instance method of <code>[Matrix3](#exp_module_Matrix3--Matrix3)</code>  

| Param | Type | Description |
| --- | --- | --- |
| point | <code>Object</code> | Point to be transformed |

<a name="module_Matrix3--Matrix3+inverseTransformPoint"></a>

#### matrix3.inverseTransformPoint(point) ⇒ <code>undefined</code>
Does an inverse transform on a 2D point (like converting world coords to local space)

**Kind**: instance method of <code>[Matrix3](#exp_module_Matrix3--Matrix3)</code>  

| Param | Type | Description |
| --- | --- | --- |
| point | <code>Object</code> | Point to be transformed |

<a name="module_Matrix3--Matrix3.multiply"></a>

#### Matrix3.multiply(matA, matB, out) ⇒ <code>undefined</code>
Multiplies two matrices

**Kind**: static method of <code>[Matrix3](#exp_module_Matrix3--Matrix3)</code>  

| Param | Type | Description |
| --- | --- | --- |
| matA | <code>Matrix3</code> | Matrix A |
| matB | <code>Matrix3</code> | Matrix B |
| out | <code>Matrix3</code> | Destination matrix |

