exports = typeof window === 'undefined' ? global : window

exports.numbersAnswers = {
  valueAtBit: function (num, bit) {
    var binaryVal = num.toString(2)
    var binLength = binaryVal.length
    return parseInt(binaryVal[binLength - bit])
  },

  base10: function (str) {
    var convertedVal = parseInt(str, 2)
    return convertedVal
  },

  convertToBinary: function (num) {
    var binaryVal = num.toString(2)
    return ('0' + binaryVal).substr(-8)
  },

  multiply: function (a, b) {
    var num = a * b
    return parseFloat(num.toPrecision(1), 10)
  }
}
