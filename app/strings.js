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
    // console.log(str)
    // console.log(cols)
    // var tempArr = []
    // var charArr = str.split('')
    // var breakPoint = cols - 1
    // for (var i = 0; i < charArr.length; i++) {
    //   var tempStr = ''
    //   var strLength = tempStr.length
    //   console.log('string length', strLength)
    //   if (charArr[breakPoint] === '') {
    //     tempArr.push(tempStr)
    //     tempStr = ''
    //   } else {
    //     console.log('temporary string', tempStr)
    //     tempStr = tempStr + charArr[i]
    //   }
    // }
    // console.log('returned array value', tempArr)
    // return tempArr
  },

  reverseString: function (str) {
    var rev = ''
    for (var i = str.length - 1; i >= 0; i--) {
      rev = rev + str[i]
    }
    return rev
  }
}
