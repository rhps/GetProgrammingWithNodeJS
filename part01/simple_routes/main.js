const port = 3001;
const routeResponseMap = {
    "/info": "<h1>Info Page</h1>",
    "/contact": "<h1>Contact Us</h1>",
    "/about": "<h1>Learn More About Us.</h1>",
    "/hello": "<h1>Say hello by emailing us here</h1>",
    "/error": "<h1>Sorry the page you are looking for is not here</h1>",
}

http = require("http"),
httpStatus = require("http-status-codes"),
app = http.createServer((request, response) => {
    console.log("Received an incoming request!");
    response.writeHead(httpStatus.OK, {
        "Content-Type": "text/html"
    });

    if (routeResponseMap[request.url]) {
        setTimeout(() => response.end(routeResponseMap[request.url]), 2000)
        // response.end(routeResponseMap[request.url]);
    } else {
        response.end("<h1>Welcome!</h1>");
    }
    console.log(`Url : ${request.url}`);
    // let responseMessage = "<h1>Hello, Universe!</h1>";
    // response.write(responseMessage);
    // response.end();
    // console.log(`Sent a response ${responseMessage}`);
});

app.listen(port);
console.log(`The server has started and is listening on port number: ${port}`);