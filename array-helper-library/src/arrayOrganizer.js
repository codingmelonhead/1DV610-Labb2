/**
 * Groups key/value-pair objects in an array by matching key-value pairs.
 *
 * @param {Array} array - The array of objects to group.
 * @returns {Array} An array of grouped objects based on matching key-value pairs.
 * @throws {Error} Throws an error if the input argument is not an array.
 */

export function groupByMatchingKeyValue(array) {
  if (!Array.isArray(array)) {
    throw new Error(`The provided argument must be an Array`)
  }

  const keyValueGroup = {}

  for (let i = 0; i < array.length; i++) {
    const currentObject = array[i]
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

/**
 * Groups key/value-pair objects in an array by their values.
 *
 * @param {Array} array - The array of objects to group.
 * @returns {Array} An array of grouped objects based on their values.
 * @throws {Error} Throws an error if the input argument is not an array.
 */

export function groupByObjectValues(array) {
  if (!Array.isArray(array)) {
    throw new Error(`The provided argument must be an Array`)
  }

  const valueGroup = {}

  for (let i = 0; i < array.length; i++) {
    const currentObject = array[i]
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

/**
 * Groups key/value-pair objects in an array by their keys.
 *
 * @param {Array} array - The array of objects to group.
 * @returns {Array} An array of grouped objects based on their keys.
 * @throws {Error} Throws an error if the input argument is not an array.
 */

export function groupByObjectKeys(array) {
  if (!Array.isArray(array)) {
    throw new Error(`The provided argument must be an Array`)
  }

  const keyGroup = {}

  for (let i = 0; i < array.length; i++) {
    const currentObject = array[i]
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
