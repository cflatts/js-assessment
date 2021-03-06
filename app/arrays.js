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
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        arr.splice(i, 1)
        i--
      }
    }
    return arr
  },

  append: function (arr, item) {
    arr.push(item)
    return arr
  },

  truncate: function (arr) {
    arr.pop()
    return arr
  },

  prepend: function (arr, item) {
    arr.unshift(item)
    return arr
  },

  curtail: function (arr) {
    arr.shift()
    return arr
  },

  concat: function (arr1, arr2) {
    return arr1.concat(arr2)
  },

  insert: function (arr, item, index) {
    arr.splice(index, 0, item)
    return arr
  },

  count: function (arr, item) {
    var total = 0
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        total = total + 1
      }
    }
    return total
  },

  duplicates: function (arr) {
    var dupesArr = []
    var newObj = {}
    arr.forEach(function (val) {
      if (newObj[val] === undefined) {
        newObj[val] = 1
      } else {
        if (dupesArr.indexOf(val) === -1) {
          dupesArr.push(val)
        }
      }
    })
    return dupesArr
  },

  square: function (arr) {
    var squareArr = arr.map(function (val) {
      return val * val
    })
    return squareArr
  },

  findAllOccurrences: function (arr, target) {
    var locationArr = []
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        locationArr.push(i)
      }
    }
    return locationArr
  }
}
