exports = typeof window === 'undefined' ? global : window

exports.stringsAnswers = {
  reduceString: function (str, amount) {
    var charArr = str.split('')
    var shortStr = ''
    var countObj = {}
    for (var i = 0; i < charArr.length; i++) {
      var char = charArr[i]
      if (countObj[char] === undefined || (countObj[char] === amount && charArr[i] !== charArr[i - 1])) {
        countObj[char] = 1
        shortStr = shortStr + char
      } else if (countObj[char] < amount) {
        countObj[char] = countObj[char] + 1
        shortStr = shortStr + char
      }
    }
    return shortStr
  },

  wordWrap: function (str, cols) {

  },

  reverseString: function (str) {
    var rev = ''
    for (var i = str.length - 1; i >= 0; i--) {
      rev = rev + str[i]
    }
    return rev
  }
}
