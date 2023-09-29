/* eslint-disable no-undef */
/* eslint-disable no-sparse-arrays */
import { ArrayUtils } from '../src/ArrayUtils'

describe('ArrayUtils.findObjectValue', () => {
  it('Should return an array with object(s) that has the specified value', () => {
    const exampleArray = [{ Name: 'Adam', Age: 20 }, { Name: 'Anna', Age: 23 }, { Name: 'Adam', Age: 21 }]

    const arrayUtils = new ArrayUtils(exampleArray)
    const objWithValueAdam = arrayUtils.findObjectValue('Adam')

    expect(objWithValueAdam).toEqual(
      [ { Name: 'Adam', Age: 20 }, { Name: 'Adam', Age: 21 } ]
    )
  })

  it('Should handle arrays with non-object elements', () => {
    const exampleArray = ['Adam', 20, { Name: 'Adam', Age: 20 }]

    const arrayUtils = new ArrayUtils(exampleArray)
    const objWithValueAdam = arrayUtils.findObjectValue('Adam')

    expect(objWithValueAdam).toEqual(
      [ { Name: 'Adam', Age: 20 } ]
    )
  })

  it('Should throw an Error if not provided with an array', () => {
    const notAnArray = 'Not an array'

    const arrayUtils = new ArrayUtils(notAnArray)

    expect(() => {
      arrayUtils.findObjectValue('Adam')
    }).toThrowError('The array argument must be an array')
  })

  it('Should throw an Error if not provided with an value', () => {
    const array = []

    const arrayUtils = new ArrayUtils(array)

    expect(() => {
      arrayUtils.findObjectValue()
    }).toThrowError('The provided value argument is missing or undefined')
  })
})

describe('ArrayUtils.getPrimitiveTypes', () => {
  it('Should return an array with the primitive values of each element in the provided array', () => {
    const exampleArray = [1, '2', true, function() { 
      console.log('This is a function in an array.') }, { name: 'adam' }, null, NaN, Infinity, , [1, 2, 3, 4]]
    
    const arrayUtils = new ArrayUtils(exampleArray)
    const primitiveTypesArray = arrayUtils.getPrimitiveTypes()

    expect(primitiveTypesArray).toEqual(
      ['number', 'string', 'boolean', 'function', 'object', 'object', 'number', 'number', 'undefined', 'object']
    )
  })

  it('Should throw an Error if not provided with an array', () => {
    const notAnArray = 'Not an array'

    const arrayUtils = new ArrayUtils(notAnArray)

    expect(() => {
      arrayUtils.getPrimitiveTypes()
    }).toThrowError('The provided argument must be an Array')
  })
})

describe('ArrayUtils.getDetailedTypes', () => {
  it('Should return an array with detailed information about what type of element is in the array', () => {
    const exampleArray = [1, '2', true, function() {
      console.log('This is a function in an array.')
    }, { name: 'adam' }, null, NaN, Infinity, , [1, 2, 3, 4]]
    
    const arrayUtils = new ArrayUtils(exampleArray)
    const detailedTypesArray = arrayUtils.getDetailedTypes()

    expect(detailedTypesArray).toEqual(
      ['Index: 0, Number', 'Index: 1, String', 'Index: 2, Boolean: true', 'Index: 3, Function: 2 line(s) of code', 'Index: 4, Object: (Neither an array or null)', 'Index: 5, Null', 'Index: 6, NaN', 'Index: 7, Infinity', 'Index: 8, Empty slot', 'Index: 9, Array: 4 elements']
    )
  })

  it('Should throw an Error if not provided with an array', () => {
    const notAnArray = 'Not an array'

    const arrayUtils = new ArrayUtils(notAnArray)

    expect(() => {
      arrayUtils.getDetailedTypes()
    }).toThrowError('The provided argument must be an Array')
  })
})

