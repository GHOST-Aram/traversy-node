import { FileSystem } from "../read-file.js";

const filesys = new FileSystem()

const readStream = filesys.createFileReadStream('./summer.html')

readStream.on('open', () =>{
    console.log('This file is open!')
})

console.log(readStream)