# Array Helper Library

To work with arrays can be a hazzle.

The Array Helper Library is a JavaScript utility library that provides a set of functions to work with arrays. It offers various features for analyzing and organizing arrays of key/value-pair objects.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Examples](#examples)
  - [`findObjectValue`](#findobjectvalue)
  - [`getPrimitiveTypes`](#getprimitivetypes)
  - [`getDetailedTypes`](#getdetailedtypes)
  - [`groupByMatchingKeyValue`](#groupbymatchingkeyvalue)
  - [`groupByObjectValues`](#groupbyobjectvalues)
  - [`groupByObjectKeys`](#groupbyobjectkeys)
- [Contributing](#contributing)
- [License](#license)

## Installation

run:

```
npm install 
```

## Usage

To use this library, you need to import the ArrayUtils class and create an instance with your target array. Then, you can access various methods to perform operations on your array.

## Examples

Here is some examples how to use it and outputs.

### `findObjectValue`

The `findObjectValue(array, value)` function returns an array of key/value-pair objects from the input `array` where a specified `value` is found in any of the objects.

#### Parameters

- `array` (Array): The array of objects to search through.
- `value` (any): The value to search for.

#### Returns

- (Array): An array of objects from the input `array` where the specified `value` is found in any of the object's.
#### Example

```javascript
import { ArrayUtils } from 'array-helper-library'

const exampleArray = [
  { Name: 'Adam', Age: 20 }, 
  { Name: 'Anna', Age: 23 }, 
  { Name: 'Adam', Age: 21 }
]

const arrayUtils = new ArrayUtils(myArray)

const foundObjects = arrayUtils.findObjectValue('Adam')
console.log(foundObjects)
// Output: [ { Name: 'Adam', Age: 20 }, { Name: 'Adam', Age: 21 } ]
```

### `getPrimitiveTypes`

The `getPrimitiveTypes(array)` function returns an array of the primitive data types (e.g., 'string', 'number', 'boolean') for each element in the input `array`.

#### Parameters

- `array` (Array): The array of values to analyze.

#### Returns

- (Array): An array of strings representing the primitive data types of the elements in the input `array`.

#### Example

```javascript
import { ArrayUtils } from 'array-helper-library'

const exampleArray = [1, '2', true]
const arrayUtils = new ArrayUtils(exampleArray)

const types = arrayUtils.getPrimitiveTypes()
console.log(types)
// Output: ['number', 'string', 'boolean']
```

### `getDetailedTypes`

The `getDetailedTypes(array)` function provides a more detailed analysis of each element in the input `array`, including information about strings, numbers, objects, functions, and more.

#### Parameters

- `array` (Array): The array of values to analyze.

#### Returns

- (Array): An array of strings describing the detailed types of each element in the input `array`.

#### Example

```javascript
import { ArrayUtils } from 'array-helper-library'

const exampleArray = [1, '2', { name: 'Alice' }, Infinity, ,]
const arrayUtils = new ArrayUtils(exampleArray)
const detailedTypes = arrayUtils.getDetailedTypes()

console.log(detailedTypes)
// Output: ['Index: 0, Number', 'Index: 1, String', 'Index: 2, Object: (Neither an array or null)', 'Index: 3, Infinity', 'Index: 4, Empty slot']
```

### `groupByMatchingKeyValue`

The `groupByMatchingKeyValue(array)` function groups objects in the input `array` by matching key-value pairs.

#### Parameters

- `array` (Array): The array of key/value-pair objects to be grouped.

#### Returns

- (Array): An array of arrays, where each inner array contains objects that share the same key-value pairs.

#### Example

```javascript
import { ArrayUtils } from 'array-helper-library'

const exampleArray = [
  { Name: 'Adam', Age: 20 }, 
  { Name: 'Anna', Age: 23 }, 
  { Name: 'Adam', Age: 21 }, 
  { Nickname: 'Adam' }, 
  { Name: 'Andreas', Age: 21 }, 
  { Name: 'Andreas' }, 
  { Nickname: 'Adam' }, 
  { Nickname: 'Anna' }, 
  { Nickname: 'Anna' }, 
  { Haircolor: 'Orange' }
]

const arrayUtils = new ArrayUtils(exampleArray)
const groupedArray = arrayUtils.groupByMatchingKeyValue()
console.log(groupedArray)
// Output: [
//  [{ Name: 'Adam', Age: 20 }, { Name: 'Adam', Age: 21 }], 
//  [{ Name: 'Adam', Age: 20 }], 
//  [{ Name: 'Anna', Age: 23 }], 
//  [{ Name: 'Anna', Age: 23 }], 
//  [{ Name: 'Adam', Age: 21 }, { Name: 'Andreas', Age: 21 }], 
//  [{ Nickname: 'Adam' }, { Nickname: 'Adam' }], 
//  [{ Name: 'Andreas', Age: 21 }, { Name: 'Andreas' }], 
//  [{ Nickname: 'Anna' }, { Nickname: 'Anna' }], [{ Haircolor: 'Orange' }]
// ]
```

### `groupByObjectValues`

The `groupByObjectValues(array)` function groups key/value-pair objects in the input `array` by their property values.

#### Parameters

- `array` (Array): The array of key/value-pair objects to be grouped.

#### Returns

- (Array): An array of arrays, where each inner array contains objects that share the same property values.

#### Example

```javascript
import { ArrayUtils } from 'array-helper-library'

const exampleArray = [
  { Name: 'Adam', Age: 20 }, 
  { Name: 'Anna', Age: 23 }, 
  { Name: 'Adam', Age: 21 }, 
  { Nickname: 'Adam' }, 
  { Name: 'Andreas', Age: 21 }, 
  { Name: 'Andreas' }, 
  { Nickname: 'Adam' }, 
  { Nickname: 'Anna' }, 
  { Nickname: 'Anna' }, 
  { Haircolor: 'Orange' }
]

const arrayUtils = new ArrayUtils(exampleArray)
const groupedArray = arrayUtils.groupByObjectValues()
console.log(groupedArray)
// Output: [
//  [{ Name: 'Adam', Age: 20 }], 
//  [{ Name: 'Adam', Age: 21 }, { Name: 'Andreas', Age: 21 }], 
//  [{ Name: 'Anna', Age: 23 }], 
//  [{ Name: 'Adam', Age: 20 }, { Name: 'Adam', Age: 21 }, { Nickname: 'Adam' }, { Nickname: 'Adam' }], 
//  [{ Name: 'Anna', Age: 23 }, { Nickname: 'Anna' }, { Nickname: 'Anna' }], 
//  [{ Name: 'Andreas', Age: 21 }, { Name: 'Andreas' }], 
//  [{ Haircolor: 'Orange' }]
// ]
```

### `groupByObjectKeys`

The `groupByObjectKeys(array)` function groups key/value-pair objects in the input `array` by their keys.

#### Parameters

- `array` (Array): The array of key/value-pair objects to be grouped.

#### Returns

- (Array): An array of arrays, where each inner array contains objects that share the same keys.

#### Example

```javascript
import { ArrayUtils } from 'array-helper-library'

const exampleArray = [
  { Name: 'Adam', Age: 20 }, 
  { Name: 'Anna', Age: 23 }, 
  { Name: 'Adam', Age: 21 }, 
  { Nickname: 'Adam' }, 
  { Name: 'Andreas', Age: 21 }, 
  { Name: 'Andreas' }, 
  { Nickname: 'Adam' }, 
  { Nickname: 'Anna' }, 
  { Nickname: 'Anna' }, 
  { Haircolor: 'Orange' }
]

const arrayUtils = new ArrayUtils(exampleArray)
const groupedArray = groupByObjectKeys()
console.log(groupedArray)
// Output: [
//  [{ Name: 'Adam', Age: 20 }, { Name: 'Anna', Age: 23 }, { Name: 'Adam', Age: 21 }, { Name: 'Andreas', Age: 21 }],
//  [{ Nickname: 'Adam' }, { Nickname: 'Adam' }, { Nickname: 'Anna' }, { Nickname: 'Anna' }], 
//  [{ Name: 'Andreas' }], 
//  [{ Haircolor: 'Orange' }]
// ]
```

## Contributing

Contributions to the **Array Helper Library** are welcome! If you have any ideas, bug reports, or feature requests, please open an issue on the GitHub repository. To contribute code or documentation, follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix: `git checkout -b feature-name`.
3. Make your changes and commit them with clear, concise commit messages.
4. Push your changes to your fork: `git push origin feature-name`.
5. Open a pull request to the `main` branch of the original repository.
6. Your pull request will be reviewed, and once approved, it will be merged.

Please ensure that your code adheres to the project's coding standards and that you have included tests for your changes when applicable.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for the full text of the license. You are free to use, modify, and distribute this software as permitted by the terms of the MIT License.

