exports = typeof window === 'undefined' ? global : window

exports.countAnswers = {
  count: function (start, end) {
    function inc () {
      var countArr = []
      // console.log(countArr)
      if (start <= end) {
        countArr.push(start)
        // console.log(countArr)
        start = start + 1
      }
      // console.log(countArr)
      return countArr
    }
    var timer = setInterval(inc, 100)
    return {
      cancel: function () {
        clearInterval(timer)
      }
    }
  }
}
