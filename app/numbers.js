exports = typeof window === 'undefined' ? global : window

exports.numbersAnswers = {
  valueAtBit: function (num, bit) {

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

  }
}
