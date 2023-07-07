const http = require('http')
const filesys = require('fs')

http.createServer((req, res) =>{
    filesys.readFile('./demofile.html', 
        (err, data) =>{
            if(err) throw err
            
            res.write(data)
            return res.end()
        }
    )
}).listen(8090)