/**
 * Finder class for working with arrays.
 * 
 * This class provides findObjectValue method to find key/value-pair objects with a specified value.
 * 
 * @class
 */

export class Finder {

  /**
  * Finds key/value-pair objects within an array that has a specified value.
  * 
  * @param {Array} array 
  * @param {*} value 
  * @returns {Array} An array of key/value-pair objects that contains the specified value.
  * @throws {Error} Throws an error if the array argument is not an array or if the value argument is missing or undefined
  */
  findObjectValue(array, value) {
    this.#validateIfArrayIsAnArray(array)
    this.#validateArgument(value)

    return this.#findObjectsContainingValueArgument(array, value)
  }

  #validateIfArrayIsAnArray(array) {
    if (!Array.isArray(array)) {
      throw new Error('The array argument must be an array');
    }
  }

  #validateArgument(value) {
    if (value === undefined) {
      throw new Error('The provided argument is missing or undefined');
    }
  }

  #findObjectsContainingValueArgument(array, value) {
    const values = [];

    for (let i = 0; i < array.length; i++) {
      const currentObject = array[i];
      
      if (this.#objectHasValue(currentObject, value)) {
        values.push(currentObject);
      }
    }

    return values;
  }

  #objectHasValue(targetObject, value) {
    const currentValues = Object.values(targetObject);
    return currentValues.includes(value);
  }
}
