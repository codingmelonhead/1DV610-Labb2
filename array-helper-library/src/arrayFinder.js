export function findObjectValue(array, value) {
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
