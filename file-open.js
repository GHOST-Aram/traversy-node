const filesys = require('fs')

filesys.open('new-file-2.txt', 'w',
    (err, file) =>{
        if(err) throw err
        console.log('File Saved!')
    }
)