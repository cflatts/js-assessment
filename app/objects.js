exports = typeof window === 'undefined' ? global : window

exports.objectsAnswers = {
  alterContext: function (fn, obj) {
    return fn.call(obj)
  },

  alterObjects: function (constructor, greeting) {
    constructor.prototype.greeting = greeting
  },

  iterate: function (obj) {
    var propArr = []
    var propName = Object.getOwnPropertyNames(obj)
    for (var props in obj) {
      var propStr = ''
      propName.map(function (val) {
        if (val === props) {
          propStr = props + ': ' + obj[props]
          propArr.push(propStr)
        }
      })
    }
    return propArr
  }
}
