exports = typeof window === 'undefined' ? global : window

exports.countAnswers = {
  count: function (start, end) {
    var countArr = []
    function inc () {
      if (start <= end) {
        countArr.push(start)
        start = start + 1
      }
      return countArr
    }
    setInterval(inc, 100)
    return {
      cancel: function () {
        clearInterval(inc)
      }
    }
  }
}
