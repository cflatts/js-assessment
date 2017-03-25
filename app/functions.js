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

  },

  useArguments: function () {

  },

  callIt: function (fn) {

  },

  partialUsingArguments: function (fn) {

  },

  curryIt: function (fn) {

  }
}
