import { Finder } from './Finder.js'
import { ArrayInformation } from './ArrayInformation.js'
import { ArrayOrganizer } from './ArrayOrganizer.js'

/**
 * Utility class for working with arrays.
 *
 * This class provides a set of methods for performing various operations on arrays,
 * such as finding objects by a specified value, analyzing primitive and detailed types,
 * and grouping objects based on key-value pairs, values, or keys.
 *
 * @class
 */
export class ArrayUtils {
  /**
   * Create an instance of the ArrayUtils class with the provided array.
   *
   * @constructor
   * @param {Array} array - The array to be operated on.
   */
  constructor(array) {
    this.array = array
    this.finder = new Finder(array)
    this.arrayOrganizer = new ArrayOrganizer(array)
    this.arrayInformation = new ArrayInformation(array)
  }

  /**
   * Find key/value-pair objects within the array that contain a specified value.
   *
   * @param {*} value - The value to search for within the objects.
   * @returns {Array} An array of objects that contain the specified value.
   * @throws {Error} Throws an error if the array is not an array.
   */
  findObjectValue(value) {
    return this.finder.findObjectValue(this.array, value)
  }

  /**
   * Get the primitive types of elements in the array.
   *
   * @returns {Array} An array of strings representing the primitive types of elements in the array.
   * @throws {Error} Throws an error if the array is not an array.
   */
  getPrimitiveTypes() {
    return this.arrayInformation.getPrimitiveTypes(this.array)
  }

  /**
   * Get detailed type information about elements in the array.
   *
   * @returns {Array} An array of strings representing detailed type information for elements in the array.
   * @throws {Error} Throws an error if the array is not an array.
   */
  getDetailedTypes() {
    return this.arrayInformation.getDetailedTypes(this.array)
  }

  /**
   * Group key/value-pair objects in the array by matching key-value pairs.
   *
   * @returns {Array} An array of grouped objects based on matching key-value pairs.
   * @throws {Error} Throws an error if the array is not an array.
   */
  groupByMatchingKeyValue() {
    return this.arrayOrganizer.groupByMatchingKeyValue(this.array)
  }

  /**
   * Group key/value-pair objects in the array by their values.
   *
   * @returns {Array} An array of grouped objects based on their values.
   * @throws {Error} Throws an error if the array is not an array.
   */
  groupByObjectValues() {
    return this.arrayOrganizer.groupByObjectValues(this.array)
  }

  /**
   * Group key/value-pair objects in the array by their keys.
   *
   * @returns {Array} An array of grouped objects based on their keys.
   * @throws {Error} Throws an error if the array is not an array.
   */
  groupByObjectKeys() {
    return this.arrayOrganizer.groupByObjectKeys(this.array)
  }
}
