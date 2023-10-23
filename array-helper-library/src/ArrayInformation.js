export class ArrayInformation {
  /**
   * Get the primitive types of elements in the array.
   *
   * @param {Array} array Target array
   * @returns {Array} An array of strings representing the primitive types of elements in the array.
   * @throws {Error} Throws an error if the array is not an array.
   */
  getPrimitiveTypes(array) {
    this.#validateArrayIsAnArray(array)
    return this.#extractPrimitiveTypes(array)
  }

  /**
   * Get detailed type information about elements in the array.
   *
   * @param {Array} array Target array
   * @returns {Array} An array of strings representing detailed type information for elements in the array.
   * @throws {Error} Throws an error if the array is not an array.
   */
  getDetailedTypes(array) {
    this.#validateArrayIsAnArray(array)
    return this.#generateDetailedTypesArray(array)
  }

  #validateArrayIsAnArray(array) {
    if (!Array.isArray(array)) {
      throw new Error('The provided argument must be an Array');
    }
  }

  #extractPrimitiveTypes(array) {
    const types = []
    for (let i = 0; i < array.length; i++) {
      types.push(typeof array[i])
    }
    return types
  }

  #generateDetailedTypesArray(array) {
    const types = [];
    for (let i = 0; i < array.length; i++) {
      types.push(this.#getDetailedTypeInfo(array, array[i], i));
    }
    return types;
  }

  #getDetailedTypeInfo(array, element, index) {
    switch (typeof element) {
      case 'string':
        return `Index: ${index}, String`;
      case 'boolean':
        return `Index: ${index}, Boolean: ${element}`
      case 'object':
        return this.#getObjectDetails(element, index)
      case 'undefined':
        return this.#getUndefinedDetails(array, index)
      case 'number':
        return this.#getNumberDetails(element, index)
      case 'symbol':
        return `Index: ${index}, Symbol`
      case 'function':
        return this.#getFunctionDetails(element, index)
      default:
        return `Index: ${index}, Unknown type`
    }
  }

  #getObjectDetails(element, index) {
    if (Array.isArray(element)) {
      return `Index: ${index}, Array: ${element.length} elements`
    } else if (element === null) {
      return `Index: ${index}, Null`
    } else {
      return `Index: ${index}, Object: (Neither an array or null)`
    }
  }

  #getUndefinedDetails(array, index) {
    if (!Object.prototype.hasOwnProperty.call(array, index)) {
      return `Index: ${index}, Empty slot`
    } else {
      return `Index: ${index}, Undefined`
    }
  }

  #getNumberDetails(element, index) {
    if (isNaN(element)) {
      return `Index: ${index}, NaN`
    } else if (element === Infinity) {
      return `Index: ${index}, Infinity`
    } else if (element === -Infinity) {
      return `Index: ${index}, -Infinity`
    } else {
      return `Index: ${index}, Number`
    }
  }

  #getFunctionDetails(element, index) {
    const functionToString = element.toString()
    const linesOfCode = functionToString.split('\n').length - 1
    return `Index: ${index}, Function: ${linesOfCode} line(s) of code`
  }
}
