exports = typeof window === 'undefined' ? global : window

exports.functionsAnswers = {
  argsAsArray: function (fn, arr) {
    return fn(...arr)
  },

  speak: function (fn, obj) {
    return fn.call(obj)
  },

  functionFunction: function (str) {
    return function innerFunc (val) {
      return str + ', ' + val
    }
  },

  makeClosures: function (arr, fn) {
    var newFuncs = []

    for (var i = 0; i < arr.length; i++) {
      newFuncs.push((function (val) {
        return function () {
          return fn(val)
        }
      })(arr[i]))
    }
    return newFuncs
  },

  partial: function (fn, str1, str2) {
    return function (str3) {
      return fn(str1, str2, str3)
    }
  },

  useArguments: function (...args) {
    return args.reduce(function (acc, val) {
      return acc + val
    })
  },

  callIt: function (fn) {

  },

  partialUsingArguments: function (fn) {

  },

  curryIt: function (fn) {
    return function (x) {
      return function (y) {
        return function (z) {
          return fn(x, y, z)
        }
      }
    }
  }
}
