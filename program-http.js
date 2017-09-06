var http = require('http')
var getUrl = process.argv[2]

// http.get(getUrl, function(response){
//     response.on("data", function(content){
//         console.log(JSON.parse(content.toString()))
//         console.log("")
//         console.log(JSON.parse(content.toString()).url)
//     })
// })

http.get(getUrl, function(response){
    response.setEncoding("utf-8")
    response.on("data", console.log)
    response.on("error", console.error)

}).on("error", console.error)

