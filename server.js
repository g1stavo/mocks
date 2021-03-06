const port = 3000;
let express = require('express');
let app = express();

app.use(express.static('public'));

app.get('/', (req, res) => res.sendFile(__dirname + '/public/index.html'));

init = () => app = app.listen(port);

stop = () => app.close();

if (process.argv.indexOf('start') != -1) {
    init();
    console.log("Server listening on port: ", port);
}

module.exports = {
    init,
    stop
};
