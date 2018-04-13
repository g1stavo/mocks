var fs = require("fs");
var port = 3000;
var express = require("express");
var app = express();

app.use(express.static('public'));

function init(){
    app = app.listen(port);
};

function stop(){
    app.close();
}

if(process.argv.indexOf('start') != -1){
    init();
    console.log("Server listening on port: ", port);
}

module.exports = {
    init,
    stop
};
