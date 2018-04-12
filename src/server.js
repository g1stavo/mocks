var fs = require("fs");
var port = 3000;
var express = require("express");
var server = express();

server.use(express.static(__dirname + 'public'));

function init(){
    server = server.listen(port);
};

function stop(){
    server.close();
}

if(process.argv.indexOf('start') != -1){
    init();
    console.log("Server listening on port: ", port);
}

module.exports = {
    init,
    stop
};
