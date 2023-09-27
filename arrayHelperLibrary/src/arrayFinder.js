export function findObjectValue(array, value) {
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
