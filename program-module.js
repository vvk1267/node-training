var fs = require("fs")
var path = require("path")

module.exports = function(folder, fileExt, callback){
    fs.readdir(folder, function(err, files){
        if(err != null){
            return callback(err, null)
        }
        
        files = files.filter(function(file){
            return path.extname(file) === "." + fileExt
        })

        callback(null, files)
    })
}
// To add functions and objects to the root of your 
// module, you can add them to the special exports object.

// exports.performGet = function(folder, fileExt, callback){
//     fs.readdir(folder, function(err, files){
//         if(err != null){
//             return callback (err, null)
//         }
        
//         files = files.filter(function(file){
//             return path.extname(file) === "." + fileExt
//         })

//         callback(null, files)
//     })
// }