const https = require('https')

const data = JSON.stringify(
    {
        "userId": 200,
        "id": 1100,
        "title": "Elephant is elephant",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      }
)

const options = {
    hostname: 'jsonplaceholder.typicode.com',
    port : 443,
    path: '/posts',
    method: 'POST',
    headers: {
        'Content-Type' : 'application/json',
        'Content-length': data.length
    }
}

const request = https.request(options, response =>{
    console.log(response.statusCode)

    response.on('date', d =>{
        process.stdout.write(d)
    })

    request.on('error', error =>{
        console.error(error)
    })
})

request.write(data)
request.end()