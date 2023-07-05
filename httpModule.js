const http =  require('http')

const url = require('url')

http.createServer((req, res) => {
    res.writeHead(200, {'Content-type': 'text/html'})
    const q = url.parse(req.url, true).query
    const text = `${q.year} ${q.month}`
    res.end(text)
}).listen(8080)