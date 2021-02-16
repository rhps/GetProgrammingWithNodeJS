exports.respondWithName = (req, res) => {
    let paramsName = req.params.myname;
    res.render("index", { name: paramsName });
}