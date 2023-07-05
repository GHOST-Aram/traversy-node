const filesys = require('fs')

filesys.writeFile('./new-file-3.txt', 'Hello content!',
    (err) =>{
        if (err) throw err
        console.log('Saved!')
    }
)

filesys.appendFile('./new-file-3.txt', '\nWelcome to hall of fame',
    (err) =>{
        if (err) throw err
        console.log('Updated Successfully!')
    }
)