describe('ArrayUtils.groupByMatchingKeyValue', () => {
  it('Should return an array that contains arrays with objects that has matching key/value-pairs', () => {
    const exampleArray = [{ Name: 'Adam', Age: 20 }, { Name: 'Anna', Age: 23 }, { Name: 'Adam', Age: 21 }, { Nickname: 'Adam' }, { Name: 'Andreas', Age: 21 }, { Name: 'Andreas' }, { Nickname: 'Adam' }, { Nickname: 'Anna' }, { Nickname: 'Anna' }, { Haircolor: 'Orange' }]

    const arrayUtils = new ArrayUtils(exampleArray)
    const groupedMatchingKeyValue = arrayUtils.groupByMatchingKeyValue()

    expect(groupedMatchingKeyValue).toEqual(
      [[{ Name: 'Adam', Age: 20 }, { Name: 'Adam', Age: 21 }], [{ Name: 'Adam', Age: 20 }], [{ Name: 'Anna', Age: 23 }], [{ Name: 'Anna', Age: 23 }], [{ Name: 'Adam', Age: 21 }, { Name: 'Andreas', Age: 21 }], [{ Nickname: 'Adam' }, { Nickname: 'Adam' }], [{ Name: 'Andreas', Age: 21 }, { Name: 'Andreas' }], [{ Nickname: 'Anna' }, { Nickname: 'Anna' }], [{ Haircolor: 'Orange' }]]
    )
  })

  it('Should throw an Error if not provided with an array', () => {
    const notAnArray = 'Not an array'

    const arrayUtils = new ArrayUtils(notAnArray)

    expect(() => {
      arrayUtils.groupByMatchingKeyValue()
    }).toThrowError('The provided argument must be an Array')
  })
})

describe('ArrayUtils.groupByObjectValues', () => {
  it('Should return an array that contains arrays with objects that have mathcing values', () => {
    const exampleArray = [{ Name: 'Adam', Age: 20 }, { Name: 'Anna', Age: 23 }, { Name: 'Adam', Age: 21 }, { Nickname: 'Adam' }, { Name: 'Andreas', Age: 21 }, { Name: 'Andreas' }, { Nickname: 'Adam' }, { Nickname: 'Anna' }, { Nickname: 'Anna' }, { Haircolor: 'Orange' }]

    const arrayUtils = new ArrayUtils(exampleArray)
    const groupedObjectValues = arrayUtils.groupByObjectValues()

    expect(groupedObjectValues).toEqual(
      [[{ Name: 'Adam', Age: 20 }], [{ Name: 'Adam', Age: 21 }, { Name: 'Andreas', Age: 21 }], [{ Name: 'Anna', Age: 23 }], [{ Name: 'Adam', Age: 20 }, { Name: 'Adam', Age: 21 }, { Nickname: 'Adam' }, { Nickname: 'Adam' }], [{ Name: 'Anna', Age: 23 }, { Nickname: 'Anna' }, { Nickname: 'Anna' }], [{ Name: 'Andreas', Age: 21 }, { Name: 'Andreas' }], [{ Haircolor: 'Orange' }]]
    )
  })

  it('Should throw an Error if not provided with an array', () => {
    const notAnArray = 'Not an array'

    const arrayUtils = new ArrayUtils(notAnArray)

    expect(() => {
      arrayUtils.groupByObjectValues()
    }).toThrowError('The provided argument must be an Array')
  })
})

describe('ArrayUtils.groupByObjectKeys', () => {
  it('Should return an array that contains arrays with objects that have mathcing keys', () => {
    const exampleArray = [{ Name: 'Adam', Age: 20 }, { Name: 'Anna', Age: 23 }, { Name: 'Adam', Age: 21 }, { Nickname: 'Adam' }, { Name: 'Andreas', Age: 21 }, { Name: 'Andreas' }, { Nickname: 'Adam' }, { Nickname: 'Anna' }, { Nickname: 'Anna' }, { Haircolor: 'Orange' }]

    const arrayUtils = new ArrayUtils(exampleArray)
    const groupedObjectKeys = arrayUtils.groupByObjectKeys()

    expect(groupedObjectKeys).toEqual(
      [[{ Name: 'Adam', Age: 20 }, { Name: 'Anna', Age: 23 }, { Name: 'Adam', Age: 21 }, { Name: 'Andreas', Age: 21 }], [{ Nickname: 'Adam' }, { Nickname: 'Adam' }, { Nickname: 'Anna' }, { Nickname: 'Anna' }], [{ Name: 'Andreas' }], [{ Haircolor: 'Orange' }]]
    )
  })

  it('Should throw an Error if not provided with an array', () => {
    const notAnArray = 'Not an array'

    const arrayUtils = new ArrayUtils(notAnArray)

    expect(() => {
      arrayUtils.groupByObjectKeys()
    }).toThrowError('The provided argument must be an Array')
  })
})
