const port = 3000;
const getJSONString = obj => {
    return JSON.stringify(obj, null, 2);
};

http = require("http"),
httpStatus = require("http-status-codes"),
app = http.createServer();

app.on("request", (req, res) => {
    var body = [];

    req.on("data", (bodyData) => {
        body.push(bodyData);
    });

    req.on("end", () => {
        bodys = Buffer.concat(body).toString();
        console.log(`Request Body Contents: ${bodys}`);
    });

    console.log(`Method: ${getJSONString(req.method)}`);
    console.log(`Method: ${getJSONString(req.url)}`);
    // console.log(`Method: ${getJSONString(req.headers)}`);
    res.writeHead(httpStatus.OK, {
        "Content-Type" : "text/html"
    });

    let responseMessage = "<h1>This will show on the screen.</h1>";
    res.end(responseMessage);
});

app.listen(port);
console.log(`The server has started and is listen ${port}`);