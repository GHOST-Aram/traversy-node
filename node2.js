const { error } = require('console')
const https = require('https')

const options = {
    hostname: 'jsonplaceholder.typicode.com',
    port: 443,
    path: '/todos/1',
    method: 'GET',
}

const request = https.request(options, response =>{
    console.log(response.statusCode)

    response.on('data', d =>{
        process.stdout.write(d)
    })

    request.on('error', error =>{
        console.error(error)
    })
    
})
request.end
()