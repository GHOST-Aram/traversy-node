import { readFileFromServer } from '../read-file.js'
import { createServer } from 'node:http'
import { parseUrl } from './url.js'

createServer((request, response) =>{
    const query = parseUrl(request.url)
    const filename = './'+ query.pathname

    readFileFromServer(filename, response)
}).listen(8080)