const { reset } = require("nodemon");

exports.sendReqParam = (req, res) => {
    let veg = req.params.vegetable;
    res.send(`This is the page for ${veg}`);
};

exports.sendReqQuery = (req, res) => {
    let query = req.query;
    res.write("Home");
    res.write(
`\nYour details:
    cart            = ${query['cart']}
    pagesVisited    = ${query['pageVisited']}
    utmcode         = ${query['utmcode']}
        `);
    res.end();
};

exports.sendReqBody = (req, res) => {
    console.log(req.body);
    console.log(req.query);
    res.send("Post Successfull!");
}

exports.logRequestPaths = (req, res, next) => {
    console.log(`Request made to: ${req.url}`);
    next();
};