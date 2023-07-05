const axios = require('axios')
post = {
    "userId": 200,
    "id": 1100,
    "title": "Elephant is elephant",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  }
  
axios.post('https://jsonplaceholder.typicode.com/posts', {post: post})
.then(response =>{
    console.log(response.status)
    console.log(response)
}).catch(error => console.error(error))