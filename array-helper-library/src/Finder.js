/**
 * Finder class for working with arrays.
 * 
 * This class provides a method to find key/value-pair objects with a specified value.
 * 
 * @class
 */

export class Finder {

  /**
   * Create an instance of the Finder class with the provided array.
   *
   * @constructor
   * @param {Array} array - The array to be operated on.
   */
  constructor(array) {
    this.array = array
  }

  /**
  * Finds key/value-pair objects within an array that has a specified value.
  * 
  * @param {Array} array 
  * @param {*} value 
  * @returns {Array} An array of key/value-pair objects that contains the specified value.
  * @throws {Error} Throws an error if the array argument is not an array or if the value argument is missing or undefined
  */
  findObjectValue(array, value) {
    if (!Array.isArray(array)) {
      throw new Error('The array argument must be an array')
    } else if (value === undefined) {
      throw new Error('The provided value argument is missing or undefined')
    }

    const values = []

    for (let i = 0; i < array.length; i++) {
      const currentObject = array[i]
      const currentValues = Object.values(currentObject)

      if (currentValues.includes(value)) {
        values.push(currentObject)
      }
    }

    return values
  }

  /**
  * Groups objects within an array based on a specified key.
  * 
  * @param {Array} array 
  * @param {string} key 
  * @returns {Object} An object where keys are unique values of the specified   key, and values are arrays of objects that have matching values for that key.
  * @throws {Error} Throws an error if the array argument is not an array or if the key argument is missing or undefined
  */
  groupBy(array, key) {
    if (!Array.isArray(array)) {
      throw new Error('The array argument must be an array');
    } else if (key === undefined) {
      throw new Error('The provided key argument is missing or undefined');
    }

    const groupedObjects = {};

    for (let i = 0; i < array.length; i++) {
      const currentObject = array[i];
      const keyValue = currentObject[key];

      if (keyValue === undefined) {
        continue; // Skip objects without the specified key
      }

      if (!groupedObjects[keyValue]) {
        groupedObjects[keyValue] = [];
      }

      groupedObjects[keyValue].push(currentObject);
    } 

    return groupedObjects;
  }
}
