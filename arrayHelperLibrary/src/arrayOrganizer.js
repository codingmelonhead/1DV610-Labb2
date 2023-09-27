export function groupByMatchingKeyValue(array) {
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

export function groupByObjectValue(array) {
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

export function groupByObjectKeys(array) {
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
