var fs = require("fs")

fs.readFile("test.txt", function(err, data){
    if(err){
        console.log(err.stack)
        return
    }
    else{
    console.log(data.toString())
    }
console.log("program ended")
})