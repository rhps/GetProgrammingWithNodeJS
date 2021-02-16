const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World Express!');
    console.log(req.url);
}).listen(port, () => console.log(`The Express.js app listening on port: ${port}!`));