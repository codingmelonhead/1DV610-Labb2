export function getPrimitiveTypes(array) {
  const types = []

  for (let i = 0; i < array.length; i++) {
    types.push(typeof array[i])
  }

  return types
}

export function getDetailedTypes(array) {
  const types = []

  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'string') {
      types.push(`Index: ${i}, String`)
    } else if (typeof array[i] === 'boolean') {
      types.push(`Index: ${i}, Boolean: ${array[i]}`)
    } else if (typeof array[i] === 'object') {
      if (Array.isArray(array[i])) {
        types.push(`Index: ${i}, Array: ${array[i].length} elements`)
      } else if (array[i] === null) {
        types.push(`Index: ${i}, Null`)
      } else {
        types.push(`Index: ${i}, Object: (Neither an array or null)`)
      }
    } else if (typeof array[i] === 'undefined') {
      if (!array.hasOwnProperty(i)) {
        types.push(`Index: ${i}, Empty slot`)
      } else {
        types.push(`Index: ${i}, Undefined`)
      }
    } else if (typeof array[i] === 'number') {
        if (array[i] === NaN) {
          types.push(`Index: ${i}, NaN`)
        } else if (array[i] === Infinity) {
          types.push(`Index: ${i}, Infinity`)
        } else if (array[i] === -Infinity) {
          types.push(`Index: ${i}, -Infinity`)
        } else {
          types.push(`Index: ${i}, Number`)
        }
    } else if (typeof array[i] === 'symbol') {
      types.push(`Index: ${i}, Symbol`)
    } else if (typeof array[i] === 'function') {
      const functionToString = array[i].toString()
      const linesOfCode = functionToString.split('\n').length - 1
      types.push(`Index: ${i}, Function: ${linesOfCode} line(s) of code`)
      }
    }

    return types
  }
