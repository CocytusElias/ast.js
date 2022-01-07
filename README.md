# comsvr-ast

![standard-readme compliant](https://img.shields.io/badge/typescript-v4.5.2-green.svg?style=flat-square)

More powerful assertion validation tools

## Table of Contents

- [Install](#install)
  - [CNPM](#cnpm)
  - [NPM](#npm)
  - [YARN](#yarn)
  - [PNPM](#pnpm)
- [Usage](#usage)
  - [Introduce](#introduce)
  - [Function](#function)
- [Example](#example)
  - [Javascript](#javascript)
  - [Typescript](#typescript)
- [Maintainers](#maintainers)

## Install

### CNPM

```
cnpm i comsvr-ast --save
```

### NPM

```
npm i comsvr-ast --save
```

### YARN

```
yarn add comsvr-ast
```

### PNPM

```
pnpm add comsvr-ast
```

## Usage

### Introduce

Calls the specified method to make the specified assertion on the passed argument

### Function

#### Number

+ **isInt**: It's an integer

  | Param | Type             | Description         | sample |
    | ----- | ---------------- | ------------------- | ------ |
  | value | Number \| string | The value to assert | 3      |



+ **isPositiveInt**: It's a positive integer

  | Param | Type             | Description         | sample |
    | ----- | ---------------- | ------------------- | ------ |
  | value | Number \| string | The value to assert | 1      |



+ **isNegativeInt**: It's a negative integer

  | Param | Type             | Description         | sample |
    | ----- | ---------------- | ------------------- | ------ |
  | value | Number \| string | The value to assert | -2     |



+ **isDecimal**: It's a decimal

  | Param | Type             | Description         | sample |
    | ----- | ---------------- | ------------------- | ------ |
  | value | Number \| string | The value to assert | 2.1    |



+ **isPositiveDecimal**: It's a positive decimal

  | Param | Type             | Description         | sample |
    | ----- | ---------------- | ------------------- | ------ |
  | value | Number \| string | The value to assert | 6.3    |



+ **isNegativeDecimal**: It's a negative decimal

  | Param | Type             | Description         | sample |
    | ----- | ---------------- | ------------------- | ------ |
  | value | Number \| string | The value to assert | -3.5   |



+ **isSpecifyPrecisionDecimal**: A judgment is a decimal that specifies the precision and number of digits

  | Param     | Type             | Description                                                  | sample |
    | --------- | ---------------- | ------------------------------------------------------------ | ------ |
  | value     | Number \| string | The value to assert                                          | 2.33   |
  | precision | Number           | Specifies the maximum number of digits of an integer plus a decimal | 10     |
  | scale     | Number           | Decimal digits                                               | 3      |



#### Array

+ **isArray**: It's an array

  | Param | Type | Description         | sample |
    | ----- | ---- | ------------------- | ------ |
  | value | []   | The value to assert | []     |



+ **noEmpArray**: Check for a non-empty array

  | Param | Type | Description         | sample  |
    | ----- | ---- | ------------------- | ------- |
  | value | []   | The value to assert | [1,2,3] |



+ **isEmpArray**: Check is an empty array

  | Param | Type | Description         | sample |
    | ----- | ---- | ------------------- | ------ |
  | value | []   | The value to assert | []     |



+ **isSameArray**: Check that the two arrays are the same

  | Param       | Type | Description         | sample  |
    | ----------- | ---- | ------------------- | ------- |
  | firstArray  | []   | The value to assert | [1,2,3] |
  | secondArray | []   | The value to assert | [1,2,3] |





#### Object

+ **isObject**: It's an obejct

  | Param | Type | Description         | sample          |
    | ----- | ---- | ------------------- | --------------- |
  | value | {}   | The value to assert | {"test":"test"} |



+ **noEmpObject**: Check for a non-empty obejct

  | Param | Type | Description         | sample          |
    | ----- | ---- | ------------------- | --------------- |
  | value | {}   | The value to assert | {"test":"test"} |



+ **isEmpObject**: Check is an empty obejct

  | Param | Type | Description         | sample          |
    | ----- | ---- | ------------------- | --------------- |
  | value | {}   | The value to assert | {"test":"test"} |



+ **isSameObject**: Check that the two objects are the same

  | Param        | Type | Description         | sample          |
    | ------------ | ---- | ------------------- | --------------- |
  | firstObject  | {}   | The value to assert | {"test":"test"} |
  | secondObject | {}   |                     | {"test":"test"} |


## Example

### Javascript


#### Number

```javascript
const {
  isInt,
  isNegativeInt,
  isPositiveInt,
  isDecimal,
  isNegativeDecimal,
  isPositiveDecimal,
  isSpecifyPrecisionDecimal,
} = require('comsvr-ast');

console.log(isInt([])) // false
console.log(isInt("a")) // false
console.log(isInt("1.1")) // false
console.log(isInt("a1")) // false
console.log(isInt(1.1)) // false
console.log(isInt("18")) // true
console.log(isInt(18)) // true

console.log(isNegativeInt(11.6)) // false
console.log(isNegativeInt(-12)) // true
console.log(isNegativeInt(-1.1)) // false
console.log(isNegativeInt(11)) // false
console.log(isNegativeInt(1.1)) // false
console.log(isNegativeInt("-18")) // true
console.log(isNegativeInt(18)) // false

console.log(isPositiveInt(11.5)) // false
console.log(isPositiveInt("11")) // true
console.log(isPositiveInt("1.1")) // false
console.log(isPositiveInt("-1")) // false
console.log(isPositiveInt(11)) // true
console.log(isPositiveInt("-18")) // false
console.log(isPositiveInt(-18)) // true

console.log(isDecimal(11)) // false
console.log(isDecimal("2.0")) // false 
console.log(isDecimal("1.1")) // false
console.log(isDecimal("-12.0")) // true
console.log(isDecimal(12.0)) // false Because javascript automatically removes the 0 at the end of the decimal point, 12.0 becomes 12
console.log(isDecimal("18")) // false
console.log(isDecimal(18)) // false

console.log(isNegativeDecimal(-1.1)) // true
console.log(isNegativeDecimal("1.1")) // false
console.log(isNegativeDecimal("-1.1")) // true
console.log(isNegativeDecimal("a1")) // false
console.log(isNegativeDecimal(-1)) // false
console.log(isNegativeDecimal("18")) // false
console.log(isNegativeDecimal(18)) // false

console.log(isPositiveDecimal(3.2)) // true
console.log(isPositiveDecimal("36.333")) // true
console.log(isPositiveDecimal("1.1")) // true
console.log(isPositiveDecimal("-66.33")) // false
console.log(isPositiveDecimal(-1.1)) // false
console.log(isPositiveDecimal("18")) // false
console.log(isPositiveDecimal(18)) // false

console.log(isSpecifyPrecisionDecimal(3.1, 2, 1)) // true
console.log(isSpecifyPrecisionDecimal("3.1", 6, 1)) // true
console.log(isSpecifyPrecisionDecimal("6.22", 6, 1)) // false
console.log(isSpecifyPrecisionDecimal("1.323", 4, 3)) // true
console.log(isSpecifyPrecisionDecimal(1,2,1)) // false
console.log(isSpecifyPrecisionDecimal("18",2,1)) // false
console.log(isSpecifyPrecisionDecimal(108,3,1)) // false
```


#### Array

```javascript
const { isArray, isEmpArray, noEmpArray, isSameArray } = require('comsvr-ast');

console.log(isArray([])) // true
console.log(isArray("[]")) // false
console.log(isArray("{}")) // false
console.log(isArray({})) // false
console.log(isArray([1,2,3])) // true
console.log(isArray([{}])) // true
console.log(isArray([[]])) // true

console.log(isEmpArray([])) // true
console.log(isEmpArray("[]")) // false
console.log(isEmpArray("{}")) // false
console.log(isEmpArray({})) // false
console.log(isEmpArray([1,2,3])) // false
console.log(isEmpArray([{}])) // false
console.log(isEmpArray([[]])) // false

console.log(noEmpArray([])) // false
console.log(noEmpArray("[]")) // false
console.log(noEmpArray("{}")) // false
console.log(noEmpArray({})) // false
console.log(noEmpArray([1,2,3])) // true
console.log(noEmpArray([{}])) // true
console.log(noEmpArray([[]])) // true

console.log(isSameArray([], [])) // true
console.log(isSameArray([1, 2, 3], [1, 2, 3])) // true
console.log(isSameArray({}, {})) // false
console.log(isSameArray('[1, 2, 3]', '[1, 2, 3]')) // false
console.log(isSameArray([1, 3, 2], [1, 2, 3])) // false
console.log(isSameArray([1, 2, 3, 4], [1, {}, 3, 4])) // false
console.log(isSameArray([1, [2, { name: 'wang', info: [1, 2, 3] }, 4], 3, 4], [1, [2, { name: 'wang', info: [1, 2, 3] }, 4], 3, 4])) // true
```



#### Object

```javascript
const { isObject, isEmpObject, noEmpObject, isSameObject } = require('comsvr-ast');

console.log(isObject({})) // true
console.log(isObject("[]")) // false
console.log(isObject("{}")) // false
console.log(isObject([])) // false
console.log(isObject({ pip: 1, dre: 2, pop: 3 })) // true
console.log(isObject({ test1: { test2: [] } })) // true
console.log(isObject([{}])) // false

console.log(isEmpObject({})) // true
console.log(isEmpObject("[]")) // false
console.log(isEmpObject("{}")) // false
console.log(isEmpObject([])) // false
console.log(isEmpObject({ pip: 1, dre: 2, pop: 3 })) // false
console.log(isEmpObject({ test1: { test2: [] } })) // false
console.log(isEmpObject([{}])) // false

console.log(noEmpObject({})) // false
console.log(noEmpObject("[]")) // false
console.log(noEmpObject("{}")) // false
console.log(noEmpObject([])) // false
console.log(noEmpObject({ pip: 1, dre: 2, pop: 3 })) // true
console.log(noEmpObject({ test1: { test2: [] } })) // true
console.log(noEmpObject([{}])) // false

console.log(isSameObject({},{})) // true
console.log(isSameObject([1, 2, 3], [1, 2, 3])) // false
console.log(isSameObject({ test: 1, test2: 2 }, { test: 1, test2: 2, test3: 2 })) // false
console.log(isSameObject('[1, 2, 3]', '[1, 2, 3]')) // false
console.log(isSameObject({ test: { test: { test: 123 } } }, [{}, { test: { test: { test: 123 } } }])) // false
console.log(isSameObject({
  test: { test: { test: { test: 123 } } },
  test2: [{}, { test: { test: { test: 123 } } }],
}, {
  test: { test: { test: { test: 123 } } },
  test2: [{}, { test: { test: { test: 123 } } }],
})) // true
console.log(isSameObject({
  test: { test: { test: { test: true } } },
  test2: [{}, { test: { test: { test: 123 } } }],
}, {
  test: { test: { test: { test: true } } },
  test2: [{}, { test: { test: { test: 123 } } }],
})) // true
```



### Typescript

#### Number

```typescript
import {
  isInt,
  isNegativeInt,
  isPositiveInt,
  isDecimal,
  isNegativeDecimal,
  isPositiveDecimal,
  isSpecifyPrecisionDecimal,
} from 'comsvr-ast';

console.log(isInt([])) // false
console.log(isInt("a")) // false
console.log(isInt("1.1")) // false
console.log(isInt("a1")) // false
console.log(isInt(1.1)) // false
console.log(isInt("18")) // true
console.log(isInt(18)) // true

console.log(isNegativeInt(11.6)) // false
console.log(isNegativeInt(-12)) // true
console.log(isNegativeInt(-1.1)) // false
console.log(isNegativeInt(11)) // false
console.log(isNegativeInt(1.1)) // false
console.log(isNegativeInt("-18")) // true
console.log(isNegativeInt(18)) // false

console.log(isPositiveInt(11.5)) // false
console.log(isPositiveInt("11")) // true
console.log(isPositiveInt("1.1")) // false
console.log(isPositiveInt("-1")) // false
console.log(isPositiveInt(11)) // true
console.log(isPositiveInt("-18")) // false
console.log(isPositiveInt(-18)) // true

console.log(isDecimal(11)) // false
console.log(isDecimal("2.0")) // false 
console.log(isDecimal("1.1")) // false
console.log(isDecimal("-12.0")) // true
console.log(isDecimal(12.0)) // false Because javascript automatically removes the 0 at the end of the decimal point, 12.0 becomes 12
console.log(isDecimal("18")) // false
console.log(isDecimal(18)) // false

console.log(isNegativeDecimal(-1.1)) // true
console.log(isNegativeDecimal("1.1")) // false
console.log(isNegativeDecimal("-1.1")) // true
console.log(isNegativeDecimal("a1")) // false
console.log(isNegativeDecimal(-1)) // false
console.log(isNegativeDecimal("18")) // false
console.log(isNegativeDecimal(18)) // false

console.log(isPositiveDecimal(3.2)) // true
console.log(isPositiveDecimal("36.333")) // true
console.log(isPositiveDecimal("1.1")) // true
console.log(isPositiveDecimal("-66.33")) // false
console.log(isPositiveDecimal(-1.1)) // false
console.log(isPositiveDecimal("18")) // false
console.log(isPositiveDecimal(18)) // false

console.log(isSpecifyPrecisionDecimal(3.1, 2, 1)) // true
console.log(isSpecifyPrecisionDecimal("3.1", 6, 1)) // true
console.log(isSpecifyPrecisionDecimal("6.22", 6, 1)) // false
console.log(isSpecifyPrecisionDecimal("1.323", 4, 3)) // true
console.log(isSpecifyPrecisionDecimal(1,2,1)) // false
console.log(isSpecifyPrecisionDecimal("18",2,1)) // false
console.log(isSpecifyPrecisionDecimal(108,3,1)) // false
```


#### Array

```typescript
import { isArray, isEmpArray, noEmpArray, isSameArray } from 'comsvr-ast';

console.log(isArray([])) // true
console.log(isArray("[]")) // false
console.log(isArray("{}")) // false
console.log(isArray({})) // false
console.log(isArray([1,2,3])) // true
console.log(isArray([{}])) // true
console.log(isArray([[]])) // true

console.log(isEmpArray([])) // true
console.log(isEmpArray("[]")) // false
console.log(isEmpArray("{}")) // false
console.log(isEmpArray({})) // false
console.log(isEmpArray([1,2,3])) // false
console.log(isEmpArray([{}])) // false
console.log(isEmpArray([[]])) // false

console.log(noEmpArray([])) // false
console.log(noEmpArray("[]")) // false
console.log(noEmpArray("{}")) // false
console.log(noEmpArray({})) // false
console.log(noEmpArray([1,2,3])) // true
console.log(noEmpArray([{}])) // true
console.log(noEmpArray([[]])) // true

console.log(isSameArray([], [])) // true
console.log(isSameArray([1, 2, 3], [1, 2, 3])) // true
console.log(isSameArray({}, {})) // false
console.log(isSameArray('[1, 2, 3]', '[1, 2, 3]')) // false
console.log(isSameArray([1, 3, 2], [1, 2, 3])) // false
console.log(isSameArray([1, 2, 3, 4], [1, {}, 3, 4])) // false
console.log(isSameArray([1, [2, { name: 'wang', info: [1, 2, 3] }, 4], 3, 4], [1, [2, { name: 'wang', info: [1, 2, 3] }, 4], 3, 4])) // true
```

#### Object

```typescript
import { isObject, isEmpObject, noEmpObject, isSameObject } from 'comsvr-ast';

console.log(isObject({})) // true
console.log(isObject("[]")) // false
console.log(isObject("{}")) // false
console.log(isObject([])) // false
console.log(isObject({ pip: 1, dre: 2, pop: 3 })) // true
console.log(isObject({ test1: { test2: [] } })) // true
console.log(isObject([{}])) // false

console.log(isEmpObject({})) // true
console.log(isEmpObject("[]")) // false
console.log(isEmpObject("{}")) // false
console.log(isEmpObject([])) // false
console.log(isEmpObject({ pip: 1, dre: 2, pop: 3 })) // false
console.log(isEmpObject({ test1: { test2: [] } })) // false
console.log(isEmpObject([{}])) // false

console.log(noEmpObject({})) // false
console.log(noEmpObject("[]")) // false
console.log(noEmpObject("{}")) // false
console.log(noEmpObject([])) // false
console.log(noEmpObject({ pip: 1, dre: 2, pop: 3 })) // true
console.log(noEmpObject({ test1: { test2: [] } })) // true
console.log(noEmpObject([{}])) // false

console.log(isSameObject({},{})) // true
console.log(isSameObject([1, 2, 3], [1, 2, 3])) // false
console.log(isSameObject({ test: 1, test2: 2 }, { test: 1, test2: 2, test3: 2 })) // false
console.log(isSameObject('[1, 2, 3]', '[1, 2, 3]')) // false
console.log(isSameObject({ test: { test: { test: 123 } } }, [{}, { test: { test: { test: 123 } } }])) // false
console.log(isSameObject({
  test: { test: { test: { test: 123 } } },
  test2: [{}, { test: { test: { test: 123 } } }],
}, {
  test: { test: { test: { test: 123 } } },
  test2: [{}, { test: { test: { test: 123 } } }],
})) // true
console.log(isSameObject({
  test: { test: { test: { test: true } } },
  test2: [{}, { test: { test: { test: 123 } } }],
}, {
  test: { test: { test: { test: true } } },
  test2: [{}, { test: { test: { test: 123 } } }],
})) // true
```

## Maintainers

[@elias](https://github.com/eliassama/comsvr-ast)
