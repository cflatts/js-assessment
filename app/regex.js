exports = typeof window === 'undefined' ? global : window

exports.regexAnswers = {
  containsNumber: function (str) {
    // tests for any digit
    var regEx = /\d/
    return regEx.test(str)
  },

  containsRepeatingLetter: function (str) {

  },

  endsWithVowel: function (str) {
    var regEx = /[aeiouAEIOU]$/
    return regEx.test(str)
  },

  captureThreeNumbers: function (str) {

  },

  matchesPattern: function (str) {

  },

  isUSD: function (str) {

  }
}
