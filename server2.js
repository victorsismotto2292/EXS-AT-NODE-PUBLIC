const http = require('http');

const port = 3001;

const myServer = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});

    res.end('Tentativa 2 , node javascript');
});

myServer.listen(port, () => {
    console.log(`Server now loading in: http://localhost:${port}`);
})