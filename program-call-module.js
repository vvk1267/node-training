var filterFn = require("./program-module")

var folder = process.argv[2]
var ext = process.argv[3]

filterFn(folder, ext, function(err, files){
    if (err) {
    return console.error('There was an error:', err)
  }
    files.forEach(function(element) {
        console.log(element)
    }, this);
})

// filterFn.performGet(folder, ext, function(err, files){
//     if (err) {
//     return console.error('There was an error:', err)
//   }
//     files.forEach(function(element) {
//         console.log(element)
//     }, this);
// })