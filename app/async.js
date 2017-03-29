exports = typeof window === 'undefined' ? global : window

exports.asyncAnswers = {
  async: function (value) {
    var promise = new Promise((resolve, reject) => {
      resolve(value)
    })
    return promise
  },

  manipulateRemoteData: function (url) {
    return $.getJSON(url).then(function (obj) {
      var nameArr = []
      for (var props in obj.people) {
        nameArr.push(obj.people[props].name)
      }
      // sort the names alphabetically
      nameArr.sort()
      return nameArr
    })
  }
}
