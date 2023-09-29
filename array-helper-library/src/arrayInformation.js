/**
 * Array information class for gathering information about arrays.
 * 
 * This class provides a set of methods to gather information about arrays.
 */

export class ArrayInformation {
  /**
   * Create an instance of the ArrayInformation class with the provided array.
   *
   * @constructor
   * @param {Array} array - The array to be operated on.
   */
  constructor(array) {
    this.array = array
  }

  /**
  * Retrieves the primitive types of elements in an array.
  *
  * @param {Array} array - The array to analyze.
  * @returns {Array} An array of strings representing the primitive types of elements in the input array.
  * @throws {Error} Throws an error if the input argument is not an array.
  */
  getPrimitiveTypes(array) {
    if (!Array.isArray(array)) {
      throw new Error(`The provided argument must be an Array`)
    }

    const types = []

    for (let i = 0; i < array.length; i++) {
      types.push(typeof array[i])
    }

    return types
  }

  /**
  * Retrieves detailed information about the types of every element in an array.
  *
  * @param {Array} array - The array to analyze.
  * @returns {Array} An array of strings representing detailed type information for elements in the input array.
  * @throws {Error} Throws an error if the input argument is not an array.
  */
  getDetailedTypes(array) {
    if (!Array.isArray(array)) {
      throw new Error(`The provided argument must be an Array`)
    }

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
        if (!Object.prototype.hasOwnProperty.call(array, i)) {
         types.push(`Index: ${i}, Empty slot`)
        } else {
         types.push(`Index: ${i}, Undefined`)
        }
      } else if (typeof array[i] === 'number') {
        if (isNaN(array[i])) {
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
}
