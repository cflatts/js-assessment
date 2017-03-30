exports = typeof window === 'undefined' ? global : window

exports.recursionAnswers = {
  listFiles: function (data, dirName) {
    var fileArr = []
    function recursiveFunc (input, inputDir) {
      var fileListArr = input.files
      for (var i = 0; i < fileListArr.length; i++) {
        if (typeof fileListArr[i] === 'string') {
          fileArr.push(fileListArr[i])
        }
        if (typeof fileListArr[i] === 'object') {
          var newData = fileListArr[i]
          recursiveFunc(newData)
        }
      }
    }
    if (dirName !== undefined) {
      for (var i = 0; i < data.files.length; i++) {
        if (data.files[i].dir === dirName) {
          recursiveFunc(data.files[i])
        }
      }
    } else {
      recursiveFunc(data)
    }
    return fileArr
  },

  permute: function (arr) {

  },

  fibonacci: function (n) {
    // var fibbNum = 1
    // var i = 1
    // function fibb (x, y) {
    //   while (i <= n) {
    //     fibbNum = x + y
    //     console.log(i)
    //     i++
    //   }
    //   x = y
    //   return fibb(x, x + y)
    // }
    // fibb(0, 1)
    // return fibbNum
  },

  validParentheses: function (n) {

  }
}
