exports = typeof window === 'undefined' ? global : window

exports.regexAnswers = {
  containsNumber: function (str) {
    // tests for any digit
    var regEx = /\d/
    return regEx.test(str)
  },

  containsRepeatingLetter: function (str) {
    for (var i = 0; i < str.length; i++) {
      var char = str[i]
      var regEx = new RegExp(char + '{2}')
    }
  },

  endsWithVowel: function (str) {
    // test for upper and lowercase vowel character at end of string
    var regEx = /[aeiouAEIOU]$/
    return regEx.test(str)
  },

  captureThreeNumbers: function (str) {
    var regEx = /\d{3}/

    if (regEx.exec(str)) {
      return regEx.exec(str)[0]
    } else {
      return false
    }
  },

  matchesPattern: function (str) {
    if (str.length === 12) {
      var regEx = /[0-9]{3}\b-[0-9]{3}\b-[0-9]{4}/
      return regEx.test(str)
    }
    return false
  },

  isUSD: function (str) {

  }
}
