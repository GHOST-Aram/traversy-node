import { FileSystem } from '../read-file.js'
import { createServer } from 'node:http'
import { parseUrl } from './url.js'

const filesys = new FileSystem()

createServer((request, response) =>{
    const query = parseUrl(request.url)
    const filename = './'+ query.pathname

    filesys.readFileFromServer(filename, response)
}).listen(8080)