exports = typeof window === 'undefined' ? global : window

exports.asyncAnswers = {
  async: function (value) {
    var promise = new Promise((resolve, reject) => {
      resolve(value)
    })
    return promise
  },

  manipulateRemoteData: function (url) {

  }
}
