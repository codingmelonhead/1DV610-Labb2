/**
 * Array helper. Have fun with arrays.
 *
 */

const testArray = [1, '2', true, function() { 
  console.log('This is a function in an array.') }, { name: 'adam' }, null, NaN, Infinity, , [1, 2, 3, 4]]

function getArrayContentType(array) {
  const types = []

  for (let i = 0; i < array.length; i++) {
    types.push(typeof array[i])
  }

  console.log(types)
  return types
}

Array.prototype.getDetailedArrayContentType = function() {
  const types = []

  for (let i = 0; i < this.length; i++) {
    if (typeof this[i] === 'string') {
      types.push(`Index: ${i}, String`)
    } else if (typeof this[i] === 'boolean') {
      types.push(`Index: ${i}, Boolean: ${this[i]}`)
    } else if (typeof this[i] === 'object') {
      if (Array.isArray(this[i])) {
        types.push(`Index: ${i}, Array: ${this[i].length} elements`)
      } else if (this[i] === null) {
        types.push(`Index: ${i}, Null`)
      } else {
        types.push(`Index: ${i}, Object: (Neither an array or null)`)
      }
    } else if (typeof this[i] === 'undefined') {
      if (!this.hasOwnProperty(i)) {
        types.push(`Index: ${i}, Empty slot`)
      } else {
        types.push(`Index: ${i}, Undefined`)
      }
    } else if (typeof this[i] === 'number') {
        if (this[i] === NaN) {
          types.push(`Index: ${i}, NaN`)
        } else if (this[i] === Infinity) {
          types.push(`Index: ${i}, Infinity`)
        } else if (this[i] === -Infinity) {
          types.push(`Index: ${i}, -Infinity`)
        } else {
          types.push(`Index: ${i}, Number`)
        }
    } else if (typeof this[i] === 'symbol') {
      types.push(`Index: ${i}, Symbol`)
    } else if (typeof this[i] === 'function') {
      const functionToString = this[i].toString()
      const linesOfCode = functionToString.split('\n').length - 1
      types.push(`Index: ${i}, Function: ${linesOfCode} line(s) of code`)
      }
    }

    return types
  }

  function groupByPrimitiveType(array) {

  }

  Array.prototype.groupByMatchingKeyValue = function() {
    const keyValueGroup = {}

    for (let i = 0; i < this.length; i++) {
      const currentObject = this[i]
      const allKeys = Object.keys(currentObject)

      for (let j = 0; j < allKeys.length; j++) {
        const key = allKeys[j]
        const value = currentObject[key]
        const groupID = `${key}:${value}`

        if (!keyValueGroup[groupID]) {
          keyValueGroup[groupID] = []
        }

        keyValueGroup[groupID].push(currentObject)
      }
    }

    const groupedArray = Object.values(keyValueGroup)

    return groupedArray
  }

  Array.prototype.groupByObjectValue = function() {
    const valueGroup = {}

    for (let i = 0; i < this.length; i++) {
      const currentObject = this[i]
      const allKeys = Object.keys(currentObject)

      for (let j = 0; j < allKeys.length; j++) {
        const key = allKeys[j]
        const value = currentObject[key]
        const groupID = `${value}`

        if (!valueGroup[groupID]) {
          valueGroup[groupID] = []
        }

        valueGroup[groupID].push(currentObject)
      }
    }

    const groupedArray = Object.values(valueGroup)

    return groupedArray
  }

  Array.prototype.groupByObjectKeys = function() {
    const keyGroup = {}

    for (let i = 0; i < this.length; i++) {
      const currentObject = this[i]
      const allKeys = Object.keys(currentObject)
      const sortKeys = allKeys.sort().join(',')

      if (!keyGroup[sortKeys]) {
        keyGroup[sortKeys] = []
      }

      keyGroup[sortKeys].push(currentObject)
    }

    const groupedArray = Object.values(keyGroup)

    return groupedArray 
  }

  Array.prototype.findObjectValue = function(value) {
    const values = []

    for (let i = 0; i < this.length; i++) {
      const currentObject = this[i]
      const currentValues = Object.values(currentObject)

      if (currentValues.includes(value)) {
        values.push(currentObject)
      }
    }

    return values
  }

  const testArray2 = [ { Name: 'Adam', Age: 20 }, { Name: 'Anna', Age: 23 }, { Name: 'Adam', Age: 21 }, { Nickname: 'Adam' }, { Name: 'Andreas', Age: 21 }, { Name: 'Andreas' }, { Nickname: 'Adam' }, { Nickname: 'Anna' }, { Nickname: 'Anna' }, { Haircolor: 'Orange' } ]

getArrayContentType(testArray)
console.log(testArray.getDetailedArrayContentType())
console.log(testArray2.groupByMatchingKeyValue())
console.log(testArray2.groupByObjectValue())
console.log(testArray2.groupByObjectKeys())
console.log(testArray2.findObjectValue('Adam'))
