const filesys = require('fs')

filesys.appendFile('./new-file-1.txt', 'Hello hall of fame!', 

    (err) =>{
        if(err) throw err
        console.log('Changes Saved Successfully!')
    }
)