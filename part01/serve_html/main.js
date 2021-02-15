const port = 3000,
    http = require("http"),
    httpStatusCodes = require("http-status-codes"),
    fs = require("fs"),
    router = require("./route"),
    plainTextContentType = {
        "Content-Type": "text/plain"
    },
    htmlContenType = {
        "Content-Type": "text/html"
    },
    customReadFile = (file, res) => {
        fs.readFile(`./${file}`, (errors, data) => {
            if (errors) {
                console.log("Error reading the file...");
            }
            res.end(data);
        });
    };

router.get("/", (req, res) => {
    res.writeHead(httpStatusCodes.OK, plainTextContentType);
    res.end("INDEX");
});

router.get("/index.html", (req, res) => {
    res.writeHead(httpStatusCodes.OK, htmlContenType);
    customReadFile("/views/index.html", res);
});

router.post("/", (req, res) => {
    res.writeHead(httpStatusCodes.OK, plainTextContentType);
    res.end("POSTED");
});

http.createServer(router.handle).listen(3000);
console.log(`The server is listening on port number ${port}`);