exports = typeof window === 'undefined' ? global : window

exports.arraysAnswers = {
  indexOf: function (arr, item) {
    return arr.indexOf(item)
  },

  sum: function (arr) {
    var sum = arr.reduce(function (acc, num) {
      return acc + num
    })
    return sum
  },

  remove: function (arr, item) {
    var cleanArr = arr.filter(function (val) {
      return val !== item
    })
    return cleanArr
  },

  removeWithoutCopy: function (arr, item) {

  },

  append: function (arr, item) {

  },

  truncate: function (arr) {

  },

  prepend: function (arr, item) {

  },

  curtail: function (arr) {

  },

  concat: function (arr1, arr2) {
    return arr1.concat(arr2)
  },

  insert: function (arr, item, index) {

  },

  count: function (arr, item) {

  },

  duplicates: function (arr) {

  },

  square: function (arr) {
    var squareArr = arr.map(function (val) {
      return val * val
    })
    return squareArr
  },

  findAllOccurrences: function (arr, target) {

  }
}
