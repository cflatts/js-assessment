exports = typeof window === 'undefined' ? global : window

exports.asyncAnswers = {
  async: function (value) {
    console.log(value)
  },

  manipulateRemoteData: function (url) {

  }
}
