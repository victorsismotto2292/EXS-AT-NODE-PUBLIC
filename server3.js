// ÚLTIMA TENTATIVA

const http = require('http');

const port = 3002;

const myServer = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});

    res.end('Tentativa 3, node javascript');
});

myServer.listen(port, () => {
    console.log(`Server now loading in: http://localhost:${port}`);
});