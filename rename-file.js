import { rename } from 'node:fs'

export const renameFile = (oldName, newName) =>{
    rename(oldName, newName,
        (err) =>{
            if(err) throw err
            console.log('File renamed successfully!')
        }
    )
}

class FileSystem{

    rename = (oldname, newname) =>{
        rename(oldname, newname, 
            error =>{
                if(error) throw error
                console.log('File renamed successfully')
            }
        )
    }
}

const filesys = new FileSystem()

try {
    filesys.rename('./appendfile.js', './append-file.js')
} catch (error) {
    console.error(error)
}