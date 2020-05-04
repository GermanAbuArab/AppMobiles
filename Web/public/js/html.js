const base = require('./httpbase');


const http = require('http');
const port = 3000;
const hostname = "127.0.0.1";


const run = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    base.personas().then((data) => {
        console.log(data);
            res.end(JSON.stringify(data));

    });
});

run.listen(port, hostname, () => {
        console.log(`El servidor esta ejecutando en http://${hostname}:${port}`)
    }
);
