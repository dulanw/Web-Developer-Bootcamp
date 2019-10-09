var express = require("express");
var app = express();


app.get("/", function (request, response) {
    response.send("Hi There!");
});

app.get("*", function (request, response) {
    response.send("404 not Found");
});

app.listen(3000, function () {
    console.log("Server Running");
});