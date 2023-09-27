import { findObjectValue } from './arrayFinder.js'
import { getPrimitiveTypes, getDetailedTypes } from './arrayInformation.js'
import { groupByMatchingKeyValue, groupByObjectValue, groupByObjectKeys } from './arrayOrganizer.js'

export class ArrayUtils {
  constructor(array) {
    this.array = array
  }

  findObjectValue(value) {
    return findObjectValue(this.array, value)
  }

  getPrimitiveTypes() {
    return getPrimitiveTypes(this.array)
  }

  getDetailedTypes() {
    return getDetailedTypes(this.array)
  }

  groupByMatchingKeyValue() {
    return groupByMatchingKeyValue(this.array)
  }

  groupByObjectValue() {
    return groupByObjectValue(this.array)
  }

  groupByObjectKeys() {
    return groupByObjectKeys(this.array)
  }
}
