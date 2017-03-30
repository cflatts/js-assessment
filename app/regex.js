exports = typeof window === 'undefined' ? global : window

exports.regexAnswers = {
  containsNumber: function (str) {
    // tests for any digit
    var regEx = /\d/
    return regEx.test(str)
  },

  containsRepeatingLetter: function (str) {
    for (var i = 0; i < str.length; i++) {
      var regExLetter = /[a-zA-Z]/
      if (regExLetter.test(str.charAt(i))) {
        var regEx = new RegExp(str.charAt(i) + '{2}')
        if (str.match(regEx)) {
          return regEx.test(str)
        }
      }
    }
    return false
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
    // tests for '$' at the beginning
    // followed by 1-3 digits in a row
    // followed by an optional string ',xxx' (where x is a digit) repeated multiple times
    // followed by the optional string '.xx' (where x is a digit)
    var regEx = /^\$\d{1,3}((,\d{3})?)+(\.\d{2})?$/
    return regEx.test(str)
  }
}
