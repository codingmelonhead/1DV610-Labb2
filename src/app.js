/**
 * Array helper. Have fun with arrays.
 *
 */

testArray = [1, '2', true, function() { console.log('This is a function in an array.')}, { name: 'adam' }, null, NaN, Infinity, , [1, 2, 3, 4]]

function getArrayContentType(array) {
  const types = []

  for (let i = 0; i < array.length; i++) {
    types.push(typeof array[i])
  }

  console.log(types)
  return types
}

function getDetailedArrayContentType(array) {
  const types = []

  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'string') {
      types.push(`A string containing ${array[i].length} character(s).`)
    } else if (typeof array[i] === 'boolean') {
      types.push(`The boolean value: ${array[i]}`)
    } else if (typeof array[i] === 'object') {
      if (Array.isArray(array[i])) {
        types.push(`An array, with a length of: ${array[i].length} elements`)
      } else if (array[i] === null) {
        types.push(`Null`)
      } else {
        types.push('An object that is neither an Array or null')
      }
    } else if (typeof array[i] === 'undefined') {
      if (!array.hasOwnProperty(i)) {
        types.push('An empty slot')
      } else {
        types.push('undefined')
      }
    } else if (typeof array[i] === 'number') {
        if (array[i] === NaN) {
          types.push('NaN')
        } else {
          types.push(typeof array[i])
        }
    } else if (typeof array[i] === 'symbol') {
      types.push(typeof array[i])
    } else if (typeof array[i] === 'function') {
      const functionToString = array[i].toString()
      const linesOfCode = functionToString.split('\n').length - 1
      types.push(`A function with ${linesOfCode} lines of code`)
      }
    }
    console.log(types)
  }

getArrayContentType(testArray)
getDetailedArrayContentType(testArray)
