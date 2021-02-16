const express = require('express')
const app = express()
const port = 3000

app.use((req, res, next) => {
    console.log(`Request made to: ${req.url}`);
    next();
});

app.use(
    express.urlencoded({
        extended: true
    })
);

app.use(express.json());

app.post("/", (req, res) => {
    console.log(req.body);
    console.log(req.query);
    res.send("Post Successfull!");
});

app.get("/", (req, res) => {
    let query = req.query;
    res.write("Home");
    res.write(
`\nYour details:
    cart            = ${query['cart']}
    pagesVisited    = ${query['pageVisited']}
    utmcode         = ${query['utmcode']}
        `);
    res.end();
});

app.get('/items/:vegetable', (req, res) => {
    let veg = req.params.vegetable;
    res.send(`This is the page for ${veg}`);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));