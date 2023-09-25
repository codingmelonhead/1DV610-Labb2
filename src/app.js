/**
 * Array helper. Have fun with arrays.
 *
 */
const path = require('path')
const mp3File = path.join('src', 'files', 'test.mp3')
testArray = [1, '2', function() {console.log('This is a function in an array.')}, { name: 'adam' }, null, mp3File, NaN, Infinity, ,]

function getArrayContentType(array) {
  const types = []

  array.forEach((element) => {
    types.push(typeof element)
  })

  console.log(types)
}

getArrayContentType(testArray)
