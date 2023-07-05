import {unlink} from 'node:fs'

unlink('./new-file-3.txt', (err) =>{
    if(err) throw err
    console.log('File Deleted')
})