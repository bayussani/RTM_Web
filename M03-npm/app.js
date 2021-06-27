var express = require("express");
var server = express();

var logger = require("x");

server.use(logger("dev"));

server.use(express.static(__dirname + "/publik"));

server.listen(4000, function () {
  console.log("Server run");
});