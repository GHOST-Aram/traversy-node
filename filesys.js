const http = require('http')
const filesys = require('fs')

http.createServer((req, res) =>{
    filesys.readFile('./demofile.html', (err, data) =>{
        res.write(data)

        return res.end()
    })
}).listen(8090)