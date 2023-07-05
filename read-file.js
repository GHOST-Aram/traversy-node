import { readFile, createReadStream } from 'node:fs'

export class FileSystem{
    
    readFileFromServer = (filename, response) =>{
        readFile(filename, (err, data) =>{
            if(err) {
                response.writeHead(404, { 'Content-Type': 'text/html' })
                return response.end('404 Not Found')
            } else{
                response.writeHead(200, {'Content-type': 'text/html' })
                response.write(data)
                return response.end()
            }
        })
    }

    createFileReadStream = (filename) =>{
        return createReadStream(filename)
    }
}
 