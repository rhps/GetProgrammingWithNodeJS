const express = require('express')
const app = express()
const homeController = require('./controllers/homeController')

app.set("port", process.env.PORT || 3000)
app.set("view engine", "ejs");

app.get('/', (req, res) => res.send('Hello World!'))
app.get("/name/:myname", homeController.respondWithName)

app.listen(app.get("port"), () => console.log(`Example app listening on http://localhost:${ app.get("port") }`));