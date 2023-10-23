export class ArrayOrganizer {

   /**
   * Group key/value-pair objects in the array by matching key-value pairs.
   *
   * @param {Array} array Target array
   * @returns {Array} An array of grouped objects based on matching key-value pairs.
   * @throws {Error} Throws an error if the array is not an array.
   */
  groupByMatchingKeyValue(array) {
    this.#validateArrayIsAnArray(array)
    return this.#groupBy(array, this.#generateMatchingKeyValueGroupID)
  }

  /**
   * Group key/value-pair objects in the array by their values.
   *
   * @param {Array} array Target array
   * @returns {Array} An array of grouped objects based on their values.
   * @throws {Error} Throws an error if the array is not an array.
   */
  groupByObjectValues(array) {
    this.#validateArrayIsAnArray(array)
    return this.#groupBy(array, this.#generateValueGroupID)
  }

  /**
   * Group key/value-pair objects in the array by their keys.
   *
   * @param {Array} array Target array
   * @returns {Array} An array of grouped objects based on their keys.
   * @throws {Error} Throws an error if the array is not an array.
   */
  groupByObjectKeys(array) {
    this.#validateArrayIsAnArray(array)
    return this.#groupByKeysStructure(array)
  }

  /**
  * Groups items in an array based on a custom key extraction function.
  *
  * @param {Array} array Target array
  * @param {Function} callbackFunction Function to execute
  * @returns {Array} An array of arrays where each inner array contains items grouped by the extracted keys.
  */
  groupByCallbackFunction(array, callbackFunction) {
    this.#validateArrayIsAnArray(array)

    const groups = {}
    for (const item of array) {
      const key = callbackFunction(item)
      this.#addToGroup(groups, key, item)
    }

    return Object.values(groups)
  }

  #validateArrayIsAnArray(array) {
    if (!Array.isArray(array)) {
      throw new Error(`The provided argument must be an Array`)
    }
  }

  #groupBy(array, generateGroupID) {
    const group = {}
  
    for (const currentObject of array) {
      this.#groupCurrentObjectByKeyValues(currentObject, group, generateGroupID)
    }
  
    return Object.values(group)
  }
  
  #groupCurrentObjectByKeyValues(currentObject, group, generateGroupID) {
    const allKeys = Object.keys(currentObject)
  
    for (const key of allKeys) {
      this.#addToGroupUsingKey(key, currentObject, group, generateGroupID, allKeys)
    }
  }
  
  #addToGroupUsingKey(key, currentObject, group, generateGroupID, allKeys) {
    const value = currentObject[key]
    const groupID = generateGroupID(key, value, allKeys)
    this.#addToGroup(group, groupID, currentObject)
  }
  

  #groupByKeysStructure(array) {
    const group = {}

    for (const currentObject of array) {
      const sortedKeys = Object.keys(currentObject).sort().join(',')
      this.#addToGroup(group, sortedKeys, currentObject)
    }

    return Object.values(group)
  }

  #addToGroup(group, groupID, item) {
    if (!group[groupID]) {
      group[groupID] = []
    }
    group[groupID].push(item)
  }

  #generateMatchingKeyValueGroupID(key, value) {
    return `${key}:${value}`
  }

  #generateValueGroupID(_, value) {
    return `${value}`
  }
}
