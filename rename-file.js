import { rename } from 'node:fs'

const renameFile = (oldName, newName) =>{
    rename(oldName, newName,
        (err) =>{
            if(err) throw err
            console.log('File renamed successfully!')
        }
    )
}

try {
    renameFile('./appendFile.js', './append-file.js')
} catch (error) {
    console.error(error)
}