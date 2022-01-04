const express = require('express');
const app = express();
const homeController = require('./controllers/homeController');
const layouts = require("express-ejs-layouts");

app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");
app.use(layouts);

app.get('/', (req, res) => res.send('Hello World!'));
app.get("/name/:myname", homeController.respondWithName);

app.listen(app.get("port"), () => console.log(`Example app listening on http://localhost:${ app.get("port") }`));