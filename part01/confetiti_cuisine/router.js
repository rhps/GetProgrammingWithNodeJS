const httpStatus = require("http-status-codes"),
    contenTypes = require("./contentTypes"),
    utils = require("./utils");

const routes = {
    "GET": {},
    "POST": {}
};

exports.handle = (req, res) => {
    try {
        routes[req.method][req.url](req, res);
        console.log(`User Accessed: ${req.url}`);
    } catch (e) {
        res.writeHead(httpStatus.OK, contenTypes.html);
        utils.getFile("views/error.html", res);
        console.log(`Error to acces: ${req.url}`);
    }
};

exports.get = (url, action) => {
    routes["GET"][url] = action;
}

exports.post = (url, action) => {
    routes["POST"][url] = action;
}