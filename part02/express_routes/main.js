const express = require('express');
const app = express();
const port = 3000;
const homeController = require("./controllers/homeController")

app.use(homeController.logRequestPaths);

app.use(
    express.urlencoded({
        extended: true
    })
);

app.use(express.json());

app.post("/", homeController.sendReqBody);

app.get("/", homeController.sendReqQuery);

app.get('/items/:vegetable', homeController.sendReqParam);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));